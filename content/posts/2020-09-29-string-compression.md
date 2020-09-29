---
template: post
title: String Compression
slug: compress-string
draft: false
date: 2020-09-27T04:39:22.489Z
description: >
  Problem statement : Write a function to Compress a given string. Only return
  the compressed string if it saves space.

  Example:  'BBBAACCCCDD' --> 'B3A2C4D2'.
category: strings
tags:
  - easy-coding-problem
  - python
---
### Problem statement : Write a function to Compress a given string. Only return the compressed string if it saves space.

#### Difficulty level: Easy
***
#### Test Cases
* 'AAABAACCDDDD' ---> 'A3BA2C2D4'
* 'BAAACCDDDD' ---> 'BA3C2D4'
* 'AABBCC' --> 'AABBCC'
* 'BBBAACCCCDD' --> 'B3A2C4D2'

***
#### Algorithm
* Setup a pointer at first character of string, initialise an empty string and a counter.
* Iterate through the string and check if character is equal to the first character of the string.
    * if both are equal increment counter.
* Else,
    * add the first character and it's count to result string.
        * if count is greater than 1 then only add count to the result string.
        * Else, add an empty string to the result string.
    * now, the first character will be the current character.
    * reset the counter value to 1.

* Add the last character and it's count to result string.
* Return the resultant compressed string if it's length is less than the given string, else return the given string.

#### Time and Space Complexity
* Time complexity: O(n)
* Space complexity: O(n)

***

### Code

```python
class CompressString(object):
    def compress(self, input):
        if input is None or not input:
            return input
        result = ''
        count = 0
        prev_char = input[0]
        for char in input:
            if char == prev_char:
                count += 1
            else:
                result += prev_char + (str(count) if count > 1 else '')
                prev_char = char
                count = 1
        result += prev_char + (str(count) if count > 1 else '')
        return result if len(result) < len(input) else input
```

### Test
```python
import unittest
from compressString import CompressString


class TestCompress(unittest.TestCase):

    def testCompress(self, func):
        self.assertEqual(func(None), None)
        self.assertEqual(func(''), '')
        self.assertEqual(func('AABBCC'), 'AABBCC')
        self.assertEqual(func('AAABCCDDDDE'), 'A3BC2D4E')
        self.assertEqual(func('BAAACCDDDD'), 'BA3C2D4')
        self.assertEqual(func('AAABAACCDDDD'), 'A3BA2C2D4')
        print('Success: testCompress')


def main():
    test = TestCompress()
    compress_string = CompressString()
    test.testCompress(compress_string.compress)


if __name__ == '__main__':
    main()
```
[Github solution](https://github.com/Codewithml/coding-problems-solutons/tree/master/arrays/compress-string)

### Happy Coding !
