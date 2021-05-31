class Node{constructor(groupSize, next=null){
      this.groupSize = groupSize;
      this.next = next;
    }
}
    
  
 
  class Queue{
    constructor(limit=10, front=null, back=null) {
     this.front= front
     this.back = back
     this.timeWaiting = 0
     this.limit=limit
     this.size= 0   
    }
    
      

    siFull = () => this.size === this.limit
    isEmpty = () => this.size === 0;

    addNode = (groupSize) => {
          const node1 = new Node(groupSize)
          if(this.isEmpty()) this.front= node1
          else this.back.next = node1
          this.back = node1
          this.size +=1
          this.timeWaiting += groupSize* 0.5  
            }


     enqueue = (groupSize) => {
         if(this.siFull()) console.log ("Claasss is Full")
         else{
             let members = groupSize
            while(members > 12) {
                this.addNode(12)
                members -=12
            } 
            this.addNode(members)
         }

     }

       
     dequeue = () => {
         if(this.isEmpty()) console.log("the ride is available")
         
         else {
             
             let deleteNode = this.front;
             this.front = deleteNode.next;
             this.size--;
             this.timeWaiting -= deleteNode.groupSize * 0.5;
             return deleteNode.next.groupSize;
         }

     }

}
        
const newRide = new Queue()
console.log (newRide.timeWaiting)
newRide.enqueue(3)
newRide.enqueue(8)
newRide.enqueue(14)
newRide.enqueue(7)


console.log(newRide.timeWaiting)
console.log(newRide.dequeue())

console.log(newRide.timeWaiting)
