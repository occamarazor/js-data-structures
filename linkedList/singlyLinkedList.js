import SinglyLinkedListNode from './singlyLinkedListNode.js';

class SinglyLinkedList {
  #head = null;
  #tail = null;
  #nodes = 0;
  
  // Find node by index and execute callback if found
  #findNodeByIndex(index, nodeFoundCallback) {
    let currentNode = this.#head;
    let prevNode = null;
    let currentIndex = 0;
    
    while(currentNode !== null) {
      if(currentIndex === index) {
        nodeFoundCallback(currentNode, prevNode);
        break;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }
  
  // Check if node is a first and
  // Initiate head & tail with new node
  // OR execute insert callback
  #firstNodeCheck(value, insertCallback, indexName) {
    const newNode = new SinglyLinkedListNode(value);
    
    if(this.#nodes === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      insertCallback(newNode);
    }
    
    this.#nodes++;
    console.log(`Node ${newNode.value} at ${indexName} index inserted`);
  }
  
  // Access first node
  accessFirst() {
    const { value, next } = this.#head;
    console.log(`Node: ${value}    Next: ${next?.value || next}`);
  }
  
  // Access last node
  accessLast() {
    const { value, next } = this.#tail;
    console.log(`Node: ${value}    Next: ${next?.value || next}`);
  }
  
  // Access node at index
  accessAtIndex(index) {
    const accessAtIndexCallback = ({ value, next }) => {
      console.log(`Node: ${value}    Next: ${next?.value || next}`);
    };
    
    this.#findNodeByIndex(index, accessAtIndexCallback);
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
  
  // Insert node at the start
  insertAtStart(value) {
    const insertAtStartCallback = (newNode) => {
      const oldHead = this.#head;
      this.#head = newNode;
      this.#head.next = oldHead;
    }
    
    this.#firstNodeCheck(value, insertAtStartCallback, 'zero');
  }
  
  // Insert node at the end
  insertAtEnd(value) {
    const insertAtEndCallback = (newNode) => {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    
    this.#firstNodeCheck(value, insertAtEndCallback, 'last');
  }
  
  // Insert node at index
  insertAtIndex(value, index) {
    const newNode = new SinglyLinkedListNode(value);
    
    const insertAtIndexCallback = (currentNode, prevNode) => {
      prevNode.next = newNode;
      newNode.next = currentNode;
      this.#nodes++;
      console.log(`Node ${newNode.value} at index "${index}" inserted`);
    };
    
    this.#findNodeByIndex(index, insertAtIndexCallback);
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
    const { value, next } = this.#head;
    this.#head = next;
    if(this.#nodes === 1) {
      this.#tail = this.#head;
    }
    this.#nodes--;
    console.log(`Node ${value} at zero index deleted`);
  }
  
  // TODO: Reference left for Doubly Linked List
  // Delete last node
  // deleteLast() {
  //   const { value, prev, next } = this.#tail;
  //   this.#tail = prev;
  //   this.#tail.next = next;
  //   if(this.#nodes === 1) {
  //     this.#head = this.#tail;
  //   }
  //   this.#nodes--;
  //   console.log(`Node ${value} at last index deleted`);
  // }
  
  // Delete node at index
  deleteAtIndex(index) {
    const deleteAtIndexCallback = ({ value, next }, prevNode) => {
      prevNode.next = next;
      if(index === this.#nodes - 1) {
        this.#tail = prevNode;
        console.log(`Node ${value} at last index deleted`);
      } else {
        console.log(`Node ${value} at index "${index}" deleted`);
      }
      this.#nodes--;
    };
    
    this.#findNodeByIndex(index, deleteAtIndexCallback);
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
    let currentIndex = 0;
    
    while(currentNode !== null) {
      if(currentNode.value === value) {
        console.log(`Node with value "${value}" found at index ${currentIndex}`);
        return;
      } else {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
    
    console.log(`Node with value "${value}" not found`);
  }
  
  // Log linked list: head, tail, nodes count
  // Log each node: value, next
  toString() {
    const head = this.#head;
    const tail = this.#tail;
    let currentNode = head;
  
    console.log(`HEAD    Value: ${head?.value || head}    Next: ${head?.next?.value || null}`);
    console.log(`TAIL    Value: ${tail?.value || tail}    Next: ${tail?.next?.value || null}`);
    console.log(`NODES: ${this.#nodes}`);
    console.log('--------------------------------');
    
    while(currentNode !== null) {
      const { value, next } = currentNode;
      currentNode = next;
      console.log(`Node: ${value}    Next: ${next?.value || next}`);
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();

// Prepend
singlyLinkedList.insertAtStart(1);
singlyLinkedList.insertAtStart(2);
singlyLinkedList.insertAtStart(3);
console.log('--------------------------------');

// Append
singlyLinkedList.insertAtEnd(4);
singlyLinkedList.insertAtEnd(5);
singlyLinkedList.insertAtEnd(6);
console.log('--------------------------------');

// Insert
singlyLinkedList.insert(7, 0);
singlyLinkedList.insert(8, 0);
singlyLinkedList.insert(9, 2);
singlyLinkedList.insert(10, 3);
singlyLinkedList.insert(11, 3);
singlyLinkedList.insert(12, 1);
singlyLinkedList.insert(13, 7);
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
singlyLinkedList.search(13);
console.log('--------------------------------');

// Access
singlyLinkedList.access(1);
singlyLinkedList.access(8);
singlyLinkedList.access(9);
