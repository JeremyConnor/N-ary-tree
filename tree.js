class Tree {
  constructor(val, type) {
    this.val = val;
    this.type = type;
    this.children = [];
  }
  
  insert(val, type) {
    const node = new Tree(val, type);
    this.children.push(node);
    return node;
  }
  
  delete(childNode) {
    const index = this.children.indexOf(childNode);
    
    if (index === -1) {
      throw new Error("The provided node is not a child of this Tree");
    } else {
      this.children.splice(index, 1);
    }
  }
  
  isChild(treeNode) {
    if (this.children.includes(treeNode)) return true;
    
    for (let child of this.children) {
      if (child.isChild(treeNode)) return true;
    }
    
    return false;
  }
}

// Create the n-ary tree
// str is string array from the query
function createTree(str) {
    var head = new Tree("__query__", "key");
    var node = head;

    // Traverse the str array to create nodes of the tree
    for(let temp of str) {
        /// Logic
    }
}