import LinkedListNode from './linkedListNode.js';

class SinglyLinkedList {
  #head = null;
  #tail = null;
  #nodes = 0;
  
  // O(n)
  // TODO: Access node by index
  get(index) {
    console.log(index);
  }
  
  // Initiate head & tail with new node
  #firstNodeCheck(value, insertFunc) {
    const newNode = new LinkedListNode(value);
    
    if(this.#nodes === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      insertFunc(newNode);
    }
    
    this.#nodes++;
  }
  
  // Insert node at the start
  prepend(value) {
    const prependFunc = (newNode) => {
      const oldHead = this.#head;
      this.#head = newNode;
      this.#head.next = oldHead;
    }
    
    this.#firstNodeCheck(value, prependFunc);
  }
  
  // Insert node at the end
  append(value) {
    const appendFunc = (newNode) => {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    
    this.#firstNodeCheck(value, appendFunc);
  }
  
  // TODO: Insert node at index
  insertAtIndex(value, index) {
    const insertAtIndexFunc = (newNode) => {
      console.log(index);
      console.log(newNode);
    }
    
    this.#firstNodeCheck(value, insertAtIndexFunc);
  }
  
  // O(1)
  // Insert node
  insert(value, index) {
    if(index > this.#nodes) {
      console.log(`Index "${index}" out of range`);
    } else if(index === 0) {
      this.prepend(value);
    } else if(index === this.#nodes) {
      this.append(value);
    } else {
      this.insertAtIndex(value, index);
    }
  }
  
  // O(n)
  // Find node
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
  
  // Delete first node
  deleteFirst() {
    this.#head = this.#head.next;
    if(this.#nodes === 1) {
      this.#tail = this.#head;
    }
    this.#nodes--;
    console.log('Node at zero index deleted');
  }
  
  // TODO: split?
  // Delete node at index
  deleteAtIndex(index) {
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
  
  // O(1)
  // Delete node
  delete(index) {
    if(index > this.#nodes - 1) {
      console.log(`Index "${index}" out of range`);
    } else if(index === 0) {
      this.deleteFirst();
    } else {
      this.deleteAtIndex(index);
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
// // Prepend
// singlyLinkedList.prepend(333);
// singlyLinkedList.prepend(222);
// singlyLinkedList.prepend(111);
// singlyLinkedList.log();
// // Append
// singlyLinkedList.append(111);
// singlyLinkedList.append(222);
// singlyLinkedList.append(333);
// singlyLinkedList.append(444);
// singlyLinkedList.append(555);
// singlyLinkedList.log();
// Insert
singlyLinkedList.insert(333, 0);
singlyLinkedList.insert(111, 0);
singlyLinkedList.insert(444, 2);
singlyLinkedList.insert(555, 3);
singlyLinkedList.insert(222, 1);
singlyLinkedList.log();
// // Find
// singlyLinkedList.find(123);
// singlyLinkedList.find(444);
// // Delete
// singlyLinkedList.delete(4);
// singlyLinkedList.delete(0);
// singlyLinkedList.delete(1);
// singlyLinkedList.delete(3);
// singlyLinkedList.log();
