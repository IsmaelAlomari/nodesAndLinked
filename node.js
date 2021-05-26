const prompt = require('prompt-sync')({sigint: true});

class Node {
    constructor(age,highlight,nextNode =null) {
        this.age = age;
        this.highlight = highlight;
        this.nextNode = nextNode;
    }
}


class LinkedList {
    constructor(age,highlight) {
      this.head = new Node(age,highlight);
    }


 insertBegining = (age,highlight) => {
     const node = new Node(age, highlight, this.head);
     this.head = node
     
    }
getLinkedList = () => {
    let current = this.head;
    while(current) {
        console.log(`year : ${current.age} , highlight : ${current.highlight}`)
        current = current.nextNode;
     }
   }
 insertHighLight = (age) => {
    let current = this.head
    while(current.age < age){
        let currentAge = current.age + 1
        if (current.nextNode && current.nextNode.age === currentAge) {
           current = current.nextNode 
        }
        else {
            let highlight = prompt(`center highlight for year : ${currentAge} : `)
            let newNode = new Node(currentAge,highlight,current.nextNode)
            current.nextNode = newNode
            current = newNode;
        }
        
    }
}
}

 

const ageList = new LinkedList(7,"I was seven")
ageList.insertBegining(3,"I start walking")
ageList.insertBegining(1,"I was born")

let age = prompt("age : ");
ageList.insertHighLight(age);
ageList.getLinkedList();



