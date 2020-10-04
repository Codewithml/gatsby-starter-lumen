---
template: post
title: Implement Stack using a List.
slug: stack-list
draft: false
date: 2020-10-03T11:56:22.564Z
description: "Problem Statement: Implement stack with *push*, *pop*, *peek*,
  *isEmpty*, *size* methods using a List."
category: data-structures
tags:
  - arrays
  - stack
---
### Problem Statement: Implement stack with *push*, *pop*, *peek*, *isEmpty*, *size* methods using a List.

#### Test Cases
1. Push
    * Push on empty stack. 
    * Push on non-empty stack
2. Pop
    * Pop on empty stack --> None.
    * Pop on non-empty stack. --> value
3. Peek
    * Peek on empty stack --> None.
    * Peek on non empty stack. --> value
4. isEmpty
    * isEmpty on empty stack --> True
    * isEmpty on non-empty stack --> False.
5. Size
    * size on empty stack --> None.
    * size on non empty stack. --> value

### Algorithm
1. Push
   * Append new value to end of the list.
2. Pop
   * If stack is empty,
        * return None
   * Else,
        * Pop element from the end of list.
        * return the element.
3. Peek
    * If stack is empty,
        * return None
    * Else,
        * return the last element of the list.
4. isEmpty
    * If stack is empty,
        * return True
    * Else, 
        * return False
5. Size
    * Return the length of the list.

### Time and Space complexity
1. Push
    * Time complexity: O(1)
    * Space complexity: O(1)
2. Pop
    * Time complexity: O(1)
    * Space complexity: O(1)
3. Peek
    * Time complexity: O(1)
    * Space complexity: O(1)
4. isEmpty
    * Time complexity: O(1)
    * Space complexity: O(1)
5. Size
    * Time complexity: O(1)
    * Space complexity: O(1)
***
### Code
```python
class Stack(object):
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, data):
        self.items.append(data)

    def pop(self):
        if self.isEmpty():
            return None
        return self.items.pop()

    def peek(self):
        if self.isEmpty():
            return None
        return self.items[-1]

    def size(self):
        return len(self.items)
```

### Unit Test
```python
import unittest
from stackLists import Stack


class TestStackLists(unittest.TestCase):
    def test_end_to_end(self):
        print('Test: Empty stack')
        stack = Stack()
        self.assertEqual(stack.peek(), None)
        self.assertEqual(stack.pop(), None)

        print('Test: One element')
        stack = Stack()
        stack.push(5)
        self.assertEqual(stack.size(), 1)
        self.assertEqual(stack.pop(), 5)
        self.assertEqual(stack.peek(), None)

        print('Test: More than one element')
        stack = Stack()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        self.assertEqual(stack.size(), 3)
        self.assertEqual(stack.pop(), 3)
        self.assertEqual(stack.peek(), 2)
        self.assertEqual(stack.pop(), 2)
        self.assertEqual(stack.peek(), 1)
        self.assertEqual(stack.isEmpty(), False)
        self.assertEqual(stack.pop(), 1)
        self.assertEqual(stack.peek(), None)
        self.assertEqual(stack.isEmpty(), True)
        print('Success: test_end_to_end')


def main():
    test = TestStackLists()
    test.test_end_to_end()


if __name__ == '__main__':
    main()
```

[Github repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/stacks-queues/stack/stack-lists)

### Happy Coding !!