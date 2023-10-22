// https://www.codewars.com/kata/5672682212c8ecf83e000050/train/typescript

export function dblLinear(n: number): number {
  const u = U(n);

  return u[n];
}

const U = (n: number): Record<number, number> => {
  const u: Record<number, number> = {};
  let size = 0;
  const queue = createReversedLinkedList(1);

  while (size <= n) {
    const x = queue.pop(queue);

    if (x !== u[size - 1]) {
      u[size] = x;
      size += 1;
    }

    const y = 2 * x + 1;
    const z = 3 * x + 1;
    queue.insert(queue, y);
    queue.insert(queue, z);
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
  getLength: () => number;
  insert: (list: DoublyLinkedList<T>, v: T) => void;
  pop: (list: DoublyLinkedList<T>) => T;
};

const createReversedLinkedList = <T>(value: T): DoublyLinkedList<T> => {
  const node: DoublyLinkedNode<T> = {
    value,
    prev: null,
    next: null,
  };

  let length = 1;

  const insert: DoublyLinkedList<T>['insert'] = (list, value) => {
    let currentNode: DoublyLinkedNode<T> = list.lastNode;

    while (value < currentNode.value) {
      currentNode = currentNode.prev as DoublyLinkedNode<T>;
    }

    if (value > currentNode.value) {
      const newNode: DoublyLinkedNode<T> = {
        value,
        prev: currentNode,
        next: currentNode.next,
      };

      if (currentNode.next === null) {
        list.lastNode = newNode;
      }

      currentNode.next = newNode;
      length++;
    }
  };

  const pop: DoublyLinkedList<T>['pop'] = list => {
    let firstNode: DoublyLinkedNode<T> = list.firstNode;

    if (firstNode.next) {
      firstNode.next.prev = null;
      list.firstNode = firstNode.next;
    }

    return firstNode.value;
  };

  return {
    firstNode: node,
    lastNode: node,
    insert,
    pop,
    getLength: () => length,
  };
};

console.table(U(100));
