class Node {
  #value;
  #next = null;
  
  constructor(value) {
    this.#value = value;
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
  #tail = null;
  #nodes = 0;
  
  // TODO: Access an node by index
  // O(n)
  get(index) {
    console.log(index);
  }
  
  // TODO: Insert node at the start
  // O(1)
  prepend(value) {
    console.log(value);
  }
  
  // O(1)
  // Insert node at the end
  append(value) {
    const newNode = new Node(value);
    
    if(this.#nodes === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    
    this.#nodes++;
  }
  
  // TODO: Insert node at index
  // O(1)
  insert(value, index) {
    console.log(index);
  }
  
  // O(n)
  // Find a node by value
  find(value) {
    let currentNode = this.#head;
    let index = 0;
    
    while(currentNode !== null) {
      if(currentNode.value === value) {
        console.log(`Node with value "${value}" found at index ${index}`);
        return;
      } else {
        currentNode = currentNode.next;
        index++;
      }
    }
    
    console.log(`Node with value "${value}" not found`);
  }
  
  // O(1)
  // Delete node by index
  delete(index) {
    if(index > this.#nodes - 1) {
      console.log(`Index "${index}" out of range`);
    } else if(index === 0) {
      this.#head = this.#head.next;
      if(this.#nodes === 1) {
        this.#tail = this.#head;
      }
      this.#nodes--;
      console.log('Node at zero index deleted');
    } else {
      let currentIndex = 0;
      let prevNode = null;
      let currentNode = this.#head;
      
      while(currentNode !== null) {
        if(currentIndex === index) {
          if(currentIndex === this.#nodes - 1) {
            this.#tail = prevNode;
            console.log('Node at last index deleted');
          } else {
            console.log(`Node at index "${index}" deleted`);
          }
          prevNode.next = currentNode.next;
          this.#nodes--;
          break;
        } else {
          prevNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
      }
    }
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
// Append
singlyLinkedList.append(111);
singlyLinkedList.append(222);
singlyLinkedList.append(333);
singlyLinkedList.append(444);
singlyLinkedList.append(555);
// Find
singlyLinkedList.find(123);
singlyLinkedList.find(444);
// Delete
singlyLinkedList.delete(4);
singlyLinkedList.delete(0);
singlyLinkedList.delete(1);
singlyLinkedList.delete(3);
singlyLinkedList.log();
