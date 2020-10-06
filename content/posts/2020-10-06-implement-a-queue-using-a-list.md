---
template: post
title: Implement a Queue using a List.
slug: queue-list
draft: false
date: 2020-10-06T11:16:22.357Z
description: "Problem Statement: Implement a Queue with methods like Enqueue,
  Dequeue, Size, isEmpty using Lists in Python."
category: data-structures
tags:
  - arrays
  - queue
---
### Problem Statement: Implement a Queue with methods like *Enqueue*, *Dequeue*, *Size*, *isEmpty* using Lists in Python.

#### Test Cases
1. Enqueue
    * Enqueue on an empty Queue.
    * Enqueue on non-empty Queue.
2. Dequeue
    * Dequeue on an empty Queue --> None.
    * Dequeue on a Queue with only one element --> value.
    * Dequeue on a Queue with multiple elements --> value.
3. Size
    * Size on an empty Queue --> None.
    * Size on non empty Queue --> value.
4. isEmpty
    * isEmpty on an empty Queue --> True.
    * isEmpty on non empty Queue --> False.

### Algorithm
1. Enqueue
    * Insert the element at first index of the list.
    * If an element is already present at the index, it will be shifted one bit.
2. Dequeue
    * If queue is empty,
        * return None
    * Else,
        * Delete the last element from the list
        * Return the element
3. Size
    * Return the length of the list.
4. isEmpty
    * If list is empty,
        * return True.
    * Else,
        * return False

***

### Time and Space Complexity
1. Enqueue.
    * Time complexity: Best case - O(1), Worst case - O(n)
    * Space complexity: O(1)
2. Dequeue.
    * Time complexity: O(1)
    * Space complexity: O(1)
3. Size
   * Time complexity: O(1)
   * Space complexity: O(1)
4. isEmpty
   * Time complexity: O(1)
   * Space complexity: O(1)
***

### Code

```python
class Queue(object):
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, data):
        self.items.insert(0, data)

    def dequeue(self):
        if self.isEmpty():
            return None
        print(self.items)
        return self.items.pop()

    def size(self):
        return len(self.items)

```

### Unit Test

```python
import unittest
from queueList import Queue


class TestQueueList(unittest.TestCase):
    def testQueue(self):
        print('Test: Empty Queue')
        queue = Queue()
        self.assertEqual(queue.dequeue(), None)
        self.assertEqual(queue.size(), 0)
        self.assertEqual(queue.isEmpty(), True)

        print('Test: One element')
        queue = Queue()
        queue.enqueue(5)
        self.assertEqual(queue.size(), 1)
        self.assertEqual(queue.dequeue(), 5)
        self.assertEqual(queue.isEmpty(), True)

        print('Test: Multiple elements')
        queue = Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        self.assertEqual(queue.size(), 3)
        self.assertEqual(queue.dequeue(), 1)
        self.assertEqual(queue.dequeue(), 2)
        self.assertEqual(queue.isEmpty(), False)
        self.assertEqual(queue.dequeue(), 3)
        self.assertEqual(queue.isEmpty(), True)
        print('Success: testQueue')


def main():
    test = TestQueueList()
    test.testQueue()


if __name__ == '__main__':
    main()

```
***
[Github repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/stacks-queues/queue/queue-list)

### Happy coding !!!