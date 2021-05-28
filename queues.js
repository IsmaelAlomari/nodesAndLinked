
class Node {
    constructor(data,nextNode) {
        this.data = data
        this.nextNode=nextNode;
    }
}

class Queue {
    constructor(limit=null) {
        this.frontNode = null
        this.backNode = null
        this.limit=null;
        this.size = 0;
    }

 isEmpty = () => this.size === 0

    isFull = () => this.size === this.limit


    peek = () => {
        if (this.isEmpty()) console.log("empty queue")
        else return this.frontNode.data
        this.frontNode.data
    }   

    enqueue = (data) => {
        if (this.isFull()) console.log("Ther's no place for you here");
        else {
            const newNode = new Node(data)
            if(this.isEmpty()) {
                this.frontNode = newNode
                this.backNode = newNode
                this.size++
            } else {
                this.backNode.nextNode = newNode
                this.backNode = newNode
                this.size++
            

            }
            
        }
    }

    dequeue = () => {
        if (this.isEmpty()) {
            console.log(" ops!")
        
        } else{
            let removeNode = this.frontNode
if (this.size === 1){
    this.frontNode =null
    this.backNode =null

}

        }
    }

    
    
    
    const kfcQ = new Queue(3)

    kfcQ.enqueue("esra")
    kfcQ.enqueue("yosuf")
    kfcQ.enqueue("Mm")
    console.log(kfcQ.peek())
   



