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


binarySearchTree.levelOrder((node) => {
    console.log(node)
})

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrRUFBUztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvYmluYXJ5LXNlYXJjaC10cmVlcy5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4uL3JlY3Vyc2lvbi1hbmQtc29ydC1hbGdvcy9tZXJnZS1zb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2VTb3J0fSBmcm9tICcuLi8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydCc7XG5cbi8vIGxldCB0ZXN0QXJyID0gWzEsIDcsIDQsIDIzLCA4LCA5LCA0LCAzLCA1LCA3LCA5LCA2NywgNjM0NSwgMzI0XTtcbmxldCB0ZXN0QXJyID0gWzIwLCAzMCwgMzIsIDM0LCAzNiwgNDAsIDUwLCA2MCwgNjUsIDcwLCA3NSwgODAsIDg1XVxuY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IChhcnIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgbiBvZiBhcnIpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5pbmRleE9mKG4pID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmNvbnN0IHJlbW92ZUFuZFNvcnQgPSAoYXJyKSA9PiB7IFxuICAgIHJldHVybiBtZXJnZVNvcnQocmVtb3ZlRHVwbGljYXRlcyhhcnIpKTtcbn1cblxubGV0IHNvcnRlZEFycldpdGhvdXREdXBsaWNhdGVzID0gcmVtb3ZlQW5kU29ydCh0ZXN0QXJyKTtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZCl7XG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbiAgICBwcmludCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSlcbiAgICB9XG59IFxuXG5jbGFzcyBUcmVlIHtcbiAgICByb290ID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcihhcnIpIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycjtcbiAgICB9XG5cbiAgICBpbnNlcnQgKHZhbHVlLCBub2RlPXRoaXMucm9vdCkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQSBub2RlIHdpdGggdGhpcyB2YWx1ZSBhbHJlYWR5IGV4aXN0cywgbm8gZHVwbGljYXRlcyBhbGxvd2VkJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSB0aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgICAgICAgICBlbHNlIG5vZGUucmlnaHQgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSB0aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIGVsc2Ugbm9kZS5sZWZ0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAgIC8vIGZpbmQgbmV4dCBzbWFsbGVzdCBub2RlIHRvIHVzZSBpbiBkZWxldGlvblxuICAgIG5leHRTbWFsbGVzdChub2RlKSB7XG4gICAgICAgIGxldCB0bXAgPSBub2RlLnJpZ2h0O1xuICAgICAgICB3aGlsZSAodG1wLmxlZnQpIHtcbiAgICAgICAgICAgIHRtcCA9IHRtcC5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bXA7XG4gICAgfVxuICAgICAgICAvLyBmaW5kIG5leHQgc21hbGxlc3Qgbm9kZSdzIHBhcmVudCB0byB1c2UgaW4gZGVsZXRpb25cbiAgICBuZXh0U21hbGxlc3RQYXJlbnQobm9kZSkge1xuICAgICAgICBsZXQgdG1wID0gbm9kZS5yaWdodDtcbiAgICAgICAgaWYgKHRtcC5sZWZ0LmxlZnQpIHtcbiAgICAgICAgICAgIHdoaWxlICh0bXAubGVmdC5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgdG1wID0gdG1wLmxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wO1xuICAgIH1cbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gdXNlIGluIGRlbGV0aW9uIHdoZW4gZGVsZXRpb24gbm9kZSBoYXMgbXVsdGlwbGUgY2hpbGRyZW5cbiAgICByZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlKSB7XG4gICAgICAgICAgICAvLyBmaW5kIG5leHQgc21hbGxlc3Qgbm9kZVxuICAgICAgICBsZXQgbmV4dFNtYWxsZXN0ID0gdGhpcy5uZXh0U21hbGxlc3Qobm9kZSk7XG4gICAgICAgICAgICAvLyBpZiBub2RlIHRvIHJpZ2h0IGlzIG5vdCBuZXh0IHNtYWxsZXN0LCBmaXJzdCBuZXh0IHNtYWxsZXN0IFxuICAgICAgICAgICAgLy8gbm9kZSdzIHBhcmVudCwgdGhlbiBsaW5rIGl0IHRvIG5leHQgc21hbGxlc3Qgbm9kZSdzIGNoaWxkcmVuO1xuICAgICAgICBsZXQgcGFyZW50T2ZOZXh0U21hbGxlc3Q7XG4gICAgICAgIGlmIChub2RlLnJpZ2h0ICE9PSBuZXh0U21hbGxlc3QpIHtcbiAgICAgICAgICAgIHBhcmVudE9mTmV4dFNtYWxsZXN0ID0gdGhpcy5uZXh0U21hbGxlc3RQYXJlbnQobm9kZSk7XG4gICAgICAgICAgICBwYXJlbnRPZk5leHRTbWFsbGVzdC5sZWZ0ID0gbmV4dFNtYWxsZXN0LnJpZ2h0O1xuICAgICAgICAgICAgbmV4dFNtYWxsZXN0LnJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2V0IHJlcGxhY2VtZW50IG5vZGUncyBsZWZ0IHN1YnRyZWVcbiAgICAgICAgbmV4dFNtYWxsZXN0LmxlZnQgPSBub2RlLmxlZnQ7XG4gICAgICAgIHJldHVybiBuZXh0U21hbGxlc3Q7XG4gICAgfVxuXG4gICAgZGVsZXRlICh2YWx1ZSwgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIC8vIGlmIHRyZWUgaXMgZW1wdHkgcmV0dXJuO1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAvLyBpZiByb290IG5vZGUgPT0gdmFsdWU7XG4gICAgICAgIGlmIChub2RlLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgYSBjaGlsZCBvZiBub2RlXG4gICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgPT0gcmlnaHQgY2hpbGQgb2Ygbm9kZVxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgJiYgdmFsdWUgPT0gbm9kZS5yaWdodC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIDAgY2hpbGRyZW4gcmVtb3ZlIG5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnJpZ2h0LnJpZ2h0ICYmICFub2RlLnJpZ2h0LmxlZnQpIHJldHVybiBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIG5vZGUgaGFzIGNoaWxkcmVuLi4uXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdmFsdWUgbm9kZSBoYXMgcmlnaHQgY2hpbGQgbm9kZSBidXQgbm90IGxlZnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodC5yaWdodCAmJiAhbm9kZS5yaWdodC5sZWZ0KSByZXR1cm4gbm9kZS5yaWdodCA9IG5vZGUucmlnaHQucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIG5vZGUgaGFzIGxlZnQgY2hpbGQgbm9kZSBidXQgbm90IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQubGVmdCAmJiAhbm9kZS5yaWdodC5yaWdodCkgcmV0dXJuIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vZGUgaGFzIGxlZnQgJiByaWdodCBjaGlsZFxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5vZGUucmlnaHQgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUucmlnaHQpOyBcblxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgdmFsdWUgPT0gbGVmdCBjaGlsZCBub2RlO1xuICAgICAgICAgICAgICAgIC8vIHBlcmZvcm0gc2FtZSBhY3Rpb25zIGJ1dCBmb3IgbGVmdCBzaWRlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGVmdCAmJiB2YWx1ZSA9PSBub2RlLmxlZnQuZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5sZWZ0LmxlZnQgJiYgIW5vZGUubGVmdC5yaWdodCkgcmV0dXJuIG5vZGUubGVmdCA9IG51bGxcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbm9kZS5sZWZ0LnJpZ2h0ICYmIG5vZGUubGVmdC5sZWZ0KSByZXR1cm4gbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LmxlZnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5sZWZ0LnJpZ2h0ICYmICFub2RlLmxlZnQubGVmdCkgcmV0dXJuIG5vZGUubGVmdCA9IG5vZGUubGVmdC5yaWdodDtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBub2RlLmxlZnQgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUubGVmdCk7XG5cbiAgICAgICAgICAgICAgICAvLyBlbHNlIHJlY3Vyc2UgZG93biB0cmVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLmxlZnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhICYmIG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBmaW5kKHZhbHVlLCBub2RlID0gdGhpcy5yb290KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLmRhdGEpIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB0aGlzLmZpbmQodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkgdGhpcy5maW5kKHZhbHVlLCBub2RlLmxlZnQpO1xuICAgIH1cblxuICAgIGxldmVsT3JkZXIoZnVuYykge1xuICAgICAgICBsZXQgcXVldWUgPSBbdGhpcy5yb290XTtcbiAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBxdWV1ZVswXVxuICAgICAgICAgICAgZnVuYyhxdWV1ZS5zaGlmdCgpKTtcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHF1ZXVlLnB1c2gobm9kZS5sZWZ0KVxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpcXVldWUucHVzaChub2RlLnJpZ2h0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgYnVpbGRUcmVlID0gKGQsIHN0YXJ0PTAsIGVuZCkgPT4ge1xuICAgIGVuZCA9IGQubGVuZ3RoIC0xO1xuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgbGV0IHJvb3QgPSBuZXcgTm9kZShkW21pZF0pO1xuICAgIHJvb3QubGVmdCA9IGJ1aWxkVHJlZShkLnNsaWNlKDAsIG1pZCksIHN0YXJ0LCBlbmQpO1xuICAgIHJvb3QucmlnaHQgPSBidWlsZFRyZWUoZC5zbGljZShtaWQrMSksIHN0YXJ0LCBlbmQpO1xuICAgIHJldHVybiByb290O1xufVxuXG5sZXQgYmluYXJ5U2VhcmNoVHJlZSA9IG5ldyBUcmVlKHNvcnRlZEFycldpdGhvdXREdXBsaWNhdGVzKTtcbmJpbmFyeVNlYXJjaFRyZWUucm9vdCA9IGJ1aWxkVHJlZShiaW5hcnlTZWFyY2hUcmVlLmFycmF5KTtcblxuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICAgIH1cbn1cblxuYmluYXJ5U2VhcmNoVHJlZS5pbnNlcnQoNTYpO1xuYmluYXJ5U2VhcmNoVHJlZS5pbnNlcnQoMTApXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCgzNSlcbnByZXR0eVByaW50KGJpbmFyeVNlYXJjaFRyZWUucm9vdCk7XG5cbi8vXG4vLyBiaW5hcnlTZWFyY2hUcmVlLmRlbGV0ZSg1MCk7IFxuLy8gcHJldHR5UHJpbnQoYmluYXJ5U2VhcmNoVHJlZS5yb290KTsgXG4vL1xuXG4vLyBiaW5hcnlTZWFyY2hUcmVlLmZpbmQoNTYpXG5cblxuYmluYXJ5U2VhcmNoVHJlZS5sZXZlbE9yZGVyKChub2RlKSA9PiB7XG4gICAgY29uc29sZS5sb2cobm9kZSlcbn0pIiwiY29uc3QgbWVyZ2UgPSAobGlzdEEsIGxpc3RCKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcbiAgICBsZXQgayA9IDA7XG4gICAgbGV0IG4gPSBsaXN0QS5sZW5ndGg7XG4gICAgbGV0IG0gPSBsaXN0Qi5sZW5ndGg7XG4gICAgbGV0IGxpc3RDID0gW107XG4gICAgd2hpbGUgKGkgPCBuICYmIGogPG0pIHtcbiAgICAgICAgaWYgKGxpc3RBW2ldIDwgbGlzdEJbal0pIHtcbiAgICAgICAgICAgIGxpc3RDW2srK10gPSBsaXN0QVtpKytdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0Q1trKytdID0gbGlzdEJbaisrXVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGxpc3RDW2srK10gPSBsaXN0QVtpXTtcbiAgICB9XG4gICAgZm9yICg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgbGlzdENbaysrXSA9IGxpc3RCW2pdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGlzdEM7XG59XG5cbi8vIG1lcmdlKFsyLCA0LCA2LCA4XSwgWzEsIDMsIDUsIDddKSAuLi4vLy4uLiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbi8vIG1lcmdlKFsyXSwgWzFdKSAuLi4vLy4uLlsxLCAyXVxuXG5jb25zdCBtZXJnZVNvcnQgPSAobGlzdCkgPT4ge1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGZpbmlzaCA9IGxpc3QubGVuZ3RoO1xuICAgIGlmIChmaW5pc2ggPCAyKSB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBmaW5pc2gpIC8gMik7XG4gICAgbGV0IHggPSBtZXJnZVNvcnQobGlzdC5zbGljZSgwLCBtaWQpKVxuICAgIGxldCB5ID0gbWVyZ2VTb3J0KGxpc3Quc2xpY2UobWlkKSlcbiAgICByZXR1cm4gbWVyZ2UoeCwgeSk7XG59XG5cblxuLy8gbWVyZ2VTb3J0KFszLCAxLCAyLCA0LCA3LCA1LCA2LCA4XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZVNvcnQoWzIsIDYsIDIsIDc1LCAyLCA0LCA4LCAzLCA1NywgMiwgMzVdKSAuLi4vLy4uLiBbMiwgMiwgMiwgMiwgMywgNCwgNiwgOCwgMzUsIDU3LCA3NV1cblxuZXhwb3J0IHttZXJnZSwgbWVyZ2VTb3J0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==