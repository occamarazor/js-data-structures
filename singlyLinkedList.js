class Node {
  #data;
  #next = null;
  
  constructor(data) {
    this.#data = data;
  }
  
  get data() {
    return this.#data;
  }
  
  // set data(data) {
  //   this.#data = data;
  // }
  
  get next() {
    return this.#next;
  }
  
  set next(next) {
    this.#next = next;
  }
  
  // log() {
  //   console.log(`Data: ${this.#data}    Next: ${this.#next} `);
  // }
}

// const testNode = new Node(11);
// testNode.log();
// testNode.data = 42;
// testNode.log();
// testNode.next = 'NEXT_ADDRESS';
// testNode.log();

class SinglyLinkedList {
  #head = null;
  #tail = null; // Stored for efficiency
  #nodes = 0;
  
  insert(data) {
    const newNode = new Node(data);
    
    // Reverse singly linked list
    // Wrong: in fact head is tail; next is previous
    // newNode.next = this.#head;
    // this.#head = newNode;
    
    if(this.#nodes === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    
    this.#nodes++;
  }
  
  find(data) {
    // TODO: find first item with given data
    console.log(data);
  }
  
  delete(i) {
    // TODO: delete item by index
    console.log(i);
  }
  
  log() {
    console.log(`Head: ${this.#head?.data || this.#head}`);
    console.log(`Tail: ${this.#tail?.data || this.#tail}`);
    console.log(`Nodes: ${this.#nodes}`);
    
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      console.log(`Node: ${currentNode.data}    Next: ${currentNode.next?.data || currentNode.next}`);
      currentNode = currentNode.next;
    }
    console.log('-----------------------')
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.log();
singlyLinkedList.insert(111);
singlyLinkedList.log();
singlyLinkedList.insert(222);
singlyLinkedList.log();
singlyLinkedList.insert(333);
singlyLinkedList.log();
