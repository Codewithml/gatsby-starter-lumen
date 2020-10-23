---
template: post
title: Implement a Stack using Linked List
slug: stack-linked-list
draft: false
date: 2020-10-23T05:59:55.168Z
description: >
  Problem Statement: Implement a stack using a linked list with it's functions
  like push, pop, peek, isEmpty.
category: data-structures
tags:
  - linked-list
---
Problem Statement: Implement a stack using a linked list with it's functions like *push*, *pop*, *peek*, *isEmpty*.

> What is a Stack?
A Stack is a linear data structure, where the elements are stored in a particular order. It follows the LIFO(Last In First Out) order in which the operations are performed.

***

Test Cases:
1. Push
    * Push on an empty stack
    * Push on a non-empty stack
2. Peek
    * Peek on an empty stack --> None.
    * Peek on a non-empty stack --> value.
3. Pop
    * Pop from an empty stack --> None.
    * Pop from a non-empty stack --> value
4. isEmpty
    * isEmpty on an empty stack --> True
    * isEmpty on a non-empty stack --> False


Algorithm:
1. Push
    * Create a new node with data
    * Set next of new node to top
    * Set top to node
2. Peek
    * if stack is empty,
        * return None
    * else,
        * return value of top
3. Pop
    * if stack is empty,
        * return None
    * else,
        * save value of top in a temporary variable
        * set top to next of top
        * return temporary variable
4. isEmpty
    * if top has value,
        * return false
    * else,
        * return true

Time and Space Complexity:
1. Push
    * Time: O(1)
    * Space: O(1)
2. Pop
    * Time: O(1)
    * Space: O(1)
3. Peek
    * Time: O(1)
    * Space: O(1)
4. isEmpty
    * Time: O(1)
    * Space: O(1)
5. Length
    * Time: O(n)
    * Space: O(1)

***

Code
```python
class Node(object):
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class Stack(object):
    def __init__(self, top=None):
        self.top = top

    def __len__(self):
        curr = self.top
        counter = 0
        while curr is not None:
            counter += 1
            curr = curr.next
        return counter

    def pop(self):
        if self.top is None:
            return None
        data = self.top.data
        self.top = self.top.next
        return data

    def push(self, data):
        self.top = Node(data, self.top)

    def peek(self):
        return self.top.data if self.top is not None else None

    def isEmpty(self):
        return self.peek() is None
```

Unit Tests
```python
import unittest
from stack import Stack, Node


class TestStack(unittest.TestCase):
    def test_end_to_end(self):
        print('Test: Empty stack')
        stack = Stack()
        self.assertAlmostEqual(len(stack), 0)
        self.assertEqual(stack.peek(), None)
        self.assertEqual(stack.pop(), None)

        print('Test: One element')
        top = Node(5)
        stack = Stack(top)
        self.assertEqual(len(stack), 1)
        self.assertEqual(stack.pop(), 5)
        self.assertEqual(stack.peek(), None)

        print('Test: More than one element')
        stack = Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        self.assertEqual(len(stack), 3)
        self.assertEqual(stack.pop(), 3)
        self.assertEqual(len(stack), 2)
        self.assertEqual(stack.peek(), 2)
        self.assertEqual(stack.pop(), 2)
        self.assertEqual(len(stack), 1)
        self.assertEqual(stack.peek(), 1)
        self.assertEqual(stack.isEmpty(), False)
        self.assertEqual(stack.pop(), 1)
        self.assertEqual(len(stack), 0)
        self.assertEqual(stack.peek(), None)
        self.assertEqual(stack.isEmpty(), True)
        print('Success: test_end_to_end')


def main():
    test = TestStack()
    test.test_end_to_end()


if __name__ == '__main__':
    main()
```

[Github solution repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/stacks-queues/stack/stack-linked-list)

Happy coding !! :star2: