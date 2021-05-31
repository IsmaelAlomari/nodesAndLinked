const prompt = require('prompt-sync')({sigint: true});

class TreeNode {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
    
    addChild = (node) => {
        if(this.children.length < 2) {this.children.push(node);
        console.log(`added a child to family ${this.name}`)
        } else console.log ("child is an orphan")
    }

      removeChild = (node) => {
          if(this.children.length > 2 )
        this.children = this.children.filter((child) => child !== node);
      };


      traverse = () => {
        let nodes = [this]; 
        while (nodes.length > 0) {
          let currentNode = nodes.pop();
          console.log(currentNode.data);
          nodes = [...nodes, ...currentNode.children];
        }
    }
}

const tree = new TreeNode("fmaily")

tree.addChild("ismael")