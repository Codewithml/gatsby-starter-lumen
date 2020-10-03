---
template: post
title: Find Missing Element
slug: missing-element
draft: false
date: 2020-10-02T08:20:29.422Z
description: >-
  Problem Statement: Write a function to find the missing element from given two
  arrays.

  Example: [1, 2, 4, 7, 9], [7, 9, 4, 2] --> 1.
category: arrays
tags:
  - easy-coding-problem
---

### Problem Statement: Write a function to find the missing element from given two arrays.
#### Difficulty level: Easy
#### Test Cases:
* [1, 2, 3, 4, 5, 6, 7],[3, 7, 2, 1, 4, 6] --> 5
* [5, 7, 7, 5, 7], [7, 7 ,5, 5] --> 7
* [9, 8, 7, 6, 5, 4, 3, 2, 1],[9, 8, 7, 5, 4, 3, 2, 1] --> 6
* [1, 2, 4, 7, 9], [7, 9, 4, 2] --> 1

*There are number of ways this problem can be solved, below are 4 possible solutions*

### Algorithm
1. Dictionary Method
    * Initialise a dictionary.
    * Iterate through the first array, 
    * If element at current iteration exists in dictionary,
        * Increment it's value by 1.
    * Else,
        * Add the element as key and value as 1 in dictionary
    * Iterate through the second array,
    * If element at current iteration exists in dictionary,
        * Decrement it's value by 1.
    * Else,
        * Add the element as key and value as 1 in dictionary.
   * for every element in dictionary
        * if value of the element is not 0
            * return the element
   

2. Exclusive OR (XOR) Method
    * Initialise variable *result* to 0
    * Combine both the arrays.
    * Iterate through the combined array
    * Do *XOR* operation of every element with result
    * Return the result, which will be the missing element
3. Sort Method
    * Sort both the given arrays.
    * Iterate over both the arrays simultaneously.
    * At a given iteration if value of both the iterators are different, 
        * return the element from first array, as it is the missing element.

4. Sum Method
    * Calculate the sum of all the elements in both the arrays.
    * Subtract the sum of second array from the first array.
    * The result will be the missing element.

***
### Time and Space complexity
1. Dictionary Method
    * Time Complexity: O(n)
    * Space Complexity: O(n)
2. XOR Method
    * Time Complexity: O(n)
    * Space Complexity: O(n)
3. Sort Method
    * Time Complexity: O(nlogn)
    * Space Complexity: O(n)
4. Sum Method
    * Time Complexity: O(n)
    * Space Complexity: O(1)

### Code
```python
class MissingElement(object):
    def missingElement(self, arr1, arr2):
        count = {}
        for element in arr1:
            if element in count:
                count[element] += 1
            else:
                count[element] = 1
        for element in arr2:
            if element in count:
                count[element] -= 1
            else:
                count[element] = 1
        for k in count:
            if count[k] != 0:
                return k

    def missingElement2(self, arr1, arr2):
        result = 0
        for element in arr1 + arr2:
            result ^= element
        return result

    def missingElement3(self, arr1, arr2):
        arr1.sort()
        arr2.sort()
        for ele1, ele2 in zip(arr1, arr2):
            if ele1 != ele2:
                return ele1
        return arr1[-1]

    def missingElement4(self, arr1, arr2):
        return abs(sum(arr1) - sum(arr2))
```

### Unit Test
```python
import unittest
from missingElement import MissingElement


class TestMisssingElement(unittest.TestCase):
    def test_ele(self, sol):
        self.assertEqual(sol([5, 5, 7, 7], [5, 7, 7]), 5)
        self.assertEqual(sol([1, 2, 3, 4, 5, 6, 7],
                             [3, 7, 2, 1, 4, 6]), 5)
        self.assertEqual(sol([9, 8, 7, 6, 5, 4, 3, 2, 1],
                             [9, 8, 7, 5, 4, 3, 2, 1]), 6)
        print("All test cases passed")


def main():
    test = TestMisssingElement()
    element = MissingElement()
    test.test_ele(element.missingElement)
    test.test_ele(element.missingElement2)
    test.test_ele(element.missingElement3)
    test.test_ele(element.missingElement4)


if __name__ == "__main__":
    main()
```

[Github repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/arrays/missing-element)

### Happy Coding !

