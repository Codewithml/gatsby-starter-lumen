---
template: post
title: Valid Elements in a sorted array
slug: valid-elements-sorted-array
draft: false
date: 2020-09-30T08:55:33.277Z
description: >-
  Problem Statement: Write a function to count number of distinct elements in a
  given sorted array.

  Example: [1, 1, 2, 3, 4, 4, 5] --> 5
category: arrays
tags:
  - easy-coding-problem
---
### Problem: Statement Write a function to count number of distinct elements given in a sorted array.

#### Difficulty level: Easy

#### Test Cases
* [2, 2, 3, 3, 4, 5] --> 4
* [4, 5, 7, 10, 15] --> 5
* [1, 1, 1, 2, 5, 5, 5] --> 3
* [1, 2, 3, 4, 4, 5, 5, 5] --> 5
* None --> 0
***
### Algorithm
* Python *Set* Solution
    * Add elements of array to *set* and return it's length.

* Dictionary Solution
    * Iterate through the given array
    * If element was previously not seen in dictionary than,
        * Add the element to dictionary with *value* of 1.
    * Return the length of dictionary.
* Best Solution 
    * Initialise index at *1*
    * Iterate from 1 to length of given array.
    * If, the element at current iteration *i* is not equal to element at position of *index - 1*, than
        * Overwrite the element at *index* with the element at current iteration *i*
        * increment value of *index* by 1

    * Return *index*
***
#### Time and Space complexity
* Time complexity of all solutions: O(n)
* Space complexity
    * Set: O(n)
    * Dictionary: O(n)
    * Best solution: O(1)
***
### Code

```python

class ValidElements(object):
    def validElements(self, arr):
        if not arr:
            return 0
        return len(set(arr))

    def validElements2(self, arr):
        if not arr:
            return 0
        seen = {}
        for entry in arr:
            if entry not in seen:
                seen[entry] = 1
        return len(seen)

    def validElements3(self, arr):
        if not arr:
            return 0
        index = 1
        for i in range(1, len(arr)):
            if arr[index - 1] != arr[i]:
                arr[index] = arr[i]
                index += 1
        print(arr)
        return index

```

### Unit Test
```python

import unittest
from validElements import ValidElements


class TestValidElements(unittest.TestCase):
    def testValidElements(self, func):
        self.assertEqual(func([2, 2, 3, 3, 4, 5]), 4)
        self.assertEqual(func([1, 2, 3, 4, 4, 5, 5, 5]), 5)
        self.assertEqual(func([1, 1, 1, 2, 5, 5, 5]), 3)
        print("All test cases passed")


def main():
    test = TestValidElements()
    elements = ValidElements()
    test.testValidElements(elements.validElements)
    test.testValidElements(elements.validElements2)
    test.testValidElements(elements.validElements3)


if __name__ == "__main__":
    main()

```

[Github solution](https://github.com/Codewithml/coding-problems-solutons/tree/master/arrays/valid-elements)

### Happy Coding !