import {mergeSort} from '../../recursion-and-sort-algos/merge-sort';

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
const removeDuplicatesAndSort = (arr) => { 
    return mergeSort(removeDuplicates(arr));
}


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

    height(node=this.root) {
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
        this.root = buildTree(mergeSort(newArr)) 
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
// ~~~~~~~ Tie it all together ~~~~~~~~~~~
//
//


// Write a simple driver script that does the following:

// 1. Create a binary search tree from an array of random numbers. 
// You can create a function that returns an array of random numbers 
// every time you call it, if you wish.

// 2. Confirm that the tree is balanced by calling isBalanced

// 3. Print out all elements in level, pre, post, and in order

// 4. Unbalance the tree by adding several numbers > 100

// 5. Confirm that the tree is unbalanced by calling isBalanced

// 6. Balance the tree by calling rebalance

// 7. Confirm that the tree is balanced by calling isBalanced

// 8. Print out all elements in level, pre, post, and in order



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// 1

const randomArrayOfNumbers = () => {
    let randomArr = []
      // create random integer up to 25;
    let randInt = Math.floor(Math.random() * 25) + 1
      // add randInt number of random numbers up to 1000 to array
    for (let i=0; i<randInt; i++) {
        randomArr.push(Math.floor(Math.random() * 1000)) + 1
    }
    return randomArr;
}
  // copied from console log of above func, for consistency
let x = [806, 172, 767, 741, 661, 180, 482, 199, 
        380, 535, 746, 153, 323, 426, 906, 354, 
        81, 279, 494, 300, 280, 615]

let bst = new Tree;
bst.root = buildTree(removeDuplicatesAndSort(x))
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2

console.log(bst.isBalanced())  // .... true;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 

const print = (x) => {
    console.log(x);
}

// bst.levelOrder(print)  
// bst.preOrder(print)
// bst.inOrder(print)
// bst.postOrder(print)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4

bst.insert(80)
bst.insert(70)
bst.insert(60)
bst.insert(50)
bst.insert(40)
bst.insert(30)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 5

console.log(bst.isBalanced())  //  .... false
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 6 

bst.rebalance();
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 7 

console.log(bst.isBalanced());  //  .... true
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 8

// bst.levelOrder(print)  
// bst.preOrder(print)
// bst.inOrder(print)
bst.postOrder(print)