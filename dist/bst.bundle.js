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

    nextSmallest(node) {
        let tmp = node.right;
        while (tmp.left) {
            tmp = tmp.left;
        }
        return tmp;
    }

    nextSmallestParent(node) {
        // let tmp = node.right;
        // if (!tmp.left || !tmp.left.left) {
        //     return tmp;
        // }

        // while(tmp.left.left) {
        //     tmp = tmp.left;
        // }




        let tmp = node.right;
        if (tmp.left.left) {
            while (tmp.left.left) {
                tmp = tmp.left
            }
        }
        return tmp;
    }

    replaceNodeWithTwoChildren(node) {
            // find next smallest node
        let nextSmallest = this.nextSmallest(node);


        let parentOfNextSmallest;
        // if (!nextSmallest.right && node.right !== nextSmallest) {
        //     nextSmallest.right = node.right;
        // } else {
        //     parentOfNextSmallest = this.nextSmallestParent(node);
        //     parentOfNextSmallest.left = nextSmallest.right;
        // }

        if (node.right !== nextSmallest) {
            parentOfNextSmallest = this.nextSmallestParent(node);
            parentOfNextSmallest.left = nextSmallest.right;
            nextSmallest.right = node.right;
        }





            // set replacement node's left subtree
        nextSmallest.left = node.left;
        

            console.log(nextSmallest)
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
//
//
//
// 
binarySearchTree.delete(50); 
//
//
//

prettyPrint(binarySearchTree.root); 



// console.log(binarySearchTree.nextSmallest(binarySearchTree.root));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrRUFBUztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvYmluYXJ5LXNlYXJjaC10cmVlcy5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4uL3JlY3Vyc2lvbi1hbmQtc29ydC1hbGdvcy9tZXJnZS1zb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWVyZ2VTb3J0fSBmcm9tICcuLi8uLi9yZWN1cnNpb24tYW5kLXNvcnQtYWxnb3MvbWVyZ2Utc29ydCc7XG5cbi8vIGxldCB0ZXN0QXJyID0gWzEsIDcsIDQsIDIzLCA4LCA5LCA0LCAzLCA1LCA3LCA5LCA2NywgNjM0NSwgMzI0XTtcbmxldCB0ZXN0QXJyID0gWzIwLCAzMCwgMzIsIDM0LCAzNiwgNDAsIDUwLCA2MCwgNjUsIDcwLCA3NSwgODAsIDg1XVxuY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IChhcnIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgbiBvZiBhcnIpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5pbmRleE9mKG4pID09PSAtMSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmNvbnN0IHJlbW92ZUFuZFNvcnQgPSAoYXJyKSA9PiB7IFxuICAgIHJldHVybiBtZXJnZVNvcnQocmVtb3ZlRHVwbGljYXRlcyhhcnIpKTtcbn1cblxubGV0IHNvcnRlZEFycldpdGhvdXREdXBsaWNhdGVzID0gcmVtb3ZlQW5kU29ydCh0ZXN0QXJyKTtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IoZCl7XG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbiAgICBwcmludCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSlcbiAgICB9XG59IFxuXG5jbGFzcyBUcmVlIHtcbiAgICByb290ID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcihhcnIpIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycjtcbiAgICB9XG5cbiAgICBpbnNlcnQgKHZhbHVlLCBub2RlPXRoaXMucm9vdCkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQSBub2RlIHdpdGggdGhpcyB2YWx1ZSBhbHJlYWR5IGV4aXN0cywgbm8gZHVwbGljYXRlcyBhbGxvd2VkJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSB0aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgICAgICAgICBlbHNlIG5vZGUucmlnaHQgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSB0aGlzLmluc2VydCh2YWx1ZSwgbm9kZS5sZWZ0KTtcbiAgICAgICAgICAgIGVsc2Ugbm9kZS5sZWZ0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFNtYWxsZXN0KG5vZGUpIHtcbiAgICAgICAgbGV0IHRtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIHdoaWxlICh0bXAubGVmdCkge1xuICAgICAgICAgICAgdG1wID0gdG1wLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG5cbiAgICBuZXh0U21hbGxlc3RQYXJlbnQobm9kZSkge1xuICAgICAgICAvLyBsZXQgdG1wID0gbm9kZS5yaWdodDtcbiAgICAgICAgLy8gaWYgKCF0bXAubGVmdCB8fCAhdG1wLmxlZnQubGVmdCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHRtcDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIHdoaWxlKHRtcC5sZWZ0LmxlZnQpIHtcbiAgICAgICAgLy8gICAgIHRtcCA9IHRtcC5sZWZ0O1xuICAgICAgICAvLyB9XG5cblxuXG5cbiAgICAgICAgbGV0IHRtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIGlmICh0bXAubGVmdC5sZWZ0KSB7XG4gICAgICAgICAgICB3aGlsZSAodG1wLmxlZnQubGVmdCkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHRtcC5sZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG5cbiAgICByZXBsYWNlTm9kZVdpdGhUd29DaGlsZHJlbihub2RlKSB7XG4gICAgICAgICAgICAvLyBmaW5kIG5leHQgc21hbGxlc3Qgbm9kZVxuICAgICAgICBsZXQgbmV4dFNtYWxsZXN0ID0gdGhpcy5uZXh0U21hbGxlc3Qobm9kZSk7XG5cblxuICAgICAgICBsZXQgcGFyZW50T2ZOZXh0U21hbGxlc3Q7XG4gICAgICAgIC8vIGlmICghbmV4dFNtYWxsZXN0LnJpZ2h0ICYmIG5vZGUucmlnaHQgIT09IG5leHRTbWFsbGVzdCkge1xuICAgICAgICAvLyAgICAgbmV4dFNtYWxsZXN0LnJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHBhcmVudE9mTmV4dFNtYWxsZXN0ID0gdGhpcy5uZXh0U21hbGxlc3RQYXJlbnQobm9kZSk7XG4gICAgICAgIC8vICAgICBwYXJlbnRPZk5leHRTbWFsbGVzdC5sZWZ0ID0gbmV4dFNtYWxsZXN0LnJpZ2h0O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG5leHRTbWFsbGVzdCkge1xuICAgICAgICAgICAgcGFyZW50T2ZOZXh0U21hbGxlc3QgPSB0aGlzLm5leHRTbWFsbGVzdFBhcmVudChub2RlKTtcbiAgICAgICAgICAgIHBhcmVudE9mTmV4dFNtYWxsZXN0LmxlZnQgPSBuZXh0U21hbGxlc3QucmlnaHQ7XG4gICAgICAgICAgICBuZXh0U21hbGxlc3QucmlnaHQgPSBub2RlLnJpZ2h0O1xuICAgICAgICB9XG5cblxuXG5cblxuICAgICAgICAgICAgLy8gc2V0IHJlcGxhY2VtZW50IG5vZGUncyBsZWZ0IHN1YnRyZWVcbiAgICAgICAgbmV4dFNtYWxsZXN0LmxlZnQgPSBub2RlLmxlZnQ7XG4gICAgICAgIFxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXh0U21hbGxlc3QpXG4gICAgICAgIHJldHVybiBuZXh0U21hbGxlc3Q7XG4gICAgfVxuXG4gICAgZGVsZXRlICh2YWx1ZSwgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIC8vIGlmIHRyZWUgaXMgZW1wdHkgcmV0dXJuO1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAvLyBpZiByb290IG5vZGUgPT0gdmFsdWU7XG4gICAgICAgIGlmIChub2RlLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3QgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgYSBjaGlsZCBvZiBub2RlXG4gICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgPT0gcmlnaHQgY2hpbGQgb2Ygbm9kZVxuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQgJiYgdmFsdWUgPT0gbm9kZS5yaWdodC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIDAgY2hpbGRyZW4gcmVtb3ZlIG5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnJpZ2h0LnJpZ2h0ICYmICFub2RlLnJpZ2h0LmxlZnQpIHJldHVybiBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIG5vZGUgaGFzIGNoaWxkcmVuLi4uXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdmFsdWUgbm9kZSBoYXMgcmlnaHQgY2hpbGQgbm9kZSBidXQgbm90IGxlZnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodC5yaWdodCAmJiAhbm9kZS5yaWdodC5sZWZ0KSByZXR1cm4gbm9kZS5yaWdodCA9IG5vZGUucmlnaHQucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIG5vZGUgaGFzIGxlZnQgY2hpbGQgbm9kZSBidXQgbm90IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQubGVmdCAmJiAhbm9kZS5yaWdodC5yaWdodCkgcmV0dXJuIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vZGUgaGFzIGxlZnQgJiByaWdodCBjaGlsZFxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5vZGUucmlnaHQgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUucmlnaHQpOyBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiB2YWx1ZSA9PSBsZWZ0IGNoaWxkIG5vZGU7XG4gICAgICAgICAgICAgICAgLy8gcGVyZm9ybSBzYW1lIGFjdGlvbnMgYnV0IGZvciBsZWZ0IHNpZGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ICYmIHZhbHVlID09IG5vZGUubGVmdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5sZWZ0LmxlZnQgJiYgIW5vZGUubGVmdC5yaWdodCkgcmV0dXJuIG5vZGUubGVmdCA9IG51bGxcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbm9kZS5sZWZ0LnJpZ2h0ICYmIG5vZGUubGVmdC5sZWZ0KSByZXR1cm4gbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LmxlZnQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5sZWZ0LnJpZ2h0ICYmICFub2RlLmxlZnQubGVmdCkgcmV0dXJuIG5vZGUubGVmdCA9IG5vZGUubGVmdC5yaWdodDtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBub2RlLmxlZnQgPSB0aGlzLnJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUubGVmdCk7XG5cbiAgICAgICAgICAgICAgICAvLyBlbHNlIHJlY3Vyc2UgZG93biB0cmVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKHZhbHVlLCBub2RlLmxlZnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhICYmIG5vZGUucmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUodmFsdWUsIG5vZGUucmlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG59XG5cbmxldCBidWlsZFRyZWUgPSAoZCwgc3RhcnQ9MCwgZW5kKSA9PiB7XG4gICAgZW5kID0gZC5sZW5ndGggLTE7XG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcblxuICAgIGxldCByb290ID0gbmV3IE5vZGUoZFttaWRdKTtcbiAgICByb290LmxlZnQgPSBidWlsZFRyZWUoZC5zbGljZSgwLCBtaWQpLCBzdGFydCwgZW5kKTtcbiAgICByb290LnJpZ2h0ID0gYnVpbGRUcmVlKGQuc2xpY2UobWlkKzEpLCBzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gcm9vdDtcbn1cblxubGV0IGJpbmFyeVNlYXJjaFRyZWUgPSBuZXcgVHJlZShzb3J0ZWRBcnJXaXRob3V0RHVwbGljYXRlcyk7XG5iaW5hcnlTZWFyY2hUcmVlLnJvb3QgPSBidWlsZFRyZWUoYmluYXJ5U2VhcmNoVHJlZS5hcnJheSk7XG5cblxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgICB9XG59XG5cblxuXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCg1Nik7XG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCgxMClcbmJpbmFyeVNlYXJjaFRyZWUuaW5zZXJ0KDM1KVxucHJldHR5UHJpbnQoYmluYXJ5U2VhcmNoVHJlZS5yb290KTtcblxuLy9cbi8vXG4vL1xuLy9cbi8vIFxuYmluYXJ5U2VhcmNoVHJlZS5kZWxldGUoNTApOyBcbi8vXG4vL1xuLy9cblxucHJldHR5UHJpbnQoYmluYXJ5U2VhcmNoVHJlZS5yb290KTsgXG5cblxuXG4vLyBjb25zb2xlLmxvZyhiaW5hcnlTZWFyY2hUcmVlLm5leHRTbWFsbGVzdChiaW5hcnlTZWFyY2hUcmVlLnJvb3QpKTtcbiIsImNvbnN0IG1lcmdlID0gKGxpc3RBLCBsaXN0QikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgaiA9IDA7XG4gICAgbGV0IGsgPSAwO1xuICAgIGxldCBuID0gbGlzdEEubGVuZ3RoO1xuICAgIGxldCBtID0gbGlzdEIubGVuZ3RoO1xuICAgIGxldCBsaXN0QyA9IFtdO1xuICAgIHdoaWxlIChpIDwgbiAmJiBqIDxtKSB7XG4gICAgICAgIGlmIChsaXN0QVtpXSA8IGxpc3RCW2pdKSB7XG4gICAgICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaSsrXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdENbaysrXSA9IGxpc3RCW2orK11cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICBsaXN0Q1trKytdID0gbGlzdEFbaV07XG4gICAgfVxuICAgIGZvciAoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgIGxpc3RDW2srK10gPSBsaXN0QltqXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxpc3RDO1xufVxuXG4vLyBtZXJnZShbMiwgNCwgNiwgOF0sIFsxLCAzLCA1LCA3XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZShbMl0sIFsxXSkgLi4uLy8uLi5bMSwgMl1cblxuY29uc3QgbWVyZ2VTb3J0ID0gKGxpc3QpID0+IHtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBmaW5pc2ggPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoZmluaXNoIDwgMikge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgbGV0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZmluaXNoKSAvIDIpO1xuICAgIGxldCB4ID0gbWVyZ2VTb3J0KGxpc3Quc2xpY2UoMCwgbWlkKSlcbiAgICBsZXQgeSA9IG1lcmdlU29ydChsaXN0LnNsaWNlKG1pZCkpXG4gICAgcmV0dXJuIG1lcmdlKHgsIHkpO1xufVxuXG5cbi8vIG1lcmdlU29ydChbMywgMSwgMiwgNCwgNywgNSwgNiwgOF0pIC4uLi8vLi4uIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVxuLy8gbWVyZ2VTb3J0KFsyLCA2LCAyLCA3NSwgMiwgNCwgOCwgMywgNTcsIDIsIDM1XSkgLi4uLy8uLi4gWzIsIDIsIDIsIDIsIDMsIDQsIDYsIDgsIDM1LCA1NywgNzVdXG5cbmV4cG9ydCB7bWVyZ2UsIG1lcmdlU29ydH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=