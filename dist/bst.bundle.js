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

    find(value, node=this.root) {
        if (value == node.data) return node;
        else if (value > node.data) return this.find(value, node.right);
        else if (value < node.data) return this.find(value, node.left);
    }

    levelOrder(func, start=this.root) {
        let arr = []
        let queue = [start];
        while(queue.length > 0) {
              // make copy of "First Out" node;
            let node = queue[0]
              // shift "First Out" node out of que and into function
            if (func) func(queue.shift());
              // if no function, push to array for return
            else if (!func) arr.push(queue.shift());
              // recursion
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (!func) return arr
    }

    inOrder(func, node=this.root) {
        if (node == null) return;
        this.inOrder(func, node.left);
        func(node);
        this.inOrder(func, node.right)
    }

    preOrder(func, node=this.root) {
        if (node == null) return;
        func(node);
        this.preOrder(func, node.left);
        this.preOrder(func, node.right)
    }
    
    postOrder(func, node=this.root) {
        if (node== null) return; 
        this.postOrder(func, node.right);
        func(node);
        this.postOrder(func, node.left);
    }

    height(node) {
          // find depth of given node from root
        let fromRoot = this.depth(node);
          // init deepest variable and traverse subtree ot find
          // deepest node from subtree and use fromRoot to find difference
        let deepest = 0;
        this.levelOrder((item) => {
            if (this.depth(item) > deepest) deepest = this.depth(item);
        }, node)
        let height = deepest - fromRoot;
        return height
    }

    depth(node, start=this.root, count = 0) {
        if (node == start) return count;
          // add 1 to counter each time recurse down tree happens
        count++;
        if (node.data < start.data) return this.depth(node, start.left, count)
        if (node.data > start.data) return this.depth(node, start.right, count);
    }

    isBalanced() {
          // height of left and right subtrees to compare
        let left = this.height(this.root.left);
        let right = this.height(this.root.right);
        return (left - right < 2 && left - right > -2)
    }

    rebalance() {
        let newArr = [];
        this.levelOrder((node) => {
            newArr.push(node.data);
        })
        this.root = buildTree((0,_recursion_and_sort_algos_merge_sort__WEBPACK_IMPORTED_MODULE_0__.mergeSort)(newArr)) 
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

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}


//
//
// ~~~~~~~ TESTING AREA ~~~~~~~~~~~
//
//


let binarySearchTree = new Tree(sortedArrWithoutDuplicates);
binarySearchTree.root = buildTree(binarySearchTree.array);




binarySearchTree.insert(56);
binarySearchTree.insert(10);
binarySearchTree.insert(9);
binarySearchTree.insert(35);
binarySearchTree.insert(8)
binarySearchTree.insert(7)
binarySearchTree.insert(6)
binarySearchTree.insert(5)
prettyPrint(binarySearchTree.root);

//
// binarySearchTree.delete(50); 
// prettyPrint(binarySearchTree.root); 
//

let testNode = binarySearchTree.find(70);
let testNodeTwo = binarySearchTree.find(56);

console.log(binarySearchTree.isBalanced())
binarySearchTree.rebalance();
prettyPrint(binarySearchTree.root)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrRUFBUztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOEJBQThCLCtFQUFTO0FBQ3ZDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2JpbmFyeS1zZWFyY2gtdHJlZXMuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lcmdlU29ydH0gZnJvbSAnLi4vLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQnO1xuXG4vLyBsZXQgdGVzdEFyciA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5sZXQgdGVzdEFyciA9IFsyMCwgMzAsIDMyLCAzNCwgMzYsIDQwLCA1MCwgNjAsIDY1LCA3MCwgNzUsIDgwLCA4NV1cbmNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IG4gb2YgYXJyKSB7XG4gICAgICAgIGlmIChyZXN1bHQuaW5kZXhPZihuKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jb25zdCByZW1vdmVBbmRTb3J0ID0gKGFycikgPT4geyBcbiAgICByZXR1cm4gbWVyZ2VTb3J0KHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSk7XG59XG5cbmxldCBzb3J0ZWRBcnJXaXRob3V0RHVwbGljYXRlcyA9IHJlbW92ZUFuZFNvcnQodGVzdEFycik7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGQpe1xuICAgICAgICB0aGlzLmRhdGEgPSBkO1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gICAgcHJpbnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpXG4gICAgfVxufSBcblxuY2xhc3MgVHJlZSB7XG4gICAgcm9vdCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnI7XG4gICAgfVxuXG4gICAgaW5zZXJ0ICh2YWx1ZSwgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Egbm9kZSB3aXRoIHRoaXMgdmFsdWUgYWxyZWFkeSBleGlzdHMsIG5vIGR1cGxpY2F0ZXMgYWxsb3dlZCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgZWxzZSBub2RlLnJpZ2h0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkgdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgICAgICAgICBlbHNlIG5vZGUubGVmdCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICAvLyBmaW5kIG5leHQgc21hbGxlc3Qgbm9kZSB0byB1c2UgaW4gZGVsZXRpb25cbiAgICBuZXh0U21hbGxlc3Qobm9kZSkge1xuICAgICAgICBsZXQgdG1wID0gbm9kZS5yaWdodDtcbiAgICAgICAgd2hpbGUgKHRtcC5sZWZ0KSB7XG4gICAgICAgICAgICB0bXAgPSB0bXAubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wO1xuICAgIH1cbiAgICAgICAgLy8gZmluZCBuZXh0IHNtYWxsZXN0IG5vZGUncyBwYXJlbnQgdG8gdXNlIGluIGRlbGV0aW9uXG4gICAgbmV4dFNtYWxsZXN0UGFyZW50KG5vZGUpIHtcbiAgICAgICAgbGV0IHRtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIGlmICh0bXAubGVmdC5sZWZ0KSB7XG4gICAgICAgICAgICB3aGlsZSAodG1wLmxlZnQubGVmdCkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHRtcC5sZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG4gICAgICAgIC8vIGZ1bmN0aW9uIHRvIHVzZSBpbiBkZWxldGlvbiB3aGVuIGRlbGV0aW9uIG5vZGUgaGFzIG11bHRpcGxlIGNoaWxkcmVuXG4gICAgcmVwbGFjZU5vZGVXaXRoVHdvQ2hpbGRyZW4obm9kZSkge1xuICAgICAgICAgICAgLy8gZmluZCBuZXh0IHNtYWxsZXN0IG5vZGVcbiAgICAgICAgbGV0IG5leHRTbWFsbGVzdCA9IHRoaXMubmV4dFNtYWxsZXN0KG5vZGUpO1xuICAgICAgICAgICAgLy8gaWYgbm9kZSB0byByaWdodCBpcyBub3QgbmV4dCBzbWFsbGVzdCwgZmlyc3QgbmV4dCBzbWFsbGVzdCBcbiAgICAgICAgICAgIC8vIG5vZGUncyBwYXJlbnQsIHRoZW4gbGluayBpdCB0byBuZXh0IHNtYWxsZXN0IG5vZGUncyBjaGlsZHJlbjtcbiAgICAgICAgbGV0IHBhcmVudE9mTmV4dFNtYWxsZXN0O1xuICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbmV4dFNtYWxsZXN0KSB7XG4gICAgICAgICAgICBwYXJlbnRPZk5leHRTbWFsbGVzdCA9IHRoaXMubmV4dFNtYWxsZXN0UGFyZW50KG5vZGUpO1xuICAgICAgICAgICAgcGFyZW50T2ZOZXh0U21hbGxlc3QubGVmdCA9IG5leHRTbWFsbGVzdC5yaWdodDtcbiAgICAgICAgICAgIG5leHRTbWFsbGVzdC5yaWdodCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldCByZXBsYWNlbWVudCBub2RlJ3MgbGVmdCBzdWJ0cmVlXG4gICAgICAgIG5leHRTbWFsbGVzdC5sZWZ0ID0gbm9kZS5sZWZ0O1xuICAgICAgICByZXR1cm4gbmV4dFNtYWxsZXN0O1xuICAgIH1cblxuICAgIGRlbGV0ZSAodmFsdWUsIG5vZGU9dGhpcy5yb290KSB7XG4gICAgICAgICAgICAvLyBpZiB0cmVlIGlzIGVtcHR5IHJldHVybjtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgLy8gaWYgcm9vdCBub2RlID09IHZhbHVlO1xuICAgICAgICBpZiAobm9kZS5kYXRhID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290ID0gdGhpcy5yZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIGEgY2hpbGQgb2Ygbm9kZVxuICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlID09IHJpZ2h0IGNoaWxkIG9mIG5vZGVcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0ICYmIHZhbHVlID09IG5vZGUucmlnaHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAwIGNoaWxkcmVuIHJlbW92ZSBub2RlO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5yaWdodC5yaWdodCAmJiAhbm9kZS5yaWdodC5sZWZ0KSByZXR1cm4gbm9kZS5yaWdodCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiBub2RlIGhhcyBjaGlsZHJlbi4uLlxuICAgICAgICAgICAgICAgICAgICAvL2lmIHZhbHVlIG5vZGUgaGFzIHJpZ2h0IGNoaWxkIG5vZGUgYnV0IG5vdCBsZWZ0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQucmlnaHQgJiYgIW5vZGUucmlnaHQubGVmdCkgcmV0dXJuIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBub2RlIGhhcyBsZWZ0IGNoaWxkIG5vZGUgYnV0IG5vdCByaWdodDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0LmxlZnQgJiYgIW5vZGUucmlnaHQucmlnaHQpIHJldHVybiBub2RlLnJpZ2h0ID0gbm9kZS5yaWdodC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBub2RlIGhhcyBsZWZ0ICYgcmlnaHQgY2hpbGRcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBub2RlLnJpZ2h0ID0gdGhpcy5yZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlLnJpZ2h0KTsgXG5cbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIHZhbHVlID09IGxlZnQgY2hpbGQgbm9kZTtcbiAgICAgICAgICAgICAgICAvLyBwZXJmb3JtIHNhbWUgYWN0aW9ucyBidXQgZm9yIGxlZnQgc2lkZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgJiYgdmFsdWUgPT0gbm9kZS5sZWZ0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUubGVmdC5sZWZ0ICYmICFub2RlLmxlZnQucmlnaHQpIHJldHVybiBub2RlLmxlZnQgPSBudWxsXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIW5vZGUubGVmdC5yaWdodCAmJiBub2RlLmxlZnQubGVmdCkgcmV0dXJuIG5vZGUubGVmdCA9IG5vZGUubGVmdC5sZWZ0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubGVmdC5yaWdodCAmJiAhbm9kZS5sZWZ0LmxlZnQpIHJldHVybiBub2RlLmxlZnQgPSBub2RlLmxlZnQucmlnaHQ7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbm9kZS5sZWZ0ID0gdGhpcy5yZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlLmxlZnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZWxzZSByZWN1cnNlIGRvd24gdHJlZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhICYmIG5vZGUubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5sZWZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZmluZCh2YWx1ZSwgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG5vZGUuZGF0YSkgcmV0dXJuIG5vZGU7XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHJldHVybiB0aGlzLmZpbmQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgfVxuXG4gICAgbGV2ZWxPcmRlcihmdW5jLCBzdGFydD10aGlzLnJvb3QpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdXG4gICAgICAgIGxldCBxdWV1ZSA9IFtzdGFydF07XG4gICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gbWFrZSBjb3B5IG9mIFwiRmlyc3QgT3V0XCIgbm9kZTtcbiAgICAgICAgICAgIGxldCBub2RlID0gcXVldWVbMF1cbiAgICAgICAgICAgICAgLy8gc2hpZnQgXCJGaXJzdCBPdXRcIiBub2RlIG91dCBvZiBxdWUgYW5kIGludG8gZnVuY3Rpb25cbiAgICAgICAgICAgIGlmIChmdW5jKSBmdW5jKHF1ZXVlLnNoaWZ0KCkpO1xuICAgICAgICAgICAgICAvLyBpZiBubyBmdW5jdGlvbiwgcHVzaCB0byBhcnJheSBmb3IgcmV0dXJuXG4gICAgICAgICAgICBlbHNlIGlmICghZnVuYykgYXJyLnB1c2gocXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICAgIC8vIHJlY3Vyc2lvblxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkgcXVldWUucHVzaChub2RlLmxlZnQpXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcXVldWUucHVzaChub2RlLnJpZ2h0KVxuICAgICAgICB9XG4gICAgICAgIGlmICghZnVuYykgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIGluT3JkZXIoZnVuYywgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmluT3JkZXIoZnVuYywgbm9kZS5sZWZ0KTtcbiAgICAgICAgZnVuYyhub2RlKTtcbiAgICAgICAgdGhpcy5pbk9yZGVyKGZ1bmMsIG5vZGUucmlnaHQpXG4gICAgfVxuXG4gICAgcHJlT3JkZXIoZnVuYywgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBmdW5jKG5vZGUpO1xuICAgICAgICB0aGlzLnByZU9yZGVyKGZ1bmMsIG5vZGUubGVmdCk7XG4gICAgICAgIHRoaXMucHJlT3JkZXIoZnVuYywgbm9kZS5yaWdodClcbiAgICB9XG4gICAgXG4gICAgcG9zdE9yZGVyKGZ1bmMsIG5vZGU9dGhpcy5yb290KSB7XG4gICAgICAgIGlmIChub2RlPT0gbnVsbCkgcmV0dXJuOyBcbiAgICAgICAgdGhpcy5wb3N0T3JkZXIoZnVuYywgbm9kZS5yaWdodCk7XG4gICAgICAgIGZ1bmMobm9kZSk7XG4gICAgICAgIHRoaXMucG9zdE9yZGVyKGZ1bmMsIG5vZGUubGVmdCk7XG4gICAgfVxuXG4gICAgaGVpZ2h0KG5vZGUpIHtcbiAgICAgICAgICAvLyBmaW5kIGRlcHRoIG9mIGdpdmVuIG5vZGUgZnJvbSByb290XG4gICAgICAgIGxldCBmcm9tUm9vdCA9IHRoaXMuZGVwdGgobm9kZSk7XG4gICAgICAgICAgLy8gaW5pdCBkZWVwZXN0IHZhcmlhYmxlIGFuZCB0cmF2ZXJzZSBzdWJ0cmVlIG90IGZpbmRcbiAgICAgICAgICAvLyBkZWVwZXN0IG5vZGUgZnJvbSBzdWJ0cmVlIGFuZCB1c2UgZnJvbVJvb3QgdG8gZmluZCBkaWZmZXJlbmNlXG4gICAgICAgIGxldCBkZWVwZXN0ID0gMDtcbiAgICAgICAgdGhpcy5sZXZlbE9yZGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kZXB0aChpdGVtKSA+IGRlZXBlc3QpIGRlZXBlc3QgPSB0aGlzLmRlcHRoKGl0ZW0pO1xuICAgICAgICB9LCBub2RlKVxuICAgICAgICBsZXQgaGVpZ2h0ID0gZGVlcGVzdCAtIGZyb21Sb290O1xuICAgICAgICByZXR1cm4gaGVpZ2h0XG4gICAgfVxuXG4gICAgZGVwdGgobm9kZSwgc3RhcnQ9dGhpcy5yb290LCBjb3VudCA9IDApIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gc3RhcnQpIHJldHVybiBjb3VudDtcbiAgICAgICAgICAvLyBhZGQgMSB0byBjb3VudGVyIGVhY2ggdGltZSByZWN1cnNlIGRvd24gdHJlZSBoYXBwZW5zXG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmIChub2RlLmRhdGEgPCBzdGFydC5kYXRhKSByZXR1cm4gdGhpcy5kZXB0aChub2RlLCBzdGFydC5sZWZ0LCBjb3VudClcbiAgICAgICAgaWYgKG5vZGUuZGF0YSA+IHN0YXJ0LmRhdGEpIHJldHVybiB0aGlzLmRlcHRoKG5vZGUsIHN0YXJ0LnJpZ2h0LCBjb3VudCk7XG4gICAgfVxuXG4gICAgaXNCYWxhbmNlZCgpIHtcbiAgICAgICAgICAvLyBoZWlnaHQgb2YgbGVmdCBhbmQgcmlnaHQgc3VidHJlZXMgdG8gY29tcGFyZVxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMuaGVpZ2h0KHRoaXMucm9vdC5sZWZ0KTtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5oZWlnaHQodGhpcy5yb290LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIChsZWZ0IC0gcmlnaHQgPCAyICYmIGxlZnQgLSByaWdodCA+IC0yKVxuICAgIH1cblxuICAgIHJlYmFsYW5jZSgpIHtcbiAgICAgICAgbGV0IG5ld0FyciA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsT3JkZXIoKG5vZGUpID0+IHtcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKG5vZGUuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShtZXJnZVNvcnQobmV3QXJyKSkgXG4gICAgfVxuXG59XG5cbmxldCBidWlsZFRyZWUgPSAoZCwgc3RhcnQ9MCwgZW5kKSA9PiB7XG4gICAgZW5kID0gZC5sZW5ndGggLTE7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBsZXQgcm9vdCA9IG5ldyBOb2RlKGRbbWlkXSk7XG4gICAgcm9vdC5sZWZ0ID0gYnVpbGRUcmVlKGQuc2xpY2UoMCwgbWlkKSwgc3RhcnQsIGVuZCk7XG4gICAgcm9vdC5yaWdodCA9IGJ1aWxkVHJlZShkLnNsaWNlKG1pZCsxKSwgc3RhcnQsIGVuZCk7XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gICAgfVxufVxuXG5cbi8vXG4vL1xuLy8gfn5+fn5+fiBURVNUSU5HIEFSRUEgfn5+fn5+fn5+fn5cbi8vXG4vL1xuXG5cbmxldCBiaW5hcnlTZWFyY2hUcmVlID0gbmV3IFRyZWUoc29ydGVkQXJyV2l0aG91dER1cGxpY2F0ZXMpO1xuYmluYXJ5U2VhcmNoVHJlZS5yb290ID0gYnVpbGRUcmVlKGJpbmFyeVNlYXJjaFRyZWUuYXJyYXkpO1xuXG5cblxuXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCg1Nik7XG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCgxMCk7XG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCg5KTtcbmJpbmFyeVNlYXJjaFRyZWUuaW5zZXJ0KDM1KTtcbmJpbmFyeVNlYXJjaFRyZWUuaW5zZXJ0KDgpXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCg3KVxuYmluYXJ5U2VhcmNoVHJlZS5pbnNlcnQoNilcbmJpbmFyeVNlYXJjaFRyZWUuaW5zZXJ0KDUpXG5wcmV0dHlQcmludChiaW5hcnlTZWFyY2hUcmVlLnJvb3QpO1xuXG4vL1xuLy8gYmluYXJ5U2VhcmNoVHJlZS5kZWxldGUoNTApOyBcbi8vIHByZXR0eVByaW50KGJpbmFyeVNlYXJjaFRyZWUucm9vdCk7IFxuLy9cblxubGV0IHRlc3ROb2RlID0gYmluYXJ5U2VhcmNoVHJlZS5maW5kKDcwKTtcbmxldCB0ZXN0Tm9kZVR3byA9IGJpbmFyeVNlYXJjaFRyZWUuZmluZCg1Nik7XG5cbmNvbnNvbGUubG9nKGJpbmFyeVNlYXJjaFRyZWUuaXNCYWxhbmNlZCgpKVxuYmluYXJ5U2VhcmNoVHJlZS5yZWJhbGFuY2UoKTtcbnByZXR0eVByaW50KGJpbmFyeVNlYXJjaFRyZWUucm9vdClcbiIsImNvbnN0IG1lcmdlID0gKGxpc3RBLCBsaXN0QikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG4gICAgbGV0IGsgPSAwO1xuICAgIGxldCBuID0gbGlzdEEubGVuZ3RoO1xuICAgIGxldCBtID0gbGlzdEIubGVuZ3RoO1xuICAgIGxldCBsaXN0QyA9IFtdO1xuICAgIHdoaWxlIChpIDwgbiAmJiBqIDxtKSB7XG4gICAgICAgIGlmIChsaXN0QVtpXSA8IGxpc3RCW2pdKSB7XG4gICAgICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaSsrXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdENbaysrXSA9IGxpc3RCW2orK11cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaV07XG4gICAgfVxuICAgIGZvciAoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgIGxpc3RDW2srK10gPSBsaXN0QltqXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxpc3RDO1xufVxuXG4vLyBtZXJnZShbMiwgNCwgNiwgOF0sIFsxLCAzLCA1LCA3XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZShbMl0sIFsxXSkgLi4uLy8uLi5bMSwgMl1cblxuY29uc3QgbWVyZ2VTb3J0ID0gKGxpc3QpID0+IHtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBmaW5pc2ggPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoZmluaXNoIDwgMikge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZmluaXNoKSAvIDIpO1xuICAgIGxldCB4ID0gbWVyZ2VTb3J0KGxpc3Quc2xpY2UoMCwgbWlkKSlcbiAgICBsZXQgeSA9IG1lcmdlU29ydChsaXN0LnNsaWNlKG1pZCkpXG4gICAgcmV0dXJuIG1lcmdlKHgsIHkpO1xufVxuXG5cbi8vIG1lcmdlU29ydChbMywgMSwgMiwgNCwgNywgNSwgNiwgOF0pIC4uLi8vLi4uIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVxuLy8gbWVyZ2VTb3J0KFsyLCA2LCAyLCA3NSwgMiwgNCwgOCwgMywgNTcsIDIsIDM1XSkgLi4uLy8uLi4gWzIsIDIsIDIsIDIsIDMsIDQsIDYsIDgsIDM1LCA1NywgNzVdXG5cbmV4cG9ydCB7bWVyZ2UsIG1lcmdlU29ydH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=