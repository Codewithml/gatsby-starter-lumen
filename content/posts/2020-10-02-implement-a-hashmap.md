---
template: post
title: "Implement a Hashmap "
slug: hashmap-implementation
draft: true
date: 2020-10-02T16:51:10.743Z
description: "Problem Statement: Implement Hash Map with get, set and remove methods."
category: arrays
tags:
  - arrays
---
### Problem Statement: Implement Hash Map with get, set and remove methods.
#### Difficulty level: Easy

#### Test Cases
1. Get
    * Get - key exists --> value
    * Get - key doesn't exist --> Keyerror 
2. Set
    * Set - key exists --> Overwrite value
    * Set - key doesn't exist --> new key, value
3. Remove
    * Remove - key exists --> delete key, value
    * Remove - key doesn't exist --> Keyerror

### Algorithm
1. Hash Function
    * Return key *modulo(%)* table size

2. Get Function
    * Get *hashIndex* for lookup
    * If key exists, return the value
    * Else, *keyerror*
3. Set Function
    * Get *hashIndex* for lookup
    * If key exists, overwrite the value
    * Else, add value
4. Remove Function
    * Get *hashIndex* for lookup
    * If key exists, delete the entry from the table
    * Else, *keyerror*

### Time and Space Complexity
1. Hash Function
    * Time complexity: O(1)
    * Space complexity: O(1)
2. Get Function
    * Time complexity: O(1) average and best case, O(n) worst case
    * Space complexity: O(1)
3. Set Function
    * Time complexity: O(1) average and best case, O(n) worst case
    * Space complexity: O(1)
4. Remove Function
    * Time complexity: O(1) average and best case, O(n) worst case
    * Space complexity: O(1)

***

### Code
```python
class Item(object):
    def __init__(self, key, value):
        self.key = key
        self.value = value


class HashTable(object):
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(self.size)]

    def hashFunction(self, key):
        return key % self.size

    def set(self, key, value):
        hashIndex = self.hashFunction(key)
        for item in self.table[hashIndex]:
            if item.key == key:
                item.value = value
                return
        self.table[hashIndex].append(Item(key, value))

    def get(self, key):
        hashIndex = self.hashFunction(key)
        for item in self.table[hashIndex]:
            if item.key == key:
                return item.value
        raise KeyError('Key not found')

    def remove(self, key):
        hashIndex = self.hashFunction(key)
        for index, item in enumerate(self.table[hashIndex]):
            if item.key == key:
                del self.table[hashIndex][index]
                return
        raise KeyError('Key not found')
```

### Unit Test
```python
import unittest
from hashmap import HashTable


class TestHashMap(unittest.TestCase):

    def test_end_to_end(self):
        hash_table = HashTable(10)

        print("Test: get on an empty hash table index")
        self.assertRaises(KeyError, hash_table.get, 0)

        print("Test: set on an empty hash table index")
        hash_table.set(0, 'first')
        self.assertEqual(hash_table.get(0), 'first')
        hash_table.set(1, 'second')
        self.assertEqual(hash_table.get(1), 'second')

        print("Test: set on a non empty hash table index")
        hash_table.set(10, 'third')
        self.assertEqual(hash_table.get(0), 'first')
        self.assertEqual(hash_table.get(10), 'third')

        print("Test: set on a key that already exists")
        hash_table.set(10, 'fourth')
        self.assertEqual(hash_table.get(0), 'first')
        self.assertEqual(hash_table.get(10), 'fourth')

        print("Test: remove on a key that already exists")
        hash_table.remove(10)
        self.assertEqual(hash_table.get(0), 'first')
        self.assertRaises(KeyError, hash_table.get, 10)

        print("Test: remove on a key that doesn't exist")
        self.assertRaises(KeyError, hash_table.remove, -1)

        print('Success: test_end_to_end')


def main():
    test = TestHashMap()
    test.test_end_to_end()


if __name__ == "__main__":
    main()
```

[Github repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/arrays/hashmap)

### Happy Coding !!