class Node {
  #data;
  #next = null;
  
  constructor(data) {
    this.#data = data;
  }
  
  get data() {
    return this.#data;
  }
  
  set data(data) {
    this.#data = data;
  }
  
  get next() {
    return this.#next;
  }
  
  set next(next) {
    this.#next = next;
  }
  
  log() {
    console.log(`Data: ${this.data}    Next: ${this.next} `);
  }
}

// const testNode = new Node(11);
// testNode.log();
// testNode.data = 42;
// testNode.log();
// testNode.next = 'NEXT_ADDRESS';
// testNode.log();

class LinkedList {
  #head = null;
  #tail = null;
  #count = 0;

  insert(data) {
    const newNode = new Node(data);
    
    if(this.#count === 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    
    this.#count += 1;
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
    console.log(`Node count: ${this.#count}`);
    let currentNode = this.#head;
    
    while(currentNode !== null) {
      console.log(`Node: ${currentNode.data}    Next: ${currentNode.next?.data || currentNode.next}`);
      currentNode = currentNode.next;
    }
    console.log('-----------------------')
  }
}

const linkedList = new LinkedList();
linkedList.log();
linkedList.insert(111);
linkedList.log();
linkedList.insert(222);
linkedList.log();
linkedList.insert(333);
linkedList.log();
