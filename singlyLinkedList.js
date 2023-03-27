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
  
  // TODO: access an item by index
  // O(n)
  get(index) {
    console.log(index);
  }
  
  // O(1)
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
  
  // TODO: insert item at index
  // O(1)
  insert(value, index) {
    console.log(index);
  }
  
  // O(n)
  find(value) {
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
  
  // TODO: delete item at index
  // O(1)
  delete(index) {
    console.log(index);
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
singlyLinkedList.append(111);
singlyLinkedList.log();
singlyLinkedList.append(222);
singlyLinkedList.log();
singlyLinkedList.append(333);
singlyLinkedList.log();
singlyLinkedList.append(444);
singlyLinkedList.log();
// Find
singlyLinkedList.find(123);
singlyLinkedList.find(333);
