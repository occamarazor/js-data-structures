class SinglyLinkedListNode {
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
  
  // toString() {
  //   console.log(`Value: ${this.#value}    Next: ${this.#next} `);
  // }
}

// const testNode = new SinglyLinkedListNode(11);
// testNode.toString();
// testNode.value = 42;
// testNode.toString();
// testNode.next = 'NEXT_ADDRESS';
// testNode.toString();

export default SinglyLinkedListNode;