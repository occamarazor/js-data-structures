class Node {
  #value;
  #next = null;
  
  constructor(data) {
    this.#value = data;
  }
  
  get value() {
    return this.#value;
  }
  
  // set value(value) {
  //   this.#value = value;
  // }
  
  get next() {
    return this.#next;
  }
  
  set next(next) {
    this.#next = next;
  }
  
  // log() {
  //   console.log(`Value: ${this.#value}    Next: ${this.#next} `);
  // }
}

// const testNode = new Node(11);
// testNode.log();
// testNode.value = 42;
// testNode.log();
// testNode.next = 'NEXT_ADDRESS';
// testNode.log();

class SinglyLinkedList {
  #head = null;
  #tail = null; // Stored for efficiency
  #nodes = 0;
  
  getByIndex(i) {
    // TODO: get an item by index
    console.log(i);
  }
  
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
  
  insertAtIndex(i) {
    // TODO: insert item at index
    console.log(i);
  }
  
  findByValue(value) {
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      if(currentNode.value === value) {
        console.log(`Node with value "${value}" found`);
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
    
    console.log(`Node with value "${value}" not found`);
  }
  
  deleteAtIndex(i) {
    // TODO: delete item at index
    console.log(i);
  }
  
  log() {
    console.log(`Head: ${this.#head?.value || this.#head}`);
    console.log(`Tail: ${this.#tail?.value || this.#tail}`);
    console.log(`Nodes: ${this.#nodes}`);
    
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      console.log(`Node: ${currentNode.value}    Next: ${currentNode.next?.value || currentNode.next}`);
      currentNode = currentNode.next;
    }
    console.log('-----------------------');
  }
}

const singlyLinkedList = new SinglyLinkedList();
// Insert
singlyLinkedList.log();
singlyLinkedList.insert(111);
singlyLinkedList.log();
singlyLinkedList.insert(222);
singlyLinkedList.log();
singlyLinkedList.insert(333);
singlyLinkedList.log();
// Find
singlyLinkedList.findByValue(123);
singlyLinkedList.findByValue(333);
