"use strict";
(self["webpackChunkbinary_search_trees"] = self["webpackChunkbinary_search_trees"] || []).push([["mergeSort"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("../recursion-and-sort-algos/merge-sort.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VTb3J0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZXJnZSA9IChsaXN0QSwgbGlzdEIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAwO1xuICAgIGxldCBrID0gMDtcbiAgICBsZXQgbiA9IGxpc3RBLmxlbmd0aDtcbiAgICBsZXQgbSA9IGxpc3RCLmxlbmd0aDtcbiAgICBsZXQgbGlzdEMgPSBbXTtcbiAgICB3aGlsZSAoaSA8IG4gJiYgaiA8bSkge1xuICAgICAgICBpZiAobGlzdEFbaV0gPCBsaXN0QltqXSkge1xuICAgICAgICAgICAgbGlzdENbaysrXSA9IGxpc3RBW2krK11cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RDW2srK10gPSBsaXN0QltqKytdXG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbGlzdENbaysrXSA9IGxpc3RBW2ldO1xuICAgIH1cbiAgICBmb3IgKDsgaiA8IG07IGorKykge1xuICAgICAgICBsaXN0Q1trKytdID0gbGlzdEJbal07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBsaXN0Qztcbn1cblxuLy8gbWVyZ2UoWzIsIDQsIDYsIDhdLCBbMSwgMywgNSwgN10pIC4uLi8vLi4uIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVxuLy8gbWVyZ2UoWzJdLCBbMV0pIC4uLi8vLi4uWzEsIDJdXG5cbmNvbnN0IG1lcmdlU29ydCA9IChsaXN0KSA9PiB7XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICBsZXQgZmluaXNoID0gbGlzdC5sZW5ndGg7XG4gICAgaWYgKGZpbmlzaCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGZpbmlzaCkgLyAyKTtcbiAgICBsZXQgeCA9IG1lcmdlU29ydChsaXN0LnNsaWNlKDAsIG1pZCkpXG4gICAgbGV0IHkgPSBtZXJnZVNvcnQobGlzdC5zbGljZShtaWQpKVxuICAgIHJldHVybiBtZXJnZSh4LCB5KTtcbn1cblxuXG4vLyBtZXJnZVNvcnQoWzMsIDEsIDIsIDQsIDcsIDUsIDYsIDhdKSAuLi4vLy4uLiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbi8vIG1lcmdlU29ydChbMiwgNiwgMiwgNzUsIDIsIDQsIDgsIDMsIDU3LCAyLCAzNV0pIC4uLi8vLi4uIFsyLCAyLCAyLCAyLCAzLCA0LCA2LCA4LCAzNSwgNTcsIDc1XVxuXG5leHBvcnQge21lcmdlLCBtZXJnZVNvcnR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9