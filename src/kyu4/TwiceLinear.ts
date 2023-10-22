// https://www.codewars.com/kata/5672682212c8ecf83e000050/train/typescript

export function dblLinear(n: number): number {
  const u = U(n);

  return u[n];
}

const U = (n: number): Record<number, number> => {
  const u: Record<number, number> = {};
  let size = 0;
  const queue = createDoublyLinkedList(1);

  while (size <= n) {
    const x = queue.firstNode.value;

    if (x !== u[size - 1]) {
      u[size] = x;
      size += 1;
    }

    const y = 2 * x + 1;
    const z = 3 * x + 1;

    queue.insertWithOrder(y);
    queue.insertWithOrder(z);
    queue.pop();
  }

  return u;
};

type DoublyLinkedNode<T> = {
  value: T;
  prev: null | DoublyLinkedNode<T>;
  next: null | DoublyLinkedNode<T>;
};

type DoublyLinkedList<T> = {
  firstNode: DoublyLinkedNode<T>;
  lastNode: DoublyLinkedNode<T>;
  insertWithOrder: (this: DoublyLinkedList<T>, value: T) => void;
  pop: (this: DoublyLinkedList<T>) => T;
};

const createDoublyLinkedList = <T>(value: T): DoublyLinkedList<T> => {
  const node: DoublyLinkedNode<T> = {
    value,
    prev: null,
    next: null,
  };

  return {
    firstNode: node,
    lastNode: node,
    insertWithOrder(this: DoublyLinkedList<T>, value: T) {
      let currentNode = this.firstNode;

      while (currentNode.value < value && currentNode.next) {
        currentNode = currentNode.next;
      }

      if (currentNode.value < value) {
        const newNode: DoublyLinkedNode<T> = {
          value,
          prev: currentNode,
          next: null,
        };

        currentNode.next = newNode;
        this.lastNode = newNode;
      } else if (currentNode.value > value) {
        const newNode: DoublyLinkedNode<T> = {
          value,
          prev: currentNode.prev,
          next: currentNode,
        };

        if (currentNode.prev) {
          currentNode.prev.next = newNode;
        } else {
          this.firstNode = newNode;
        }

        currentNode.prev = newNode;
      }
    },

    pop(this: DoublyLinkedList<T>) {
      const node = this.firstNode;

      if (!node.next) {
        throw new Error('Cannot pop last node');
      }

      this.firstNode = node.next;
      this.firstNode.prev = null;

      return node.value;
    },
  };
};

console.table(U(100));
