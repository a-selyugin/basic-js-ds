const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addElement(data, this.rootNode);

    function addElement(data, node){
      if (!node){
        return new Node(data);
      }
      
      if (node.data === data){
        return node;
      }
      
      if (node.data < data){
        node.right = addElement(data, node.right);
      }
      else if (node.data > data){
        node.left = addElement(data, node.left);
      }
      
      return node;
    }
  }

  has(data) {
    let node = this.rootNode;

    while (node){
      if (data === node.data){
        return true;
      }
      if (data > node.data){
        node = node.right;
      }
      if (data < node.data){
        node = node.left;
      }
    }

    return false;
  }

  find(data) {
    let node = this.rootNode;

    while (node){
      if (data === node.data){
        return node;
      }
      if (data > node.data){
        node = node.right;
      }
      else if(data < node.data){
        node = node.left;
      }
    }

    return null;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data){
      if (!node){
        return null;
      }
      else if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      }
      else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left){
          return node.right;
        }
        if (!node.right){
          return node.left;
        }
        let maxLeft = node.left;
        while (maxLeft.right){
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeNode(node.left, maxLeft.data);
        return node;
      }
      
    }
    
  }

  min() {
    let node = this.rootNode;

    if (!node){
      return;
    }
    while (node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this.rootNode;

    if (!node){
      return;
    }
    while (node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};