"use strict";
(self["webpackChunkbinary_search_trees"] = self["webpackChunkbinary_search_trees"] || []).push([["bst"],{

/***/ "./src/binary-search-trees.js":
/*!************************************!*\
  !*** ./src/binary-search-trees.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recursion_and_sort_algos_merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../recursion-and-sort-algos/merge-sort */ "../recursion-and-sort-algos/merge-sort.js");


// let testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let testArr = [20, 30, 32, 34, 36, 40, 50, 60, 65, 70, 75, 80, 85]
const removeDuplicates = (arr) => {
    let result = [];
    for (let n of arr) {
        if (result.indexOf(n) === -1) {
            result.push(n);
        }
    }
    return result;
}
const removeAndSort = (arr) => { 
    return (0,_recursion_and_sort_algos_merge_sort__WEBPACK_IMPORTED_MODULE_0__.mergeSort)(removeDuplicates(arr));
}

let sortedArrWithoutDuplicates = removeAndSort(testArr);

class Node {
    constructor(d){
        this.data = d;
        this.left = null;
        this.right = null;
    }
    print () {
        console.log(this.data)
    }
} 

class Tree {
    root = null;
    constructor(arr) {
        this.array = arr;
    }

    insert (value, node=this.root) {
        if (value == node.data) {
            console.log('A node with this value already exists, no duplicates allowed')
            return;
        }
        if (value > node.data) {
            if (node.right) this.insert(value, node.right);
            else node.right = new Node(value);
        }
        if (value < node.data) {
            if (node.left) this.insert(value, node.left);
            else node.left = new Node(value);
        }
    }

        // find next smallest node to use in deletion
    nextSmallest(node) {
        let tmp = node.right;
        while (tmp.left) {
            tmp = tmp.left;
        }
        return tmp;
    }
        // find next smallest node's parent to use in deletion
    nextSmallestParent(node) {
        let tmp = node.right;
        if (tmp.left.left) {
            while (tmp.left.left) {
                tmp = tmp.left
            }
        }
        return tmp;
    }
        // function to use in deletion when deletion node has multiple children
    replaceNodeWithTwoChildren(node) {
            // find next smallest node
        let nextSmallest = this.nextSmallest(node);
            // if node to right is not next smallest, first next smallest 
            // node's parent, then link it to next smallest node's children;
        let parentOfNextSmallest;
        if (node.right !== nextSmallest) {
            parentOfNextSmallest = this.nextSmallestParent(node);
            parentOfNextSmallest.left = nextSmallest.right;
            nextSmallest.right = node.right;
        }
            // set replacement node's left subtree
        nextSmallest.left = node.left;
        return nextSmallest;
    }

    delete (value, node=this.root) {
            // if tree is empty return;
        if (node == null) return;
            // if root node == value;
        if (node.data == value) {
            return this.root = this.replaceNodeWithTwoChildren(node);
        } else {
            // check if value is a child of node
                // if value == right child of node
            if (node.right && value == node.right.data) {
                    // if 0 children remove node;
                if (!node.right.right && !node.right.left) return node.right = null;
                // else if node has children...
                    //if value node has right child node but not left;
                else if (node.right.right && !node.right.left) return node.right = node.right.right;
                    // if value node has left child node but not right;
                else if (node.right.left && !node.right.right) return node.right = node.right.left;
                    // if node has left & right child
                else return node.right = this.replaceNodeWithTwoChildren(node.right); 

                // else if value == left child node;
                // perform same actions but for left side
            } else if (node.left && value == node.left.data) {
                if (!node.left.left && !node.left.right) return node.left = null
                else if (!node.left.right && node.left.left) return node.left = node.left.left;
                else if (node.left.right && !node.left.left) return node.left = node.left.right;
                else return node.left = this.replaceNodeWithTwoChildren(node.left);

                // else recurse down tree;
            } else {
                if (value < node.data && node.left) {
                    this.delete(value, node.left)
                }
                else if (value > node.data && node.right) {
                    this.delete(value, node.right);
                }
            }
        } 
    }

    find(value, node = this.root) {
        if (value == node.data) console.log(node)
        else if (value > node.data) this.find(value, node.right);
        else if (value < node.data) this.find(value, node.left);
    }

    levelOrder(func) {
        let queue = [this.root];
        while(queue.length > 0) {
            let node = queue[0]
            func(queue.shift());
            if (node.left) queue.push(node.left)
            if (node.right)queue.push(node.right)
        }
    }

    inOrder(func, node) {
        if (node == null) return;
        this.inOrder(func, node.left);
        func(node);
        this.inOrder(func, node.right)
    }

    preOrder(func, node) {
        if (node == null) return;
        func(node);
        this.preOrder(func, node.left);
        this.preOrder(func, node.right)
    }
    
    postOrder(func, node) {
        if (node== null) return; 
        this.postOrder(func, node.right);
        func(node);
        this.postOrder(func, node.left);
    }
}

let buildTree = (d, start=0, end) => {
    end = d.length -1;
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new Node(d[mid]);
    root.left = buildTree(d.slice(0, mid), start, end);
    root.right = buildTree(d.slice(mid+1), start, end);
    return root;
}

let binarySearchTree = new Tree(sortedArrWithoutDuplicates);
binarySearchTree.root = buildTree(binarySearchTree.array);


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

binarySearchTree.insert(56);
binarySearchTree.insert(10)
binarySearchTree.insert(35)
prettyPrint(binarySearchTree.root);

//
// binarySearchTree.delete(50); 
// prettyPrint(binarySearchTree.root); 
//

// binarySearchTree.find(56)


binarySearchTree.postOrder((node) => {
    console.log(node.data)
}, binarySearchTree.root) 

/***/ }),

