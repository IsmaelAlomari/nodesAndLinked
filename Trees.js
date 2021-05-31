const prompt = require('prompt-sync')({sigint: true});

class TreeNode {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
    
    

      traverse = () => {
        let nodes = [this]; 
        while (nodes.length > 0) {
          let currentNode = nodes.pop();
          console.log(currentNode.name);
          nodes = [...nodes, ...currentNode.children];
        }
    }

    parentIdentity = (child) => {
      let nodes = [this]; 
      while (nodes.length > 0) {
        let currentNode = nodes.pop();
        if (child.name.split(" ")[1] === currentNode.name.split(" ")[0]){
          return currentNode
        }
        console.log(currentNode.name);
        nodes = [...nodes, ...currentNode.children];
      }
      return "no such parent here"
  }
  
  addChild = (child) => {
        if(this.children.length < 2) {this.children.push(child);
        console.log(`added a child to family ${child.name}`)
        } else console.log ("child is an orphan")
    }
}



const root = new TreeNode("family")
let childNum = prompt ("enter child full name (done if finished):")

  while (childNum !== "done") {
     let child = new TreeNode(childNum)
    par = root.parentIdentity(child)
    if (par !== "no such parent here" ) {
     
          par.addChild(child)

    } else console.log(par)

    childNum = prompt ("enter child full name (done if finished):")
  }



