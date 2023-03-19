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

binarySearchTree.find(56)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrRUFBUztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbkU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSxnQ0FBZ0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2JpbmFyeS1zZWFyY2gtdHJlZXMuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lcmdlU29ydH0gZnJvbSAnLi4vLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQnO1xuXG4vLyBsZXQgdGVzdEFyciA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5sZXQgdGVzdEFyciA9IFsyMCwgMzAsIDMyLCAzNCwgMzYsIDQwLCA1MCwgNjAsIDY1LCA3MCwgNzUsIDgwLCA4NV1cbmNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IG4gb2YgYXJyKSB7XG4gICAgICAgIGlmIChyZXN1bHQuaW5kZXhPZihuKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jb25zdCByZW1vdmVBbmRTb3J0ID0gKGFycikgPT4geyBcbiAgICByZXR1cm4gbWVyZ2VTb3J0KHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSk7XG59XG5cbmxldCBzb3J0ZWRBcnJXaXRob3V0RHVwbGljYXRlcyA9IHJlbW92ZUFuZFNvcnQodGVzdEFycik7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGQpe1xuICAgICAgICB0aGlzLmRhdGEgPSBkO1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gICAgcHJpbnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpXG4gICAgfVxufSBcblxuY2xhc3MgVHJlZSB7XG4gICAgcm9vdCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnI7XG4gICAgfVxuXG4gICAgaW5zZXJ0ICh2YWx1ZSwgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Egbm9kZSB3aXRoIHRoaXMgdmFsdWUgYWxyZWFkeSBleGlzdHMsIG5vIGR1cGxpY2F0ZXMgYWxsb3dlZCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgZWxzZSBub2RlLnJpZ2h0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkgdGhpcy5pbnNlcnQodmFsdWUsIG5vZGUubGVmdCk7XG4gICAgICAgICAgICBlbHNlIG5vZGUubGVmdCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgICAvLyBmaW5kIG5leHQgc21hbGxlc3Qgbm9kZSB0byB1c2UgaW4gZGVsZXRpb25cbiAgICBuZXh0U21hbGxlc3Qobm9kZSkge1xuICAgICAgICBsZXQgdG1wID0gbm9kZS5yaWdodDtcbiAgICAgICAgd2hpbGUgKHRtcC5sZWZ0KSB7XG4gICAgICAgICAgICB0bXAgPSB0bXAubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wO1xuICAgIH1cbiAgICAgICAgLy8gZmluZCBuZXh0IHNtYWxsZXN0IG5vZGUncyBwYXJlbnQgdG8gdXNlIGluIGRlbGV0aW9uXG4gICAgbmV4dFNtYWxsZXN0UGFyZW50KG5vZGUpIHtcbiAgICAgICAgbGV0IHRtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIGlmICh0bXAubGVmdC5sZWZ0KSB7XG4gICAgICAgICAgICB3aGlsZSAodG1wLmxlZnQubGVmdCkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHRtcC5sZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG5cbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gdXNlIGluIGRlbGV0aW9uIHdoZW4gZGVsZXRpb24gbm9kZSBoYXMgbXVsdGlwbGUgY2hpbGRyZW5cbiAgICByZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlKSB7XG4gICAgICAgICAgICAvLyBmaW5kIG5leHQgc21hbGxlc3Qgbm9kZVxuICAgICAgICBsZXQgbmV4dFNtYWxsZXN0ID0gdGhpcy5uZXh0U21hbGxlc3Qobm9kZSk7XG4gICAgICAgICAgICAvLyBpZiBub2RlIHRvIHJpZ2h0IGlzIG5vdCBuZXh0IHNtYWxsZXN0LCBmaXJzdCBuZXh0IHNtYWxsZXN0IFxuICAgICAgICAgICAgLy8gbm9kZSdzIHBhcmVudCwgdGhlbiBsaW5rIGl0IHRvIG5leHQgc21hbGxlc3Qgbm9kZSdzIGNoaWxkcmVuO1xuICAgICAgICBsZXQgcGFyZW50T2ZOZXh0U21hbGxlc3Q7XG4gICAgICAgIGlmIChub2RlLnJpZ2h0ICE9PSBuZXh0U21hbGxlc3QpIHtcbiAgICAgICAgICAgIHBhcmVudE9mTmV4dFNtYWxsZXN0ID0gdGhpcy5uZXh0U21hbGxlc3RQYXJlbnQobm9kZSk7XG4gICAgICAgICAgICBwYXJlbnRPZk5leHRTbWFsbGVzdC5sZWZ0ID0gbmV4dFNtYWxsZXN0LnJpZ2h0O1xuICAgICAgICAgICAgbmV4dFNtYWxsZXN0LnJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHJlcGxhY2VtZW50IG5vZGUncyBsZWZ0IHN1YnRyZWVcbiAgICAgICAgbmV4dFNtYWxsZXN0LmxlZnQgPSBub2RlLmxlZnQ7XG4gICAgICAgIHJldHVybiBuZXh0U21hbGxlc3Q7XG4gICAgfVxuXG4gICAgZGVsZXRlICh2YWx1ZSwgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIC8vIGlmIHRyZWUgaXMgZW1wdHkgcmV0dXJuO1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAvLyBpZiByb290IG5vZGUgPT0gdmFsdWU7XG4gICAgICAgIGlmIChub2RlLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgYSBjaGlsZCBvZiBub2RlXG4gICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgPT0gcmlnaHQgY2hpbGQgb2Ygbm9kZVxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgJiYgdmFsdWUgPT0gbm9kZS5yaWdodC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIDAgY2hpbGRyZW4gcmVtb3ZlIG5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnJpZ2h0LnJpZ2h0ICYmICFub2RlLnJpZ2h0LmxlZnQpIHJldHVybiBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIG5vZGUgaGFzIGNoaWxkcmVuLi4uXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdmFsdWUgbm9kZSBoYXMgcmlnaHQgY2hpbGQgbm9kZSBidXQgbm90IGxlZnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodC5yaWdodCAmJiAhbm9kZS5yaWdodC5sZWZ0KSByZXR1cm4gbm9kZS5yaWdodCA9IG5vZGUucmlnaHQucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIG5vZGUgaGFzIGxlZnQgY2hpbGQgbm9kZSBidXQgbm90IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQubGVmdCAmJiAhbm9kZS5yaWdodC5yaWdodCkgcmV0dXJuIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vZGUgaGFzIGxlZnQgJiByaWdodCBjaGlsZFxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5vZGUucmlnaHQgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUucmlnaHQpOyBcblxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgdmFsdWUgPT0gbGVmdCBjaGlsZCBub2RlO1xuICAgICAgICAgICAgICAgIC8vIHBlcmZvcm0gc2FtZSBhY3Rpb25zIGJ1dCBmb3IgbGVmdCBzaWRlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGVmdCAmJiB2YWx1ZSA9PSBub2RlLmxlZnQuZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5sZWZ0LmxlZnQgJiYgIW5vZGUubGVmdC5yaWdodCkgcmV0dXJuIG5vZGUubGVmdCA9IG51bGxcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbm9kZS5sZWZ0LnJpZ2h0ICYmIG5vZGUubGVmdC5sZWZ0KSByZXR1cm4gbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LmxlZnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5sZWZ0LnJpZ2h0ICYmICFub2RlLmxlZnQubGVmdCkgcmV0dXJuIG5vZGUubGVmdCA9IG5vZGUubGVmdC5yaWdodDtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBub2RlLmxlZnQgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUubGVmdCk7XG5cbiAgICAgICAgICAgICAgICAvLyBlbHNlIHJlY3Vyc2UgZG93biB0cmVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLmxlZnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhICYmIG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBmaW5kKHZhbHVlLCBub2RlID0gdGhpcy5yb290KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLmRhdGEpIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgIFxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkgdGhpcy5maW5kKHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHRoaXMuZmluZCh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICB9XG59XG5cbmxldCBidWlsZFRyZWUgPSAoZCwgc3RhcnQ9MCwgZW5kKSA9PiB7XG4gICAgZW5kID0gZC5sZW5ndGggLTE7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBsZXQgcm9vdCA9IG5ldyBOb2RlKGRbbWlkXSk7XG4gICAgcm9vdC5sZWZ0ID0gYnVpbGRUcmVlKGQuc2xpY2UoMCwgbWlkKSwgc3RhcnQsIGVuZCk7XG4gICAgcm9vdC5yaWdodCA9IGJ1aWxkVHJlZShkLnNsaWNlKG1pZCsxKSwgc3RhcnQsIGVuZCk7XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cbmxldCBiaW5hcnlTZWFyY2hUcmVlID0gbmV3IFRyZWUoc29ydGVkQXJyV2l0aG91dER1cGxpY2F0ZXMpO1xuYmluYXJ5U2VhcmNoVHJlZS5yb290ID0gYnVpbGRUcmVlKGJpbmFyeVNlYXJjaFRyZWUuYXJyYXkpO1xuXG5cbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gICAgfVxufVxuXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCg1Nik7XG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCgxMClcbmJpbmFyeVNlYXJjaFRyZWUuaW5zZXJ0KDM1KVxucHJldHR5UHJpbnQoYmluYXJ5U2VhcmNoVHJlZS5yb290KTtcblxuLy9cbi8vIGJpbmFyeVNlYXJjaFRyZWUuZGVsZXRlKDUwKTsgXG4vLyBwcmV0dHlQcmludChiaW5hcnlTZWFyY2hUcmVlLnJvb3QpOyBcbi8vXG5cbmJpbmFyeVNlYXJjaFRyZWUuZmluZCg1NikiLCJjb25zdCBtZXJnZSA9IChsaXN0QSwgbGlzdEIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAwO1xuICAgIGxldCBrID0gMDtcbiAgICBsZXQgbiA9IGxpc3RBLmxlbmd0aDtcbiAgICBsZXQgbSA9IGxpc3RCLmxlbmd0aDtcbiAgICBsZXQgbGlzdEMgPSBbXTtcbiAgICB3aGlsZSAoaSA8IG4gJiYgaiA8bSkge1xuICAgICAgICBpZiAobGlzdEFbaV0gPCBsaXN0QltqXSkge1xuICAgICAgICAgICAgbGlzdENbaysrXSA9IGxpc3RBW2krK11cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RDW2srK10gPSBsaXN0QltqKytdXG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbGlzdENbaysrXSA9IGxpc3RBW2ldO1xuICAgIH1cbiAgICBmb3IgKDsgaiA8IG07IGorKykge1xuICAgICAgICBsaXN0Q1trKytdID0gbGlzdEJbal07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBsaXN0Qztcbn1cblxuLy8gbWVyZ2UoWzIsIDQsIDYsIDhdLCBbMSwgMywgNSwgN10pIC4uLi8vLi4uIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVxuLy8gbWVyZ2UoWzJdLCBbMV0pIC4uLi8vLi4uWzEsIDJdXG5cbmNvbnN0IG1lcmdlU29ydCA9IChsaXN0KSA9PiB7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICBsZXQgZmluaXNoID0gbGlzdC5sZW5ndGg7XG4gICAgaWYgKGZpbmlzaCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGZpbmlzaCkgLyAyKTtcbiAgICBsZXQgeCA9IG1lcmdlU29ydChsaXN0LnNsaWNlKDAsIG1pZCkpXG4gICAgbGV0IHkgPSBtZXJnZVNvcnQobGlzdC5zbGljZShtaWQpKVxuICAgIHJldHVybiBtZXJnZSh4LCB5KTtcbn1cblxuXG4vLyBtZXJnZVNvcnQoWzMsIDEsIDIsIDQsIDcsIDUsIDYsIDhdKSAuLi4vLy4uLiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbi8vIG1lcmdlU29ydChbMiwgNiwgMiwgNzUsIDIsIDQsIDgsIDMsIDU3LCAyLCAzNV0pIC4uLi8vLi4uIFsyLCAyLCAyLCAyLCAzLCA0LCA2LCA4LCAzNSwgNTcsIDc1XVxuXG5leHBvcnQge21lcmdlLCBtZXJnZVNvcnR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9