/***/ "../recursion-and-sort-algos/merge-sort.js":
/*!*************************************************!*\
  !*** ../recursion-and-sort-algos/merge-sort.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "mergeSort": () => (/* binding */ mergeSort)
/* harmony export */ });
const merge = (listA, listB) => {
    let i = 0;
    let j = 0;
    let k = 0;
    let n = listA.length;
    let m = listB.length;
    let listC = [];
    while (i < n && j <m) {
        if (listA[i] < listB[j]) {
            listC[k++] = listA[i++]
        } else {
            listC[k++] = listB[j++]
        }
    }
    for (; i < n; i++) {
        listC[k++] = listA[i];
    }
    for (; j < m; j++) {
        listC[k++] = listB[j];
    }
    
    return listC;
}

// merge([2, 4, 6, 8], [1, 3, 5, 7]) ...//... [1, 2, 3, 4, 5, 6, 7, 8]
// merge([2], [1]) ...//...[1, 2]

const mergeSort = (list) => {
    let start = 0;
    let finish = list.length;
    if (finish < 2) {
        return list;
    }
    let mid = Math.floor((start + finish) / 2);
    let x = mergeSort(list.slice(0, mid))
    let y = mergeSort(list.slice(mid))
    return merge(x, y);
}


// mergeSort([3, 1, 2, 4, 7, 5, 6, 8]) ...//... [1, 2, 3, 4, 5, 6, 7, 8]
// mergeSort([2, 6, 2, 75, 2, 4, 8, 3, 57, 2, 35]) ...//... [2, 2, 2, 2, 3, 4, 6, 8, 35, 57, 75]



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/binary-search-trees.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrRUFBUztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1TUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2JpbmFyeS1zZWFyY2gtdHJlZXMuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lcmdlU29ydH0gZnJvbSAnLi4vLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQnO1xuXG4vLyBsZXQgdGVzdEFyciA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5sZXQgdGVzdEFyciA9IFsyMCwgMzAsIDMyLCAzNCwgMzYsIDQwLCA1MCwgNjAsIDY1LCA3MCwgNzUsIDgwLCA4NV1cbmNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IG4gb2YgYXJyKSB7XG4gICAgICAgIGlmIChyZXN1bHQuaW5kZXhPZihuKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jb25zdCByZW1vdmVBbmRTb3J0ID0gKGFycikgPT4geyBcbiAgICByZXR1cm4gbWVyZ2VTb3J0KHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSk7XG59XG5cbmxldCBzb3J0ZWRBcnJXaXRob3V0RHVwbGljYXRlcyA9IHJlbW92ZUFuZFNvcnQodGVzdEFycik7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGQpe1xuICAgICAgICB0aGlzLmRhdGEgPSBkO1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gICAgcHJpbnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpXG4gICAgfVxufSBcblxuY2xhc3MgVHJlZSB7XG4gICAgcm9vdCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnI7XG4gICAgfVxuXG4gICAgaW5zZXJ0ICh2YWx1ZSwgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Egbm9kZSB3aXRoIHRoaXMgdmFsdWUgYWxyZWFkeSBleGlzdHMsIG5vIGR1cGxpY2F0ZXMgYWxsb3dlZCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgZWxzZSBub2RlLnJpZ2h0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkgdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgICAgICAgICBlbHNlIG5vZGUubGVmdCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICAvLyBmaW5kIG5leHQgc21hbGxlc3Qgbm9kZSB0byB1c2UgaW4gZGVsZXRpb25cbiAgICBuZXh0U21hbGxlc3Qobm9kZSkge1xuICAgICAgICBsZXQgdG1wID0gbm9kZS5yaWdodDtcbiAgICAgICAgd2hpbGUgKHRtcC5sZWZ0KSB7XG4gICAgICAgICAgICB0bXAgPSB0bXAubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wO1xuICAgIH1cbiAgICAgICAgLy8gZmluZCBuZXh0IHNtYWxsZXN0IG5vZGUncyBwYXJlbnQgdG8gdXNlIGluIGRlbGV0aW9uXG4gICAgbmV4dFNtYWxsZXN0UGFyZW50KG5vZGUpIHtcbiAgICAgICAgbGV0IHRtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIGlmICh0bXAubGVmdC5sZWZ0KSB7XG4gICAgICAgICAgICB3aGlsZSAodG1wLmxlZnQubGVmdCkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHRtcC5sZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIHVzZSBpbiBkZWxldGlvbiB3aGVuIGRlbGV0aW9uIG5vZGUgaGFzIG11bHRpcGxlIGNoaWxkcmVuXG4gICAgcmVwbGFjZU5vZGVXaXRoVHdvQ2hpbGRyZW4obm9kZSkge1xuICAgICAgICAgICAgLy8gZmluZCBuZXh0IHNtYWxsZXN0IG5vZGVcbiAgICAgICAgbGV0IG5leHRTbWFsbGVzdCA9IHRoaXMubmV4dFNtYWxsZXN0KG5vZGUpO1xuICAgICAgICAgICAgLy8gaWYgbm9kZSB0byByaWdodCBpcyBub3QgbmV4dCBzbWFsbGVzdCwgZmlyc3QgbmV4dCBzbWFsbGVzdCBcbiAgICAgICAgICAgIC8vIG5vZGUncyBwYXJlbnQsIHRoZW4gbGluayBpdCB0byBuZXh0IHNtYWxsZXN0IG5vZGUncyBjaGlsZHJlbjtcbiAgICAgICAgbGV0IHBhcmVudE9mTmV4dFNtYWxsZXN0O1xuICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbmV4dFNtYWxsZXN0KSB7XG4gICAgICAgICAgICBwYXJlbnRPZk5leHRTbWFsbGVzdCA9IHRoaXMubmV4dFNtYWxsZXN0UGFyZW50KG5vZGUpO1xuICAgICAgICAgICAgcGFyZW50T2ZOZXh0U21hbGxlc3QubGVmdCA9IG5leHRTbWFsbGVzdC5yaWdodDtcbiAgICAgICAgICAgIG5leHRTbWFsbGVzdC5yaWdodCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCByZXBsYWNlbWVudCBub2RlJ3MgbGVmdCBzdWJ0cmVlXG4gICAgICAgIG5leHRTbWFsbGVzdC5sZWZ0ID0gbm9kZS5sZWZ0O1xuICAgICAgICByZXR1cm4gbmV4dFNtYWxsZXN0O1xuICAgIH1cblxuICAgIGRlbGV0ZSAodmFsdWUsIG5vZGU9dGhpcy5yb290KSB7XG4gICAgICAgICAgICAvLyBpZiB0cmVlIGlzIGVtcHR5IHJldHVybjtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgLy8gaWYgcm9vdCBub2RlID09IHZhbHVlO1xuICAgICAgICBpZiAobm9kZS5kYXRhID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290ID0gdGhpcy5yZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIGEgY2hpbGQgb2Ygbm9kZVxuICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlID09IHJpZ2h0IGNoaWxkIG9mIG5vZGVcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0ICYmIHZhbHVlID09IG5vZGUucmlnaHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAwIGNoaWxkcmVuIHJlbW92ZSBub2RlO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5yaWdodC5yaWdodCAmJiAhbm9kZS5yaWdodC5sZWZ0KSByZXR1cm4gbm9kZS5yaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiBub2RlIGhhcyBjaGlsZHJlbi4uLlxuICAgICAgICAgICAgICAgICAgICAvL2lmIHZhbHVlIG5vZGUgaGFzIHJpZ2h0IGNoaWxkIG5vZGUgYnV0IG5vdCBsZWZ0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQucmlnaHQgJiYgIW5vZGUucmlnaHQubGVmdCkgcmV0dXJuIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBub2RlIGhhcyBsZWZ0IGNoaWxkIG5vZGUgYnV0IG5vdCByaWdodDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0LmxlZnQgJiYgIW5vZGUucmlnaHQucmlnaHQpIHJldHVybiBub2RlLnJpZ2h0ID0gbm9kZS5yaWdodC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBub2RlIGhhcyBsZWZ0ICYgcmlnaHQgY2hpbGRcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBub2RlLnJpZ2h0ID0gdGhpcy5yZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlLnJpZ2h0KTsgXG5cbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIHZhbHVlID09IGxlZnQgY2hpbGQgbm9kZTtcbiAgICAgICAgICAgICAgICAvLyBwZXJmb3JtIHNhbWUgYWN0aW9ucyBidXQgZm9yIGxlZnQgc2lkZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgJiYgdmFsdWUgPT0gbm9kZS5sZWZ0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUubGVmdC5sZWZ0ICYmICFub2RlLmxlZnQucmlnaHQpIHJldHVybiBub2RlLmxlZnQgPSBudWxsXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIW5vZGUubGVmdC5yaWdodCAmJiBub2RlLmxlZnQubGVmdCkgcmV0dXJuIG5vZGUubGVmdCA9IG5vZGUubGVmdC5sZWZ0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubGVmdC5yaWdodCAmJiAhbm9kZS5sZWZ0LmxlZnQpIHJldHVybiBub2RlLmxlZnQgPSBub2RlLmxlZnQucmlnaHQ7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbm9kZS5sZWZ0ID0gdGhpcy5yZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlLmxlZnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZWxzZSByZWN1cnNlIGRvd24gdHJlZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhICYmIG5vZGUubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5sZWZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZmluZCh2YWx1ZSwgbm9kZSA9IHRoaXMucm9vdCkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbm9kZS5kYXRhKSBjb25zb2xlLmxvZyhub2RlKVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkgdGhpcy5maW5kKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHRoaXMuZmluZCh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICB9XG5cbiAgICBsZXZlbE9yZGVyKGZ1bmMpIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gW3RoaXMucm9vdF07XG4gICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gcXVldWVbMF1cbiAgICAgICAgICAgIGZ1bmMocXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSBxdWV1ZS5wdXNoKG5vZGUubGVmdClcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KXF1ZXVlLnB1c2gobm9kZS5yaWdodClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluT3JkZXIoZnVuYywgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMuaW5PcmRlcihmdW5jLCBub2RlLmxlZnQpO1xuICAgICAgICBmdW5jKG5vZGUpO1xuICAgICAgICB0aGlzLmluT3JkZXIoZnVuYywgbm9kZS5yaWdodClcbiAgICB9XG5cbiAgICBwcmVPcmRlcihmdW5jLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgZnVuYyhub2RlKTtcbiAgICAgICAgdGhpcy5wcmVPcmRlcihmdW5jLCBub2RlLmxlZnQpO1xuICAgICAgICB0aGlzLnByZU9yZGVyKGZ1bmMsIG5vZGUucmlnaHQpXG4gICAgfVxuICAgIFxuICAgIHBvc3RPcmRlcihmdW5jLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlPT0gbnVsbCkgcmV0dXJuOyBcbiAgICAgICAgdGhpcy5wb3N0T3JkZXIoZnVuYywgbm9kZS5yaWdodCk7XG4gICAgICAgIGZ1bmMobm9kZSk7XG4gICAgICAgIHRoaXMucG9zdE9yZGVyKGZ1bmMsIG5vZGUubGVmdCk7XG4gICAgfVxufVxuXG5sZXQgYnVpbGRUcmVlID0gKGQsIHN0YXJ0PTAsIGVuZCkgPT4ge1xuICAgIGVuZCA9IGQubGVuZ3RoIC0xO1xuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgbGV0IHJvb3QgPSBuZXcgTm9kZShkW21pZF0pO1xuICAgIHJvb3QubGVmdCA9IGJ1aWxkVHJlZShkLnNsaWNlKDAsIG1pZCksIHN0YXJ0LCBlbmQpO1xuICAgIHJvb3QucmlnaHQgPSBidWlsZFRyZWUoZC5zbGljZShtaWQrMSksIHN0YXJ0LCBlbmQpO1xuICAgIHJldHVybiByb290O1xufVxuXG5sZXQgYmluYXJ5U2VhcmNoVHJlZSA9IG5ldyBUcmVlKHNvcnRlZEFycldpdGhvdXREdXBsaWNhdGVzKTtcbmJpbmFyeVNlYXJjaFRyZWUucm9vdCA9IGJ1aWxkVHJlZShiaW5hcnlTZWFyY2hUcmVlLmFycmF5KTtcblxuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICAgIH1cbn1cblxuYmluYXJ5U2VhcmNoVHJlZS5pbnNlcnQoNTYpO1xuYmluYXJ5U2VhcmNoVHJlZS5pbnNlcnQoMTApXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCgzNSlcbnByZXR0eVByaW50KGJpbmFyeVNlYXJjaFRyZWUucm9vdCk7XG5cbi8vXG4vLyBiaW5hcnlTZWFyY2hUcmVlLmRlbGV0ZSg1MCk7IFxuLy8gcHJldHR5UHJpbnQoYmluYXJ5U2VhcmNoVHJlZS5yb290KTsgXG4vL1xuXG4vLyBiaW5hcnlTZWFyY2hUcmVlLmZpbmQoNTYpXG5cblxuYmluYXJ5U2VhcmNoVHJlZS5wb3N0T3JkZXIoKG5vZGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhub2RlLmRhdGEpXG59LCBiaW5hcnlTZWFyY2hUcmVlLnJvb3QpICIsImNvbnN0IG1lcmdlID0gKGxpc3RBLCBsaXN0QikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG4gICAgbGV0IGsgPSAwO1xuICAgIGxldCBuID0gbGlzdEEubGVuZ3RoO1xuICAgIGxldCBtID0gbGlzdEIubGVuZ3RoO1xuICAgIGxldCBsaXN0QyA9IFtdO1xuICAgIHdoaWxlIChpIDwgbiAmJiBqIDxtKSB7XG4gICAgICAgIGlmIChsaXN0QVtpXSA8IGxpc3RCW2pdKSB7XG4gICAgICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaSsrXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdENbaysrXSA9IGxpc3RCW2orK11cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaV07XG4gICAgfVxuICAgIGZvciAoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgIGxpc3RDW2srK10gPSBsaXN0QltqXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxpc3RDO1xufVxuXG4vLyBtZXJnZShbMiwgNCwgNiwgOF0sIFsxLCAzLCA1LCA3XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZShbMl0sIFsxXSkgLi4uLy8uLi5bMSwgMl1cblxuY29uc3QgbWVyZ2VTb3J0ID0gKGxpc3QpID0+IHtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBmaW5pc2ggPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoZmluaXNoIDwgMikge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZmluaXNoKSAvIDIpO1xuICAgIGxldCB4ID0gbWVyZ2VTb3J0KGxpc3Quc2xpY2UoMCwgbWlkKSlcbiAgICBsZXQgeSA9IG1lcmdlU29ydChsaXN0LnNsaWNlKG1pZCkpXG4gICAgcmV0dXJuIG1lcmdlKHgsIHkpO1xufVxuXG5cbi8vIG1lcmdlU29ydChbMywgMSwgMiwgNCwgNywgNSwgNiwgOF0pIC4uLi8vLi4uIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVxuLy8gbWVyZ2VTb3J0KFsyLCA2LCAyLCA3NSwgMiwgNCwgOCwgMywgNTcsIDIsIDM1XSkgLi4uLy8uLi4gWzIsIDIsIDIsIDIsIDMsIDQsIDYsIDgsIDM1LCA1NywgNzVdXG5cbmV4cG9ydCB7bWVyZ2UsIG1lcmdlU29ydH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=