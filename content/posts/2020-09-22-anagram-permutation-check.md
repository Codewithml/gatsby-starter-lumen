---
template: post
title: Anagram/Permutation check
slug: anagram-check
draft: false
date: 2020-09-22T06:53:06.952Z
description: >-
  Problem statement: Write a function to check whether given two strings are
  anagrams/permutation. An anagram occurs when two strings can be written using
  the exact same letters. 

  Example : "abcabc" and  "aabbcc" are anagrams.
category: arrays
tags:
  - python
  - easy-coding-problem
---


### Problem statement: Write a function to check whether given two strings are anagrams/permutation.

#### Difficulty level : Easy

#### Constraints

1. Can we assume the given strings are ASCII?

   * Yes
2. Is this case sensitive?

   * No
3. Can we assume this fits memory?

   * Yes
4. Can we use additional data structures?

   * Yes

#### Test Cases

* None --> None
* "aabbcc", "abcabc" --> True
* "god", "dog" --> True
* "12 3", "1 2" --> False
* "hey     man", "    man h  ey "  --> True

   
#### Algorithm
1. Count method
    * Initialise dictionary
    * for each char in string1
        * if char exists in dict
           * increment it's value by 1
        * else
           * add char to dictionary as key, and set it's value as 1

    * for each char in string2
        * if char exists in dictionary
            * decrement it's value by 1
        * else
            * add char to dictionary as key, and set it's value as 1

    * for every item in dictionary
        * if value of the item is not 0
            * return false
        * else
            * return true
2. Sort method
    * Replace the spaces in string and lower it.
    * sort both the string
    * if both strings are equal
        * return true
    * else
        * false

#### Time and Space complexity
1. Count method
    * Time complexity: O(n + n + n) = O(n)
    * Space complexity: O(n)
2. Sort method
    * Time complexity: O(n * log n)
    * Space complexity: O(n)
 

### Code

```python
class Anagram(object):

    def anagram(self, string1, string2):
        if string1 is None or string2 is None:
            return None
        string1 = string1.replace(" ", "").lower()
        string2 = string2.replace(" ", "").lower()
        count = {}
        for let in string1:
            if let in count:
                count[let] += 1
            else:
                count[let] = 1
        for let in string2:
            if let in count:
                count[let] -= 1
            else:
                count[let] = 1
        for k in count:
            if count[k] != 0:
                return False
        return True

    def anagram2(self, string1, string2):
        if string1 is None or string2 is None:
            return None
        string1 = string1.replace(" ", "").lower()
        string2 = string2.replace(" ", "").lower()
        return sorted(string1) == sorted(string2)
```

### Unit Test

```python
import unittest
from anagram import Anagram


class TestAnagram(unittest.TestCase):

    def test_anagram(self, sol):
        self.assertEqual(sol(None, None), None)
        self.assertEqual(sol('go go go', 'gggooo'), True)
        self.assertEqual(sol('abc', 'cba'), True)
        self.assertEqual(sol('hi man', 'hi     man'), True)
        self.assertEqual(sol('aabbcc', 'aabbc'), False)
        self.assertEqual(sol('123', '1 2'), False)
        print("ALL TEST CASES PASSED")


def main():
    test = TestAnagram()
    anagram = Anagram()
    test.test_anagram(anagram.anagram)
    test.test_anagram(anagram.anagram2)


if __name__ == "__main__":
    main()
```