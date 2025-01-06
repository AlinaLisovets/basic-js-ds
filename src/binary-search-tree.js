const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.Root = null;
  }
  root() {
    return this.Root;
  }

  add(data) {
    this.Root = addFunc(this.Root, data);

    function addFunc(node, data){
      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(data < node.data){
        node.left = addFunc(node.left, data);
      }else{
        node.right = addFunc(node.right, data);
      }
    return node;
    }
  }

  has(data) {
    return searchFunc(this.Root, data);

    function searchFunc(node, data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      return data < node.data ?
      searchFunc(node.left, data) :
      searchFunc(node.right, data);
    }
  }

  find(data) {
    return searchFunc(this.Root, data);

    function searchFunc(node, data){
      if(!node){
        return null;
      }
      if(node.data === data){
        return node;
      }
      return data < node.data ?
      searchFunc(node.left, data) :
      searchFunc(node.right, data);
    }
  }

  remove(data) {
    this.Root = removeFunc(this.Root, data);

    function removeFunc(node, data){

      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeFunc(node.left, data);
        return node;
      } else if (data > node.data){
        node.right = removeFunc(node.right, data);
        return node;
      } else{
        if (!node.left && !node.right){ 
        return null;
      }

      if(!node.left){
        node = node.right;
        return node;
      }

      if(!node.right){
        node = node.left;
        return node;
      }

      let minRight = node.right;
      while(minRight.left){
        minRight = minRight.left;
      }

      node.data = minRight.data;
      node.right = removeFunc(node.right, minRight.data);
      return node;
      }
    }
  }

  min() {
    if (!this.Root) {
      return null;
    }
    let node = this.Root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.Root) {
      return null;
    }
    let node = this.Root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};