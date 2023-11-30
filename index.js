// create class called Linked list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let newNode = new ListNode(value);
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    lastNode.next = newNode;
    return newNode;
  }

  prepend(value) {
    let newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  size() {
    let counter = 1;
    let traversingNode = this.head;
    while (traversingNode.next) {
      counter++;
      traversingNode = traversingNode.next;
    }
    return counter;
  }

  headNode() {
    return this.head;
  }

  tail() {
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  at(index) {
    let indexedNode = this.head;
    while (index !== 1) {
      indexedNode = indexedNode.next;
      index--;
    }
    return indexedNode;
  }

  pop() {
    let lastNode = this.head;
    let prevNode;
    while (lastNode.next) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }
    prevNode.next = null;
    Object.setPrototypeOf(lastNode, null);
    return prevNode;
  }

  contains(value) {
    let lastNode = this.head;
    while (lastNode.next) {
      if (lastNode.data === value) return true;
      lastNode = lastNode.next;
    }
    return false;
  }

  find(value) {
    let lastNode = this.head;
    let index = 0;
    while (lastNode.next) {
      if (lastNode.data === value) return index;
      lastNode = lastNode.next;
      index++;
    }
    return lastNode;
  }

  toString() {
    let lastNode = this.head;
    let stringedData = "";
    while (lastNode.next) {
      stringedData += `(${lastNode.data}) ->`;
      lastNode = lastNode.next;
    }
    stringedData += `(${lastNode.data}) -> null`;
    return stringedData;
  }

  insertAt(value, index) {
    let lastNode = this.head;
    let prevNode;
    while (index) {
      prevNode = lastNode;
      lastNode = lastNode.next;
      index--;
    }
    let newNode = new ListNode(value);
    newNode.next = lastNode;
    prevNode.next = newNode;

    return newNode;
  }

  removeAt(index) {
    let lastNode = this.head;
    let prevNode;
    while (index) {
      prevNode = lastNode;
      lastNode = lastNode.next;
      index--;
    }
    prevNode.next = lastNode.next;
    Object.setPrototypeOf(lastNode, null);

    return prevNode;
  }
}

// create another class called listnode for Node

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log("Second node:", list.head.next.data);

console.log("Append Node", list.append(8));
console.log("Append Node", list.append(7));
console.log("Append Node", list.append(10));
console.log("Third Node:", list.head.next.next.data);
console.log("list.head.data Before:", list.head.data);
console.log("Prepend Node", list.prepend(12));
console.log("list.head.data After:", list.head.data);
console.log("Node Size:", list.size());
console.log("Head Node:", list.headNode());
console.log("Last Node:", list.tail());
console.log("At Index:", list.at(3));
console.log("Pop Node:", list.pop());
console.log("Contains Value:", list.contains());
console.log("Find Value at Index:", list.find(8));
console.log("Linked List to String:", list.toString());
console.log("Insert value at index::", list.insertAt(15, 3));
console.log("List after insertion:", list.toString());
console.log("Remove node at index:", list.removeAt(3));
console.log("List after removal:", list.toString());