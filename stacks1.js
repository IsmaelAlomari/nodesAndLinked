class Node {
    constructor(color,number,next=null){
    this.color = color;
    this.number = number;
    this.next = next;
}
getData(){
    return `${this.color} - ${this.number}`;
  }
}

class stack {
   constructor(limit = 20) {
       this.top= null
        this.limit = limit
        this.size=0
      
   }

   isEmpty = () => this.size === 0

    isFull = () => this.size === this.limit

    peek = () => this.top.getData()
         
     pop = () => {
        if(this.isEmpty())
        console.log("the stackk is empty")
        else {
            const removeNode = this.top
            this.top = removeNode.next
            this.size--
            return removeNode.getData()
        }
    }

    push = (color,number) => {
        if(this.isFull())
        console.log("Full Stack")
        else {
           const newNode = new Node(color,number) 
           newNode.next = this.top
           this.top = newNode
           this.size++
        }
    }

   displayData = () => {
      let currentNode = this.top
      while(currentNode) {
          console.log(`number : ${currentNode.number} , color : ${currentNode.color}`)
          currentNode = currentNode.next
      }

   }

}
const colors = ["red", "blue", "green", "yellow"]
const numbers = [1,2,3,4,5,6,7,8,9,]

const random = (array) => {
    const index = Math.floor(Math.random() *array.length)
    return array[index]
}


const cardsStack = new stack(20)
const cardsArray = []

while (!cardsStack.isFull()) {
    const number = random(numbers)
    const color = random(colors)
    if(!cardsArray.includes([color,number])) {
        cardsStack.push(color,number)
        cardsArray.push([number,color])
    }
}
    
console.log("Deck : " , cardsStack)
cardsStack.displayData()

let player1 = [];
let player2 = [];

let i = 0;

while(i < 5) {
    player1.push(cardsStack.pop());
    player2.push(cardsStack.pop())
    i++
}

console.log("player 1 cards :" , player1)
console.log("player 2 cards :" , player2)

