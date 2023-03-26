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
}

const testNode = new Node(1);
console.log(testNode);
console.log(testNode.data);
testNode.data = 42;
console.log(testNode.data);
console.log(testNode.next);
testNode.next = 'NEXT_ADDRESS';
console.log(testNode.next);
