---
template: post
title: String Reversal
slug: string-reversal
draft: false
date: 2020-09-22T16:19:21.084Z
description: |-
  Problem statement: Write a function to reverse the words in a given string. 
  Also, give the solution without using python in-built functions.
  Example: "how are you john ?" should return  "? john you are how"
category: strings
tags:
  - easy-coding-problem
  - python
---
### Problem Statement: Write a function to reverse the words in a given string. Also give the solution without using the python in-built functions.

#### Difficulty level: Easy

#### Constraints

1. Can we assume the given strings are ASCII?

   * Yes
2. Is this case sensitive?

   * Yes
3. Can we assume this fits memory?

   * Yes
4. Can we use additional data structures?

   * Yes

#### Test Cases

* None --> None
* how are you john ? --> ? john you are how
* 1 --> 1
* it's great to be  --> be to great it's

#### Algorithm

* Solution 1

  * Python strings are immutable so we'll split the string based on space and convert it to a list.
  * Iterate to len(list)/2 time, starting from i = 0

    * swap element at index (i) with element at index (len(list) - 1 -i)
    * increment i
* Solution 2 : Without using split function

  * Initialise an empty `words` list.
  * Iterate through the string indexes till the length of string.

    * if the character in string is not a space, then that is the starting index of a word
    * set `word_start` to index of character

      * iterate again till the length of string until a space is encountered

        * increment `i`
      * when this iteration stops, add from `word_start` till `i` to the words list
    * iterate till the end of string and increment  `i`
  * return the words list.
* Solution 3 : One line python solution (using in-built functions.)

  * Use `split` function to split the string by spaces and the slice operation to reverse the list, lastly return reversed string by using `join` function.

#### Time and Space Complexity

* Solution 1

  * Time complexity: O(n)
  * Space complexity: O(n)
* Solution 2

  * Time complexity: O(n)
  * Space complexity: O(n)

### Code

```python
class SentenceReversal(object):
    def sentenceReversal(self, string):
        if string is None:
            return None
        words = string.split()
        size = len(words)
        for word in range(size//2):
            words[word], words[size - 1 - word] = \
                words[size - 1 - word], words[word]
        return " ".join(words)
      
    def sentenceReversal2(self, string):
        if string is None:
            return None
        words = []
        size = len(string)
        spaces = [' ']
        i = 0

        while i < size:
            if string[i] not in spaces:
                word_start = i
                while i < size and string[i] not in spaces:
                    i += 1
                words.append(string[word_start:i])
            i += 1
        return " ".join(words[::-1])
      
    def sentenceReversal3(self, string):
        if string is None:
            return None
        return " ".join(string.split()[::-1])
```

### Unit Test

```python
import unittest
from sentenceReversal import SentenceReversal


class TestSentenceReversal(unittest.TestCase):
    def testSentenceReversal(self, func):
        self.assertEqual(func(None), None)
        self.assertEqual(func('   space before plague'), 'plague before space')
        self.assertEqual(func('space after    '), 'after space')
        self.assertEqual(func(' Hello John  how are you   ?'),
                         '? you are how John Hello')
        self.assertEqual(func('1'), '1')
        print("ALL TEST CASES PASSED")


def main():
    test = TestSentenceReversal()
    sent = SentenceReversal()
    test.testSentenceReversal(sent.sentenceReversal)
    test.testSentenceReversal(sent.sentenceReversal2)


if __name__ == "__main__":
    main()
```

[Github solution](https://github.com/Codewithml/coding-problems-solutons/tree/master/arrays/sentence-reversal)


#### Happy Coding !