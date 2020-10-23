---
template: post
title: Implement a Queue using a Linked List
slug: queue-linked-list
draft: false
date: 2020-10-23T06:01:59.554Z
description: >
  Problem Statement: Implement a queue using a linked list with methods like
  enqueue and dequeue.
category: data-structures
tags:
  - linked-list
---
Problem Statement: Implement a queue using a linked list with methods like *enqueue* and *dequeue*.

> What is a Queue?
A Queue is a linear data structure, where the elements are stored in a particular order. It follows the FIFO(First In First Out) order in which the operations are performed.

***

Test Cases:
1. Enqueue
    * Enqueue on an empty queue
    * Enqueue on a non-empty queue
2. Dequeue
    * Dequeue on an empty queue. --> None
    * Dequeue on a non-empty queue. --> value
3. getData
    * getData on an empty queue. --> None
    * getData on a non-empty queue. --> List of elements in queue

Algorithm:
1. Enqueue
    * Create a new node with data
    * If head and tail pointers are None,
        * set head and tail to new node
    * Else,
        * set tail to new node.
2. Dequeue
    * If the queue is empty,
        * return None
    * If queue has only one element, i.e head and tail pointers are equal,
        * save head's value
        * set head and tail value to None
        * return value.
    * Else,
        * save head's value.
        * set head to next of head.
        * return value.
3. getData
    * initialise an empty list and a current pointer pointing to head.
    * iterate through the queue till current pointer is not None.
    * append value to the list at each iteration
    * return the list.

Time and Space Complexity
1. Enqueue
    * Time: O(1)
    * Space: O(1)
2. Dequeue
    * Time: O(1)
    * Space: O(1)
3. getData
    * Time: O(n)
    * Space: O(n)
4. Length
    * Time: O(n)
    * Space: O(1)

***

Code
```python
class Node(object):

    def __init__(self, data):
        self.data = data
        self.next = None


class Queue(object):

    def __init__(self):
        self.head = None
        self.tail = None

    def __len__(self):
        counter = 0
        curr_node = self.head
        while curr_node is not None:
            counter += 1
            curr_node = curr_node.next
        return counter

    def enqueue(self, data):
        node = Node(data)
        if self.head is None and self.tail is None:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

    def dequeue(self):
        if self.head is None and self.tail is None:
            return None
        data = self.head.data
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            self.head = self.head.next
        return data

    def getData(self):
        data = []
        curr_node = self.head
        while curr_node is not None:
            data.append(curr_node.data)
            curr_node = curr_node.next
        return data
```

Unit Test
```python
import unittest
from queue import Queue


class TestQueue(unittest.TestCase):
    def testEnqueue(self):
        print('Test: Enqueue on an empty queue')
        qu = Queue()
        qu.enqueue(1)
        self.assertEqual(qu.getData(), [1])

        print('Test: Enqueue on a non-empty queue')
        qu = Queue()
        qu.enqueue(2)
        qu.enqueue(3)
        self.assertEqual(len(qu), 2)
        self.assertEqual(qu.getData(), [2, 3])
        print('Success: enqueue')

    def testDequeue(self):
        print('Test: Dequeue on an empty queue')
        qu = Queue()
        self.assertEqual(qu.dequeue(), None)

        print('Test: Dequeue on a non-empty queue')
        qu = Queue()
        qu.enqueue(1)
        qu.enqueue(3)
        qu.enqueue(5)
        self.assertEqual(len(qu), 3)
        self.assertEqual(qu.dequeue(), 1)
        self.assertEqual(qu.dequeue(), 3)
        self.assertEqual(qu.dequeue(), 5)

        print('Success: testDequeue')


def main():
    test = TestQueue()
    test.testEnqueue()
    test.testDequeue()


if __name__ == "__main__":
    main()
```

[Github solution repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/stacks-queues/queue/queue-linked-list)

Happy Coding !!! :star2: