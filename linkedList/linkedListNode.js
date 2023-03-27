class LinkedListNode {
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

// const testNode = new LinkedListNode(11);
// testNode.log();
// testNode.value = 42;
// testNode.log();
// testNode.next = 'NEXT_ADDRESS';
// testNode.log();

export default LinkedListNode;