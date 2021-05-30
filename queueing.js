class Node{
    constructor(groupSize, next=null){
      this.groupSize = groupSize;
      this.next = next;
    }
  }
 
  class Queue{
    constructor(limit=10, front=null, back=null) {
     this.front= front
     this.back = back
     this.timeWating=tumeWaiting
     this.limit=limit
     this.size= 0   
    }
        
     isEmpty = () => this.size === 0
     isFull = () => this.size === this.limit
     peek = () => {
         if (this.isEmpty()) console.log("Empty queue !");
         else return this.front;
     }
        
     enqueue = (groupSize) => {
         if(this.isFull()) console.log("wait until they fininshed")
         else {
             const newNode = new Node(groupSize);
             console.log(`Waiting Time : ${groupSize * 30 / 60 }`)
             if(this.isEmpty()) {
                 this.front = newNode
                 this.back = newNode
             } else {
                 this.back.next = newNode
                 this.back = newNode
                 this.size++
             }
         }
     }
 
         dequeue = (groupSize) => {
             if (this.isEmpty()) {
                 console.log("opps ,nothing to remove")
             } else {
                 const removeNode = this.front
                 if (this.size===1) {
                     this.front = null
                     this.back = null
                 } else {
                     this.front = removeNode.next
                 }
                   this.size--
                   return removeNode.groupSize             
                }
         }         


}