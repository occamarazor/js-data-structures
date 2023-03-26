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
    console.log(`
    Data: ${this.data}
    Next: ${this.next}
    `);
  }
}

const testNode = new Node(11);
testNode.log();
testNode.data = 42;
testNode.log();
testNode.next = 'NEXT_ADDRESS';
testNode.log();
