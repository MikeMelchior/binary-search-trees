import {mergeSort} from '../../recursion-and-sort-algos/merge-sort';

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
    return mergeSort(removeDuplicates(arr));
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