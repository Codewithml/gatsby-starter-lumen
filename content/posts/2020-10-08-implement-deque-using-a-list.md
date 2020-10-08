---
template: post
title: Implement Deque using a List
slug: deque-list
draft: false
date: 2020-10-08T04:56:10.124Z
description: "Problem Statement: Implement a Deque with all it's functions using a List."
category: data-structures
tags:
  - arrays
  - deque
---
### Problem Statement: Implement a Deque with all it's functions using a List.

> A Deque is a double ended queue, where elements can be added from both the ends of the queue.

#### Functions to be implemented

1. *addRear*
2. *addFront*
3. *getRear*
4. *getFront*
5. *deleteRear*
6. *deleteFront*
7. *isEmpty*
8. *Size*

#### Test Cases

1. ***addRear***
   * Add element at the rear of deque on an empty deque.
   * Add element at the rear of deque on a non-empty deque.
2. ***addFront***
   * Add element at the front of deque on an empty deque.
   * Add element at the front of deque on a non-empty deque.
3. ***getRear***
   * Get element from the rear of deque on an empty deque --> None.
   * Get element from the rear of deque on a non-empty deque --> value.
4. ***getFront***
   * Get element from the front of deque on an empty deque --> None.
   * Get element from the front of deque on a non-empty deque --> value.
5. ***deleteRear***
   * Delete element from the rear of deque on an empty deque --> None.
   * Delete element from the rear of deque on a non-empty deque --> value.
6. ***deleteFront***
   * Delete element from the front of deque on an empty deque --> None.
   * Delete element from the front of deque on a non-empty deque --> value.
7. ***isEmpty***
   * *isEmpty* on an non-empty deque --> True.
   * *isEmpty* on a empty deque --> False.
8. ***Size***
   * *size* on an non-empty deque --> None.
   * *size* on a empty deque --> value.

### Algorithm

1. ***addRear***
   * Insert the element at the first index of list.
2. ***addFront***
   * Insert the element at the last index of list.
3. ***getRear***
   * If deque is empty,
     * return None.
   * Else,
     * Get the element present at the first index of list.
4. ***getFront***
   * If deque is empty,
     * return None.
   * Else,
     * Get the element present at the last index of list.
5. ***deleteRear***
   * If deque is empty,
     * return None.
   * Else,
     * remove the element at the first index of list.
6. ***deleteFront***
   * If deque is empty,
     * return None.
   * Else,
     * remove the element at the last index of list.
7. ***isEmpty***
   * If list is empty,
     * return True.
   * Else,
     * return False.
8. ***Size***
   * Return the length of the list.

- - -

### Time and Space complexity

1. ***addFront***
   * Time complexity: Best case - O(1), Worst case - O(n)
   * Space complexity: O(1)
2. ***addRear***
   * Time complexity: Best case - O(1), Worst case - O(n)
   * Space complexity: O(1)
3. ***getFront***
   * Time complexity:  O(1)
   * Space complexity: O(1)
4. ***getRear***
   * Time complexity:  O(1)
   * Space complexity: O(1)
5. ***deleteFront***
   * Time complexity: O(1)
   * Space complexity: O(1)
6. ***deleteRear***
   * Time complexity: O(1)
   * Space complexity: O(1)
7. ***isEmpty***
   * Time complexity: O(1)
   * Space complexity: O(1)
8. ***Size***
   * Time complexity: O(1)
   * Space complexity: O(1)

- - -

### Code

```python
class Deque(object):
    def __init__(self):
        self.deque = []

    def isEmpty(self):
        return self.deque == []

    def addRear(self, data):
        self.deque.insert(0, data)

    def addFront(self, data):
        self.deque.append(data)

    def getRear(self):
        if self.isEmpty():
            return None
        return self.deque[0]

    def getFront(self):
        if self.isEmpty():
            return None
        return self.deque[-1]

    def removeRear(self):
        if self.isEmpty():
            return None
        return self.deque.pop(0)

    def removeFront(self):
        if self.isEmpty():
            return None
        return self.deque.pop()

    def size(self):
        return len(self.deque)
```

### Unit Test

```python
import unittest
from deque import Deque


class TestDeque(unittest.TestCase):
    def testDeque(self):
        print('Test: Empty Deque')
        deque = Deque()
        self.assertEqual(deque.size(), 0)
        self.assertEqual(deque.getFront(), None)
        self.assertEqual(deque.getRear(), None)
        self.assertEqual(deque.removeFront(), None)
        self.assertEqual(deque.removeRear(), None)
        self.assertEqual(deque.isEmpty(), True)

        print('Test: One element')
        deque = Deque()
        deque.addFront(5)
        self.assertEqual(deque.size(), 1)
        self.assertEqual(deque.getFront(), 5)
        self.assertEqual(deque.removeFront(), 5)
        self.assertEqual(deque.isEmpty(), True)
        deque.addRear(5)
        self.assertEqual(deque.isEmpty(), False)
        self.assertEqual(deque.size(), 1)
        self.assertEqual(deque.getRear(), 5)
        self.assertEqual(deque.removeRear(), 5)
        self.assertEqual(deque.isEmpty(), True)

        print('Test: Multiple elements')
        deque = Deque()
        deque.addFront(1)
        deque.addRear(3)
        deque.addFront(2)
        deque.addRear(4)
        self.assertEqual(deque.size(), 4)
        self.assertEqual(deque.getFront(), 2)
        self.assertEqual(deque.removeFront(), 2)
        self.assertEqual(deque.size(), 3)
        self.assertEqual(deque.removeRear(), 4)
        self.assertEqual(deque.getRear(), 3)
        self.assertEqual(deque.size(), 2)
        self.assertEqual(deque.isEmpty(), False)
        self.assertEqual(deque.removeFront(), 1)
        self.assertEqual(deque.removeRear(), 3)
        self.assertEqual(deque.isEmpty(), True)
        print('Success: testDeque')


def main():
    test = TestDeque()
    test.testDeque()


if __name__ == "__main__":
    main()

```
***

[Github repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/stacks-queues/deque)

### Happy Coding !!!