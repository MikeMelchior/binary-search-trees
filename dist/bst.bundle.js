"use strict";
(self["webpackChunkbinary_search_trees"] = self["webpackChunkbinary_search_trees"] || []).push([["bst"],{

/***/ "./dist/mergeSort.bundle.js":
/*!**********************************!*\
  !*** ./dist/mergeSort.bundle.js ***!
  \**********************************/
/***/ (() => {


(self["webpackChunkbinary_search_trees"] = self["webpackChunkbinary_search_trees"] || []).push([["mergeSort"],{

/***/ "../recursion-and-sort-algos/merge-sort.js":
/*!*************************************************!*\
  !*** ../recursion-and-sort-algos/merge-sort.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_396__) => {

__nested_webpack_require_396__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_396__.d(__webpack_exports__, {
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
    start = 0;
    finish = list.length;
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
/******/ __nested_webpack_require_1734__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__nested_webpack_require_1734__(__nested_webpack_require_1734__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("../recursion-and-sort-algos/merge-sort.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VTb3J0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZXJnZSA9IChsaXN0QSwgbGlzdEIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGogPSAwO1xuICAgIGxldCBrID0gMDtcbiAgICBsZXQgbiA9IGxpc3RBLmxlbmd0aDtcbiAgICBsZXQgbSA9IGxpc3RCLmxlbmd0aDtcbiAgICBsZXQgbGlzdEMgPSBbXTtcbiAgICB3aGlsZSAoaSA8IG4gJiYgaiA8bSkge1xuICAgICAgICBpZiAobGlzdEFbaV0gPCBsaXN0QltqXSkge1xuICAgICAgICAgICAgbGlzdENbaysrXSA9IGxpc3RBW2krK11cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RDW2srK10gPSBsaXN0QltqKytdXG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgbGlzdENbaysrXSA9IGxpc3RBW2ldO1xuICAgIH1cbiAgICBmb3IgKDsgaiA8IG07IGorKykge1xuICAgICAgICBsaXN0Q1trKytdID0gbGlzdEJbal07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBsaXN0Qztcbn1cblxuLy8gbWVyZ2UoWzIsIDQsIDYsIDhdLCBbMSwgMywgNSwgN10pIC4uLi8vLi4uIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVxuLy8gbWVyZ2UoWzJdLCBbMV0pIC4uLi8vLi4uWzEsIDJdXG5cbmNvbnN0IG1lcmdlU29ydCA9IChsaXN0KSA9PiB7XG4gICAgc3RhcnQgPSAwO1xuICAgIGZpbmlzaCA9IGxpc3QubGVuZ3RoO1xuICAgIGlmIChmaW5pc2ggPCAyKSB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBmaW5pc2gpIC8gMik7XG4gICAgbGV0IHggPSBtZXJnZVNvcnQobGlzdC5zbGljZSgwLCBtaWQpKVxuICAgIGxldCB5ID0gbWVyZ2VTb3J0KGxpc3Quc2xpY2UobWlkKSlcbiAgICByZXR1cm4gbWVyZ2UoeCwgeSk7XG59XG5cblxuLy8gbWVyZ2VTb3J0KFszLCAxLCAyLCA0LCA3LCA1LCA2LCA4XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZVNvcnQoWzIsIDYsIDIsIDc1LCAyLCA0LCA4LCAzLCA1NywgMiwgMzVdKSAuLi4vLy4uLiBbMiwgMiwgMiwgMiwgMywgNCwgNiwgOCwgMzUsIDU3LCA3NV1cblxuZXhwb3J0IHttZXJnZSwgbWVyZ2VTb3J0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/binary-search-trees.js":
/*!************************************!*\
  !*** ./src/binary-search-trees.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_mergeSort_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/mergeSort.bundle */ "./dist/mergeSort.bundle.js");
/* harmony import */ var _dist_mergeSort_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_mergeSort_bundle__WEBPACK_IMPORTED_MODULE_0__);


let listA = [2, 4, 6, 8]
let listB = [1, 3, 5, 9]

;(0,_dist_mergeSort_bundle__WEBPACK_IMPORTED_MODULE_0__.merge)(listA, listB)

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/binary-search-trees.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDhCQUFtQjs7QUFFekUsOEJBQW1CO0FBQ25CLHFCQUFxQiw4QkFBbUI7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7OztBQUlBLE9BQU87O0FBRVAsQ0FBQztBQUNELFNBQVMsK0JBQW1CLE1BQU07QUFDbEMsK0NBQStDLCtCQUFtQixDQUFDLCtCQUFtQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYzs7Ozs7Ozs7Ozs7OztBQ25FQTs7QUFFekQ7QUFDQTs7QUFFQSw4REFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9kaXN0L21lcmdlU29ydC5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9iaW5hcnktc2VhcmNoLXRyZWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuKHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiaW5hcnlfc2VhcmNoX3RyZWVzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JpbmFyeV9zZWFyY2hfdHJlZXNcIl0gfHwgW10pLnB1c2goW1tcIm1lcmdlU29ydFwiXSx7XG5cbi8qKiovIFwiLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwibWVyZ2VcIjogKCkgPT4gKC8qIGJpbmRpbmcgKi8gbWVyZ2UpLFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBcIm1lcmdlU29ydFwiOiAoKSA9PiAoLyogYmluZGluZyAqLyBtZXJnZVNvcnQpXG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbmNvbnN0IG1lcmdlID0gKGxpc3RBLCBsaXN0QikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG4gICAgbGV0IGsgPSAwO1xuICAgIGxldCBuID0gbGlzdEEubGVuZ3RoO1xuICAgIGxldCBtID0gbGlzdEIubGVuZ3RoO1xuICAgIGxldCBsaXN0QyA9IFtdO1xuICAgIHdoaWxlIChpIDwgbiAmJiBqIDxtKSB7XG4gICAgICAgIGlmIChsaXN0QVtpXSA8IGxpc3RCW2pdKSB7XG4gICAgICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaSsrXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdENbaysrXSA9IGxpc3RCW2orK11cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaV07XG4gICAgfVxuICAgIGZvciAoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgIGxpc3RDW2srK10gPSBsaXN0QltqXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxpc3RDO1xufVxuXG4vLyBtZXJnZShbMiwgNCwgNiwgOF0sIFsxLCAzLCA1LCA3XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZShbMl0sIFsxXSkgLi4uLy8uLi5bMSwgMl1cblxuY29uc3QgbWVyZ2VTb3J0ID0gKGxpc3QpID0+IHtcbiAgICBzdGFydCA9IDA7XG4gICAgZmluaXNoID0gbGlzdC5sZW5ndGg7XG4gICAgaWYgKGZpbmlzaCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGZpbmlzaCkgLyAyKTtcbiAgICBsZXQgeCA9IG1lcmdlU29ydChsaXN0LnNsaWNlKDAsIG1pZCkpXG4gICAgbGV0IHkgPSBtZXJnZVNvcnQobGlzdC5zbGljZShtaWQpKVxuICAgIHJldHVybiBtZXJnZSh4LCB5KTtcbn1cblxuXG4vLyBtZXJnZVNvcnQoWzMsIDEsIDIsIDQsIDcsIDUsIDYsIDhdKSAuLi4vLy4uLiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbi8vIG1lcmdlU29ydChbMiwgNiwgMiwgNzUsIDIsIDQsIDgsIDMsIDU3LCAyLCAzNV0pIC4uLi8vLi4uIFsyLCAyLCAyLCAyLCAzLCA0LCA2LCA4LCAzNSwgNTcsIDc1XVxuXG5cblxuLyoqKi8gfSlcblxufSxcbi8qKioqKiovIF9fd2VicGFja19yZXF1aXJlX18gPT4geyAvLyB3ZWJwYWNrUnVudGltZU1vZHVsZXNcbi8qKioqKiovIHZhciBfX3dlYnBhY2tfZXhlY19fID0gKG1vZHVsZUlkKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBtb2R1bGVJZCkpXG4vKioqKioqLyB2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IChfX3dlYnBhY2tfZXhlY19fKFwiLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQuanNcIikpO1xuLyoqKioqKi8gfVxuXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVnlaMlZUYjNKMExtSjFibVJzWlM1cWN5SXNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096dEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVlR0QlFVTldPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVDBGQlR6dEJRVU5zUWp0QlFVTkJPMEZCUTBFc1YwRkJWeXhQUVVGUE8wRkJRMnhDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CSWl3aWMyOTFjbU5sY3lJNld5SjNaV0p3WVdOck9pOHZZbWx1WVhKNUxYTmxZWEpqYUMxMGNtVmxjeTh1TGk5eVpXTjFjbk5wYjI0dFlXNWtMWE52Y25RdFlXeG5iM012YldWeVoyVXRjMjl5ZEM1cWN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQnRaWEpuWlNBOUlDaHNhWE4wUVN3Z2JHbHpkRUlwSUQwK0lIdGNiaUFnSUNCc1pYUWdhU0E5SURBN1hHNGdJQ0FnYkdWMElHb2dQU0F3TzF4dUlDQWdJR3hsZENCcklEMGdNRHRjYmlBZ0lDQnNaWFFnYmlBOUlHeHBjM1JCTG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnYlNBOUlHeHBjM1JDTG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnYkdsemRFTWdQU0JiWFR0Y2JpQWdJQ0IzYUdsc1pTQW9hU0E4SUc0Z0ppWWdhaUE4YlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYkdsemRFRmJhVjBnUENCc2FYTjBRbHRxWFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdsemRFTmJheXNyWFNBOUlHeHBjM1JCVzJrcksxMWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4cGMzUkRXMnNySzEwZ1BTQnNhWE4wUWx0cUt5dGRYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1ptOXlJQ2c3SUdrZ1BDQnVPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdiR2x6ZEVOYmF5c3JYU0E5SUd4cGMzUkJXMmxkTzF4dUlDQWdJSDFjYmlBZ0lDQm1iM0lnS0RzZ2FpQThJRzA3SUdvckt5a2dlMXh1SUNBZ0lDQWdJQ0JzYVhOMFExdHJLeXRkSUQwZ2JHbHpkRUpiYWwwN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lISmxkSFZ5YmlCc2FYTjBRenRjYm4xY2JseHVMeThnYldWeVoyVW9XeklzSURRc0lEWXNJRGhkTENCYk1Td2dNeXdnTlN3Z04xMHBJQzR1TGk4dkxpNHVJRnN4TENBeUxDQXpMQ0EwTENBMUxDQTJMQ0EzTENBNFhWeHVMeThnYldWeVoyVW9XekpkTENCYk1WMHBJQzR1TGk4dkxpNHVXekVzSURKZFhHNWNibU52Ym5OMElHMWxjbWRsVTI5eWRDQTlJQ2hzYVhOMEtTQTlQaUI3WEc0Z0lDQWdjM1JoY25RZ1BTQXdPMXh1SUNBZ0lHWnBibWx6YUNBOUlHeHBjM1F1YkdWdVozUm9PMXh1SUNBZ0lHbG1JQ2htYVc1cGMyZ2dQQ0F5S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCc2FYTjBPMXh1SUNBZ0lIMWNiaUFnSUNCc1pYUWdiV2xrSUQwZ1RXRjBhQzVtYkc5dmNpZ29jM1JoY25RZ0t5Qm1hVzVwYzJncElDOGdNaWs3WEc0Z0lDQWdiR1YwSUhnZ1BTQnRaWEpuWlZOdmNuUW9iR2x6ZEM1emJHbGpaU2d3TENCdGFXUXBLVnh1SUNBZ0lHeGxkQ0I1SUQwZ2JXVnlaMlZUYjNKMEtHeHBjM1F1YzJ4cFkyVW9iV2xrS1NsY2JpQWdJQ0J5WlhSMWNtNGdiV1Z5WjJVb2VDd2dlU2s3WEc1OVhHNWNibHh1THk4Z2JXVnlaMlZUYjNKMEtGc3pMQ0F4TENBeUxDQTBMQ0EzTENBMUxDQTJMQ0E0WFNrZ0xpNHVMeTh1TGk0Z1d6RXNJRElzSURNc0lEUXNJRFVzSURZc0lEY3NJRGhkWEc0dkx5QnRaWEpuWlZOdmNuUW9XeklzSURZc0lESXNJRGMxTENBeUxDQTBMQ0E0TENBekxDQTFOeXdnTWl3Z016VmRLU0F1TGk0dkx5NHVMaUJiTWl3Z01pd2dNaXdnTWl3Z015d2dOQ3dnTml3Z09Dd2dNelVzSURVM0xDQTNOVjFjYmx4dVpYaHdiM0owSUh0dFpYSm5aU3dnYldWeVoyVlRiM0owZlNKZExDSnVZVzFsY3lJNlcxMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQge21lcmdlLCBtZXJnZVNvcnR9IGZyb20gJy4uL2Rpc3QvbWVyZ2VTb3J0LmJ1bmRsZSdcblxubGV0IGxpc3RBID0gWzIsIDQsIDYsIDhdXG5sZXQgbGlzdEIgPSBbMSwgMywgNSwgOV1cblxubWVyZ2UobGlzdEEsIGxpc3RCKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==