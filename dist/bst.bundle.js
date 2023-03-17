"use strict";
(self["webpackChunkbinary_search_trees"] = self["webpackChunkbinary_search_trees"] || []).push([["bst"],{

/***/ "./src/binary-search-trees.js":
/*!************************************!*\
  !*** ./src/binary-search-trees.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recursion_and_sort_algos_merge_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../recursion-and-sort-algos/merge-sort */ "../recursion-and-sort-algos/merge-sort.js");


let testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

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

    insert (value, node) {
        if (value > node.data) {
            if (node.right) this.insert(value, node.right);
            else node.right = new Node(value);
        }
        if (value < node.data) {
            if (node.left) this.insert(value, node.left);
            else node.left = new Node(value);
        }
    }

    delete (value) {

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

prettyPrint(binarySearchTree.root);
console.log(binarySearchTree.root);

binarySearchTree.insert(10, binarySearchTree.root)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRTs7QUFFcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtFQUFTO0FBQ3BCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2JpbmFyeS1zZWFyY2gtdHJlZXMuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21lcmdlU29ydH0gZnJvbSAnLi4vLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQnO1xuXG5sZXQgdGVzdEFyciA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07XG5cbmNvbnN0IHJlbW92ZUR1cGxpY2F0ZXMgPSAoYXJyKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IG4gb2YgYXJyKSB7XG4gICAgICAgIGlmIChyZXN1bHQuaW5kZXhPZihuKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jb25zdCByZW1vdmVBbmRTb3J0ID0gKGFycikgPT4geyBcbiAgICByZXR1cm4gbWVyZ2VTb3J0KHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSk7XG59XG5cbmxldCBzb3J0ZWRBcnJXaXRob3V0RHVwbGljYXRlcyA9IHJlbW92ZUFuZFNvcnQodGVzdEFycik7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGQpe1xuICAgICAgICB0aGlzLmRhdGEgPSBkO1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gICAgcHJpbnQgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpXG4gICAgfVxufSBcblxuY2xhc3MgVHJlZSB7XG4gICAgcm9vdCA9IG51bGw7XG4gICAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnI7XG4gICAgfVxuXG4gICAgaW5zZXJ0ICh2YWx1ZSwgbm9kZSkge1xuICAgICAgICBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSB0aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgICAgICAgICBlbHNlIG5vZGUucmlnaHQgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSB0aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIGVsc2Ugbm9kZS5sZWZ0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsZXRlICh2YWx1ZSkge1xuXG4gICAgfVxuXG59XG5cbmxldCBidWlsZFRyZWUgPSAoZCwgc3RhcnQ9MCwgZW5kKSA9PiB7XG4gICAgZW5kID0gZC5sZW5ndGggLTE7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcblxuICAgIGxldCByb290ID0gbmV3IE5vZGUoZFttaWRdKTtcbiAgICByb290LmxlZnQgPSBidWlsZFRyZWUoZC5zbGljZSgwLCBtaWQpLCBzdGFydCwgZW5kKTtcbiAgICByb290LnJpZ2h0ID0gYnVpbGRUcmVlKGQuc2xpY2UobWlkKzEpLCBzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gcm9vdDtcbn1cblxubGV0IGJpbmFyeVNlYXJjaFRyZWUgPSBuZXcgVHJlZShzb3J0ZWRBcnJXaXRob3V0RHVwbGljYXRlcyk7XG5iaW5hcnlTZWFyY2hUcmVlLnJvb3QgPSBidWlsZFRyZWUoYmluYXJ5U2VhcmNoVHJlZS5hcnJheSk7XG5cblxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgICB9XG59XG5cbnByZXR0eVByaW50KGJpbmFyeVNlYXJjaFRyZWUucm9vdCk7XG5jb25zb2xlLmxvZyhiaW5hcnlTZWFyY2hUcmVlLnJvb3QpO1xuXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCgxMCwgYmluYXJ5U2VhcmNoVHJlZS5yb290KVxuXG5wcmV0dHlQcmludChiaW5hcnlTZWFyY2hUcmVlLnJvb3QpIiwiY29uc3QgbWVyZ2UgPSAobGlzdEEsIGxpc3RCKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcbiAgICBsZXQgayA9IDA7XG4gICAgbGV0IG4gPSBsaXN0QS5sZW5ndGg7XG4gICAgbGV0IG0gPSBsaXN0Qi5sZW5ndGg7XG4gICAgbGV0IGxpc3RDID0gW107XG4gICAgd2hpbGUgKGkgPCBuICYmIGogPG0pIHtcbiAgICAgICAgaWYgKGxpc3RBW2ldIDwgbGlzdEJbal0pIHtcbiAgICAgICAgICAgIGxpc3RDW2srK10gPSBsaXN0QVtpKytdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0Q1trKytdID0gbGlzdEJbaisrXVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGxpc3RDW2srK10gPSBsaXN0QVtpXTtcbiAgICB9XG4gICAgZm9yICg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgbGlzdENbaysrXSA9IGxpc3RCW2pdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGlzdEM7XG59XG5cbi8vIG1lcmdlKFsyLCA0LCA2LCA4XSwgWzEsIDMsIDUsIDddKSAuLi4vLy4uLiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbi8vIG1lcmdlKFsyXSwgWzFdKSAuLi4vLy4uLlsxLCAyXVxuXG5jb25zdCBtZXJnZVNvcnQgPSAobGlzdCkgPT4ge1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGZpbmlzaCA9IGxpc3QubGVuZ3RoO1xuICAgIGlmIChmaW5pc2ggPCAyKSB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBmaW5pc2gpIC8gMik7XG4gICAgbGV0IHggPSBtZXJnZVNvcnQobGlzdC5zbGljZSgwLCBtaWQpKVxuICAgIGxldCB5ID0gbWVyZ2VTb3J0KGxpc3Quc2xpY2UobWlkKSlcbiAgICByZXR1cm4gbWVyZ2UoeCwgeSk7XG59XG5cblxuLy8gbWVyZ2VTb3J0KFszLCAxLCAyLCA0LCA3LCA1LCA2LCA4XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZVNvcnQoWzIsIDYsIDIsIDc1LCAyLCA0LCA4LCAzLCA1NywgMiwgMzVdKSAuLi4vLy4uLiBbMiwgMiwgMiwgMiwgMywgNCwgNiwgOCwgMzUsIDU3LCA3NV1cblxuZXhwb3J0IHttZXJnZSwgbWVyZ2VTb3J0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==