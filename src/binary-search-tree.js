const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.base;
   
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    this.base = addWithin(this.base, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
    
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return searchWithin(this.base, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
    
  }

  find(data) {
    return findWithin(this.base, data);
    function findWithin(node, data) {
    if (!node) {
      return null;
  }
  if (node.data === data) {
    return node;
  }

  if (data < node.data) {
    return findWithin(node.left, data);
  } else {
    return findWithin(node.right, data);
  }
  
    }

  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.base = removeNode(this.base, data);
    
    function removeNode(node, data){
      if (!node) {
        return null;
      }

      if  (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
   
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if (!this.base) {
      return;
    }

    let node = this.base;
    while (node.left) {
      node = node.left;

    }
    return node.data;
   
  }

  

  max() {
    // throw new NotImplementedError('Not implemented');
    if (!this.base) {
      return;
    }

    let node = this.base;
    while (node.right) {
      node = node.right;

    }
    return node.data;
    
  }
}

module.exports = {
  BinarySearchTree
};

