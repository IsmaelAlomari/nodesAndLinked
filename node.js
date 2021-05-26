const prompt = require('prompt-sync')({sigint: true});

class Node {
    constructor(age,highlight,nextNode =null) {
        this.age = age;
        this.highlight = highlight;
        this.nextNode = nextNode;
    }
}


const node7 = new Node(7,`I turned seven`)
// console.log(`Node 1: ${age}: 1, ${highlight}: I was born`)

const node3 = new Node(3,`I started walking`,node7)
// console.log(`Node 3: ${age}: 3, ${highlight}: I started walking`)

const node1 = new Node(1,`I was born`,node3)
// console.log(`Node 3: ${age}: 7, ${highlight}: I turned seven`)


class LinkedList {
    constructor(age,highlight, nextNode = null) {
      this.headNode = new Node(age,highlight);
    }
 insertBegining = (age,highlight) => {
     const node = new Node(age,highlight, this.head);
     this.head = node
     
 }

getLinkedList = () => {
    let current = this.head
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
           current = currentAge.nextNode 
        }
        else {
            let highlight = prompt(`center highlight for year : ${currentAge} : `)
            let newNode = new Node(currentAge,highlight,currentAge.nextNode)
            current.nextNode = newNode
            current = newNode;
        }
        
    }
}

}



const ageList = new LinkedList(7,"I was seven")
ageList.insertBegining(3,"I start walking")
ageList.insertBegining(1,"I was born")

let age = prompt("age : ")
ageList.insertHighLight(age)
ageList.getLinkedList()



