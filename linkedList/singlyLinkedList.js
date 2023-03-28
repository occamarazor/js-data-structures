import LinkedListNode from './linkedListNode.js';

class SinglyLinkedList {
  #head = null;
  #tail = null;
  #nodes = 0;
  
  // Access first node
  accessFirst() {
    const currentNode = this.#head;
    console.log(`Node: ${currentNode.value}    Next: ${currentNode.next?.value || currentNode.next}`);
  }
  
  // Access last node
  accessLast() {
    const currentNode = this.#tail;
    console.log(`Node: ${currentNode.value}    Next: ${currentNode.next?.value || currentNode.next}`);
  }
  
  // Access node at index
  accessAtIndex(index) {
    let currentIndex = 0;
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      if(currentIndex === index) {
        console.log(`Node: ${currentNode.value}    Next: ${currentNode.next?.value || currentNode.next}`);
        break;
      } else {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }
  
  // O(n)
  // Access node by index
  access(index) {
    if(index > this.#nodes - 1) {
      console.log(`Node access failed: index "${index}" out of range`);
    } else if(index === 0) {
      this.accessFirst();
    } else if(index === this.#nodes - 1) {
      this.accessLast();
    } else {
      this.accessAtIndex(index);
    }
  }
  
  // Initiate head & tail with new node
  #firstNodeCheck(value, insertFunc, indexString) {
    const newNode = new LinkedListNode(value);
    
    if(this.#nodes === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      insertFunc(newNode);
    }
    
    this.#nodes++;
    console.log(`Node ${newNode.value} at ${indexString} index inserted`);
  }
  
  // Insert node at the start
  insertAtStart(value) {
    const insertAtStartFunc = (newNode) => {
      const oldHead = this.#head;
      this.#head = newNode;
      this.#head.next = oldHead;
    }
    
    this.#firstNodeCheck(value, insertAtStartFunc, 'zero');
  }
  
  // Insert node at the end
  insertAtEnd(value) {
    const insertAtStartFunc = (newNode) => {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    
    this.#firstNodeCheck(value, insertAtStartFunc, 'last');
  }
  
  // Insert node at index
  insertAtIndex(value, index) {
    const newNode = new LinkedListNode(value);
    let currentIndex = 0;
    let prevNode = null;
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      if(currentIndex === index) {
        prevNode.next = newNode;
        newNode.next = currentNode;
        this.#nodes++;
        console.log(`Node ${newNode.value} at index "${index}" inserted`);
        break;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }
  
  // O(1)
  // Insert node by index
  insert(value, index) {
    if(index > this.#nodes) {
      console.log(`Node insert failed: index "${index}" out of range`);
    } else if(index === 0) {
      this.insertAtStart(value);
    } else if(index === this.#nodes) {
      this.insertAtEnd(value);
    } else {
      this.insertAtIndex(value, index);
    }
  }
  
  // Delete first node
  deleteFirst() {
    const currentNode = this.#head;
    this.#head = currentNode.next;
    if(this.#nodes === 1) {
      this.#tail = this.#head;
    }
    this.#nodes--;
    console.log(`Node ${currentNode.value} at zero index deleted`);
  }
  
  // TODO: Reference left for Doubly Linked List
  // Delete last node
  // deleteLast() {
  //   const currentNode = this.#tail;
  //   this.#tail = currentNode.prev;
  //   this.#tail.next = currentNode.next;
  //   if(this.#nodes === 1) {
  //     this.#head = this.#tail;
  //   }
  //   this.#nodes--;
  //   console.log(`Node ${currentNode.value} at last index deleted`);
  // }
  
  // Delete node at index
  deleteAtIndex(index) {
    let currentIndex = 0;
    let prevNode = null;
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      if(currentIndex === index) {
        prevNode.next = currentNode.next;
        if(currentIndex === this.#nodes - 1) {
          this.#tail = prevNode;
          console.log(`Node ${currentNode.value} at last index deleted`);
        } else {
          console.log(`Node ${currentNode.value} at index "${index}" deleted`);
        }
        this.#nodes--;
        break;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }
  
  // O(1)
  // Delete node by index
  delete(index) {
    if(index > this.#nodes - 1) {
      console.log(`Node deletion failed: index "${index}" out of range`);
    } else if(index === 0) {
      this.deleteFirst();
      // TODO: Reference left for Doubly Linked List
      // } else if(index === this.#nodes - 1) {
      //   this.deleteLast();
    } else {
      this.deleteAtIndex(index);
    }
  }
  
  // O(n)
  // Search node by value
  search(value) {
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
  
  // Log linked list: head, tail, nodes count
  // Log each node: value, next
  toString() {
    console.log(`HEAD    Value: ${this.#head?.value || this.#head}    Next: ${this.#head?.next?.value || null}`);
    console.log(`TAIL    Value: ${this.#tail?.value || this.#tail}    Next: ${this.#tail?.next?.value || null}`);
    console.log(`NODES: ${this.#nodes}`);
    console.log('--------------------------------');
    
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      console.log(`Node: ${currentNode.value}    Next: ${currentNode.next?.value || currentNode.next}`);
      currentNode = currentNode.next;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();

// Prepend
singlyLinkedList.insertAtStart(333);
singlyLinkedList.insertAtStart(222);
singlyLinkedList.insertAtStart(111);
console.log('--------------------------------');

// Append
singlyLinkedList.insertAtEnd(111);
singlyLinkedList.insertAtEnd(222);
singlyLinkedList.insertAtEnd(333);
console.log('--------------------------------');

// Insert
singlyLinkedList.insert(333, 0);
singlyLinkedList.insert(111, 0);
singlyLinkedList.insert(444, 2);
singlyLinkedList.insert(666, 3);
singlyLinkedList.insert(555, 3);
singlyLinkedList.insert(222, 1);
singlyLinkedList.insert(999, 7);
console.log('--------------------------------');

// Delete
singlyLinkedList.delete(4);
singlyLinkedList.delete(0);
singlyLinkedList.delete(1);
singlyLinkedList.delete(3);
console.log('--------------------------------');

// Log
singlyLinkedList.toString();
console.log('--------------------------------');

// Search
singlyLinkedList.search('NO_SUCH_NODE');
singlyLinkedList.search(444);
console.log('--------------------------------');

// Access
singlyLinkedList.access(0);
singlyLinkedList.access(8);
singlyLinkedList.access(9);
