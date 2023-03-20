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
        let queue = [start];
        while(queue.length > 0) {
            let node = queue[0]
            func(queue.shift());
            if (node.left) queue.push(node.left)
            if (node.right)queue.push(node.right)
        }
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
        let fromRoot = this.depth(node);
        let deepest = 0;
        this.levelOrder((item) => {
            if (this.depth(item) > deepest) deepest = this.depth(item);
        }, node)
        let height = deepest - fromRoot;
        return height
    }

    depth(node, start=this.root, count = 0) {
        if (node == start) return count;
        count++;
        if (node.data < start.data) return this.depth(node, start.left, count)
        if (node.data > start.data) return this.depth(node, start.right, count);
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

let testNode = binarySearchTree.find(70);
let testNodeTwo = binarySearchTree.find(56);


console.log(binarySearchTree.height(testNode))




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrRUFBUztBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EsZ0NBQWdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9iaW5hcnktc2VhcmNoLXRyZWVzLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi4vcmVjdXJzaW9uLWFuZC1zb3J0LWFsZ29zL21lcmdlLXNvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttZXJnZVNvcnR9IGZyb20gJy4uLy4uL3JlY3Vyc2lvbi1hbmQtc29ydC1hbGdvcy9tZXJnZS1zb3J0JztcblxuLy8gbGV0IHRlc3RBcnIgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdO1xubGV0IHRlc3RBcnIgPSBbMjAsIDMwLCAzMiwgMzQsIDM2LCA0MCwgNTAsIDYwLCA2NSwgNzAsIDc1LCA4MCwgODVdXG5jb25zdCByZW1vdmVEdXBsaWNhdGVzID0gKGFycikgPT4ge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBuIG9mIGFycikge1xuICAgICAgICBpZiAocmVzdWx0LmluZGV4T2YobikgPT09IC0xKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuY29uc3QgcmVtb3ZlQW5kU29ydCA9IChhcnIpID0+IHsgXG4gICAgcmV0dXJuIG1lcmdlU29ydChyZW1vdmVEdXBsaWNhdGVzKGFycikpO1xufVxuXG5sZXQgc29ydGVkQXJyV2l0aG91dER1cGxpY2F0ZXMgPSByZW1vdmVBbmRTb3J0KHRlc3RBcnIpO1xuXG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihkKXtcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxuICAgIHByaW50ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKVxuICAgIH1cbn0gXG5cbmNsYXNzIFRyZWUge1xuICAgIHJvb3QgPSBudWxsO1xuICAgIGNvbnN0cnVjdG9yKGFycikge1xuICAgICAgICB0aGlzLmFycmF5ID0gYXJyO1xuICAgIH1cblxuICAgIGluc2VydCAodmFsdWUsIG5vZGU9dGhpcy5yb290KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBIG5vZGUgd2l0aCB0aGlzIHZhbHVlIGFscmVhZHkgZXhpc3RzLCBubyBkdXBsaWNhdGVzIGFsbG93ZWQnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLnJpZ2h0KTtcbiAgICAgICAgICAgIGVsc2Ugbm9kZS5yaWdodCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHRoaXMuaW5zZXJ0KHZhbHVlLCBub2RlLmxlZnQpO1xuICAgICAgICAgICAgZWxzZSBub2RlLmxlZnQgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgLy8gZmluZCBuZXh0IHNtYWxsZXN0IG5vZGUgdG8gdXNlIGluIGRlbGV0aW9uXG4gICAgbmV4dFNtYWxsZXN0KG5vZGUpIHtcbiAgICAgICAgbGV0IHRtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIHdoaWxlICh0bXAubGVmdCkge1xuICAgICAgICAgICAgdG1wID0gdG1wLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG4gICAgICAgIC8vIGZpbmQgbmV4dCBzbWFsbGVzdCBub2RlJ3MgcGFyZW50IHRvIHVzZSBpbiBkZWxldGlvblxuICAgIG5leHRTbWFsbGVzdFBhcmVudChub2RlKSB7XG4gICAgICAgIGxldCB0bXAgPSBub2RlLnJpZ2h0O1xuICAgICAgICBpZiAodG1wLmxlZnQubGVmdCkge1xuICAgICAgICAgICAgd2hpbGUgKHRtcC5sZWZ0LmxlZnQpIHtcbiAgICAgICAgICAgICAgICB0bXAgPSB0bXAubGVmdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0bXA7XG4gICAgfVxuICAgICAgICAvLyBmdW5jdGlvbiB0byB1c2UgaW4gZGVsZXRpb24gd2hlbiBkZWxldGlvbiBub2RlIGhhcyBtdWx0aXBsZSBjaGlsZHJlblxuICAgIHJlcGxhY2VOb2RlV2l0aFR3b0NoaWxkcmVuKG5vZGUpIHtcbiAgICAgICAgICAgIC8vIGZpbmQgbmV4dCBzbWFsbGVzdCBub2RlXG4gICAgICAgIGxldCBuZXh0U21hbGxlc3QgPSB0aGlzLm5leHRTbWFsbGVzdChub2RlKTtcbiAgICAgICAgICAgIC8vIGlmIG5vZGUgdG8gcmlnaHQgaXMgbm90IG5leHQgc21hbGxlc3QsIGZpcnN0IG5leHQgc21hbGxlc3QgXG4gICAgICAgICAgICAvLyBub2RlJ3MgcGFyZW50LCB0aGVuIGxpbmsgaXQgdG8gbmV4dCBzbWFsbGVzdCBub2RlJ3MgY2hpbGRyZW47XG4gICAgICAgIGxldCBwYXJlbnRPZk5leHRTbWFsbGVzdDtcbiAgICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG5leHRTbWFsbGVzdCkge1xuICAgICAgICAgICAgcGFyZW50T2ZOZXh0U21hbGxlc3QgPSB0aGlzLm5leHRTbWFsbGVzdFBhcmVudChub2RlKTtcbiAgICAgICAgICAgIHBhcmVudE9mTmV4dFNtYWxsZXN0LmxlZnQgPSBuZXh0U21hbGxlc3QucmlnaHQ7XG4gICAgICAgICAgICBuZXh0U21hbGxlc3QucmlnaHQgPSBub2RlLnJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICAgICAvLyBzZXQgcmVwbGFjZW1lbnQgbm9kZSdzIGxlZnQgc3VidHJlZVxuICAgICAgICBuZXh0U21hbGxlc3QubGVmdCA9IG5vZGUubGVmdDtcbiAgICAgICAgcmV0dXJuIG5leHRTbWFsbGVzdDtcbiAgICB9XG5cbiAgICBkZWxldGUgKHZhbHVlLCBub2RlPXRoaXMucm9vdCkge1xuICAgICAgICAgICAgLy8gaWYgdHJlZSBpcyBlbXB0eSByZXR1cm47XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIC8vIGlmIHJvb3Qgbm9kZSA9PSB2YWx1ZTtcbiAgICAgICAgaWYgKG5vZGUuZGF0YSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdCA9IHRoaXMucmVwbGFjZU5vZGVXaXRoVHdvQ2hpbGRyZW4obm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB2YWx1ZSBpcyBhIGNoaWxkIG9mIG5vZGVcbiAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSA9PSByaWdodCBjaGlsZCBvZiBub2RlXG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodCAmJiB2YWx1ZSA9PSBub2RlLnJpZ2h0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgMCBjaGlsZHJlbiByZW1vdmUgbm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUucmlnaHQucmlnaHQgJiYgIW5vZGUucmlnaHQubGVmdCkgcmV0dXJuIG5vZGUucmlnaHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgbm9kZSBoYXMgY2hpbGRyZW4uLi5cbiAgICAgICAgICAgICAgICAgICAgLy9pZiB2YWx1ZSBub2RlIGhhcyByaWdodCBjaGlsZCBub2RlIGJ1dCBub3QgbGVmdDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0LnJpZ2h0ICYmICFub2RlLnJpZ2h0LmxlZnQpIHJldHVybiBub2RlLnJpZ2h0ID0gbm9kZS5yaWdodC5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgbm9kZSBoYXMgbGVmdCBjaGlsZCBub2RlIGJ1dCBub3QgcmlnaHQ7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodC5sZWZ0ICYmICFub2RlLnJpZ2h0LnJpZ2h0KSByZXR1cm4gbm9kZS5yaWdodCA9IG5vZGUucmlnaHQubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm9kZSBoYXMgbGVmdCAmIHJpZ2h0IGNoaWxkXG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbm9kZS5yaWdodCA9IHRoaXMucmVwbGFjZU5vZGVXaXRoVHdvQ2hpbGRyZW4obm9kZS5yaWdodCk7IFxuXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiB2YWx1ZSA9PSBsZWZ0IGNoaWxkIG5vZGU7XG4gICAgICAgICAgICAgICAgLy8gcGVyZm9ybSBzYW1lIGFjdGlvbnMgYnV0IGZvciBsZWZ0IHNpZGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ICYmIHZhbHVlID09IG5vZGUubGVmdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmxlZnQubGVmdCAmJiAhbm9kZS5sZWZ0LnJpZ2h0KSByZXR1cm4gbm9kZS5sZWZ0ID0gbnVsbFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFub2RlLmxlZnQucmlnaHQgJiYgbm9kZS5sZWZ0LmxlZnQpIHJldHVybiBub2RlLmxlZnQgPSBub2RlLmxlZnQubGVmdDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQucmlnaHQgJiYgIW5vZGUubGVmdC5sZWZ0KSByZXR1cm4gbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LnJpZ2h0O1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5vZGUubGVmdCA9IHRoaXMucmVwbGFjZU5vZGVXaXRoVHdvQ2hpbGRyZW4obm9kZS5sZWZ0KTtcblxuICAgICAgICAgICAgICAgIC8vIGVsc2UgcmVjdXJzZSBkb3duIHRyZWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUodmFsdWUsIG5vZGUubGVmdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEgJiYgbm9kZS5yaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZSh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGZpbmQodmFsdWUsIG5vZGU9dGhpcy5yb290KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLmRhdGEpIHJldHVybiBub2RlO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkgcmV0dXJuIHRoaXMuZmluZCh2YWx1ZSwgbm9kZS5yaWdodCk7XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSByZXR1cm4gdGhpcy5maW5kKHZhbHVlLCBub2RlLmxlZnQpO1xuICAgIH1cblxuICAgIGxldmVsT3JkZXIoZnVuYywgc3RhcnQ9dGhpcy5yb290KSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IFtzdGFydF07XG4gICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gcXVldWVbMF1cbiAgICAgICAgICAgIGZ1bmMocXVldWUuc2hpZnQoKSk7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSBxdWV1ZS5wdXNoKG5vZGUubGVmdClcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KXF1ZXVlLnB1c2gobm9kZS5yaWdodClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluT3JkZXIoZnVuYywgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmluT3JkZXIoZnVuYywgbm9kZS5sZWZ0KTtcbiAgICAgICAgZnVuYyhub2RlKTtcbiAgICAgICAgdGhpcy5pbk9yZGVyKGZ1bmMsIG5vZGUucmlnaHQpXG4gICAgfVxuXG4gICAgcHJlT3JkZXIoZnVuYywgbm9kZT10aGlzLnJvb3QpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBmdW5jKG5vZGUpO1xuICAgICAgICB0aGlzLnByZU9yZGVyKGZ1bmMsIG5vZGUubGVmdCk7XG4gICAgICAgIHRoaXMucHJlT3JkZXIoZnVuYywgbm9kZS5yaWdodClcbiAgICB9XG4gICAgXG4gICAgcG9zdE9yZGVyKGZ1bmMsIG5vZGU9dGhpcy5yb290KSB7XG4gICAgICAgIGlmIChub2RlPT0gbnVsbCkgcmV0dXJuOyBcbiAgICAgICAgdGhpcy5wb3N0T3JkZXIoZnVuYywgbm9kZS5yaWdodCk7XG4gICAgICAgIGZ1bmMobm9kZSk7XG4gICAgICAgIHRoaXMucG9zdE9yZGVyKGZ1bmMsIG5vZGUubGVmdCk7XG4gICAgfVxuXG4gICAgaGVpZ2h0KG5vZGUpIHtcbiAgICAgICAgbGV0IGZyb21Sb290ID0gdGhpcy5kZXB0aChub2RlKTtcbiAgICAgICAgbGV0IGRlZXBlc3QgPSAwO1xuICAgICAgICB0aGlzLmxldmVsT3JkZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlcHRoKGl0ZW0pID4gZGVlcGVzdCkgZGVlcGVzdCA9IHRoaXMuZGVwdGgoaXRlbSk7XG4gICAgICAgIH0sIG5vZGUpXG4gICAgICAgIGxldCBoZWlnaHQgPSBkZWVwZXN0IC0gZnJvbVJvb3Q7XG4gICAgICAgIHJldHVybiBoZWlnaHRcbiAgICB9XG5cbiAgICBkZXB0aChub2RlLCBzdGFydD10aGlzLnJvb3QsIGNvdW50ID0gMCkge1xuICAgICAgICBpZiAobm9kZSA9PSBzdGFydCkgcmV0dXJuIGNvdW50O1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAobm9kZS5kYXRhIDwgc3RhcnQuZGF0YSkgcmV0dXJuIHRoaXMuZGVwdGgobm9kZSwgc3RhcnQubGVmdCwgY291bnQpXG4gICAgICAgIGlmIChub2RlLmRhdGEgPiBzdGFydC5kYXRhKSByZXR1cm4gdGhpcy5kZXB0aChub2RlLCBzdGFydC5yaWdodCwgY291bnQpO1xuICAgIH1cblxufVxuXG5sZXQgYnVpbGRUcmVlID0gKGQsIHN0YXJ0PTAsIGVuZCkgPT4ge1xuICAgIGVuZCA9IGQubGVuZ3RoIC0xO1xuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgbGV0IHJvb3QgPSBuZXcgTm9kZShkW21pZF0pO1xuICAgIHJvb3QubGVmdCA9IGJ1aWxkVHJlZShkLnNsaWNlKDAsIG1pZCksIHN0YXJ0LCBlbmQpO1xuICAgIHJvb3QucmlnaHQgPSBidWlsZFRyZWUoZC5zbGljZShtaWQrMSksIHN0YXJ0LCBlbmQpO1xuICAgIHJldHVybiByb290O1xufVxuXG5sZXQgYmluYXJ5U2VhcmNoVHJlZSA9IG5ldyBUcmVlKHNvcnRlZEFycldpdGhvdXREdXBsaWNhdGVzKTtcbmJpbmFyeVNlYXJjaFRyZWUucm9vdCA9IGJ1aWxkVHJlZShiaW5hcnlTZWFyY2hUcmVlLmFycmF5KTtcblxuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICAgIH1cbn1cblxuYmluYXJ5U2VhcmNoVHJlZS5pbnNlcnQoNTYpO1xuYmluYXJ5U2VhcmNoVHJlZS5pbnNlcnQoMTApXG5iaW5hcnlTZWFyY2hUcmVlLmluc2VydCgzNSlcbnByZXR0eVByaW50KGJpbmFyeVNlYXJjaFRyZWUucm9vdCk7XG5cbi8vXG4vLyBiaW5hcnlTZWFyY2hUcmVlLmRlbGV0ZSg1MCk7IFxuLy8gcHJldHR5UHJpbnQoYmluYXJ5U2VhcmNoVHJlZS5yb290KTsgXG4vL1xuXG5sZXQgdGVzdE5vZGUgPSBiaW5hcnlTZWFyY2hUcmVlLmZpbmQoNzApO1xubGV0IHRlc3ROb2RlVHdvID0gYmluYXJ5U2VhcmNoVHJlZS5maW5kKDU2KTtcblxuXG5jb25zb2xlLmxvZyhiaW5hcnlTZWFyY2hUcmVlLmhlaWdodCh0ZXN0Tm9kZSkpXG5cblxuIiwiY29uc3QgbWVyZ2UgPSAobGlzdEEsIGxpc3RCKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcbiAgICBsZXQgayA9IDA7XG4gICAgbGV0IG4gPSBsaXN0QS5sZW5ndGg7XG4gICAgbGV0IG0gPSBsaXN0Qi5sZW5ndGg7XG4gICAgbGV0IGxpc3RDID0gW107XG4gICAgd2hpbGUgKGkgPCBuICYmIGogPG0pIHtcbiAgICAgICAgaWYgKGxpc3RBW2ldIDwgbGlzdEJbal0pIHtcbiAgICAgICAgICAgIGxpc3RDW2srK10gPSBsaXN0QVtpKytdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0Q1trKytdID0gbGlzdEJbaisrXVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGxpc3RDW2srK10gPSBsaXN0QVtpXTtcbiAgICB9XG4gICAgZm9yICg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgbGlzdENbaysrXSA9IGxpc3RCW2pdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGlzdEM7XG59XG5cbi8vIG1lcmdlKFsyLCA0LCA2LCA4XSwgWzEsIDMsIDUsIDddKSAuLi4vLy4uLiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOF1cbi8vIG1lcmdlKFsyXSwgWzFdKSAuLi4vLy4uLlsxLCAyXVxuXG5jb25zdCBtZXJnZVNvcnQgPSAobGlzdCkgPT4ge1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGZpbmlzaCA9IGxpc3QubGVuZ3RoO1xuICAgIGlmIChmaW5pc2ggPCAyKSB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBmaW5pc2gpIC8gMik7XG4gICAgbGV0IHggPSBtZXJnZVNvcnQobGlzdC5zbGljZSgwLCBtaWQpKVxuICAgIGxldCB5ID0gbWVyZ2VTb3J0KGxpc3Quc2xpY2UobWlkKSlcbiAgICByZXR1cm4gbWVyZ2UoeCwgeSk7XG59XG5cblxuLy8gbWVyZ2VTb3J0KFszLCAxLCAyLCA0LCA3LCA1LCA2LCA4XSkgLi4uLy8uLi4gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdXG4vLyBtZXJnZVNvcnQoWzIsIDYsIDIsIDc1LCAyLCA0LCA4LCAzLCA1NywgMiwgMzVdKSAuLi4vLy4uLiBbMiwgMiwgMiwgMiwgMywgNCwgNiwgOCwgMzUsIDU3LCA3NV1cblxuZXhwb3J0IHttZXJnZSwgbWVyZ2VTb3J0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==