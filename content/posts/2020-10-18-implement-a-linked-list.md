---
template: post
title: Implement a Linked List
slug: linked-list
draft: false
date: 2020-10-18T07:08:40.548Z
description: "Problem statement: Implement a Linked List with it's functions
  like inserting an element at start of the linked list and inserting at the end
  of linked list, searching an element in the list and removing an element from
  the list."
category: data-structures
tags:
  - linked-list
---
Problem statement: Implement a Linked List with it's functions like inserting an element at start of the linked list and inserting at the end of linked list, searching an element in the list and removing an element from the list.
*** 
> What is a Linked List?
It's a linear data structure, but the elements are not stored in next to each other or in a sequence, but rather they're linked using pointers.

Test Cases:
1. Insert at start
    * Insert a None.
    * Insert at start in an empty linked list.
    * Insert at start in a non-empty linked list.

2. Insert at end.
    * Insert a None.
    * Insert at end in an empty linked list.
    * Insert at end in a non-empty linked list.

3. Search
    * Search for element present in linked list.
    * Search for element in an empty linked list.
    * Search for element not present in linked list.
    * Search for None.

4. Remove
    * Remove element from an empty linked list.
    * Remove element from a non-empty linked list.
    * Remove element not present in linked list.
    * Remove a None.
5. Length
    * Print length of the linked list.

Algorithm:

1. Insert to start
    * If data is None 
        * return
    * Create a new node with data
    * Set the next of new node to head
    * Set the head to the new node
2. Insert to end
    * If data is None
        * return
    * Create a new node with data
    * If linked list is empty,
        * set the head to the node
    * Else,
        * iterate through the end of list
        * Set the next of last node to new node.
3. Search
    * Initialise a current pointer to head
    * Iterate through the linked list
        * If value is matched, return the value
        * Else, move onto the next node
    
4. Remove
    * Initialise a current pointer, pointing to node next to head
    * Initialise a previous pointer, pointing to head
    * Iterate through the linked list,
        * If value is found, 
            * Set the previous node, next pointer to current node next
        * Else, move onto the next node
    
5. Length
    * Initialise a counter
    * Iterate through the entire linked list
    * For each node in the list,
        * increase the counter
    * Return the counter



Time Complexity:
1. Insert to start
    * Time complexity: O(1)
    * Space complexity: O(1)
2. Insert to end
    * Time complexity: O(n)
    * Space complexity: O(1)
3. Search
    * Time complexity: O(n)
    * Space complexity: O(1)
4. Remove
    * Time complexity: O(n)
    * Space complexity: O(1)
5. Length
    * Time complexity: O(n)
    * Space complexity: O(1)

***

Code
```python
class Node(object):
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    def __len__(self):
        current = self.head
        counter = 0
        while current is not None:
            counter += 1
            current = current.next
        return counter

    def insertStart(self, data):
        if data is None:
            return None
        node = Node(data, self.head)
        self.head = node
        return node

    def insertEnd(self, data):
        if data is None:
            return None
        node = Node(data)
        if self.head is None:
            self.head = node
            return node
        curr_node = self.head
        while curr_node.next is not None:
            curr_node = curr_node.next
        curr_node.next = node
        return node

    def search(self, data):
        if data is None:
            return None
        curr_node = self.head
        while curr_node is not None:
            if curr_node.data == data:
                return curr_node.data
            curr_node = curr_node.next
        return None

    def remove(self, data):
        if data is None:
            return None
        if self.head is None:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        prev_node = self.head
        curr_node = self.head.next
        while curr_node is not None:
            if curr_node.data == data:
                prev_node.next = curr_node.next
                return
            prev_node = curr_node
            curr_node = curr_node.next

    def remove2(self, data):
        if data is None:
            return None
        if self.head is None:
            return None
        curr_node = self.head
        if curr_node.data == data:
            curr_node = curr_node.next
            return
        while curr_node.next is not None:
            if curr_node.next.data == data:
                curr_node.next = curr_node.next.next
                return
            curr_node = curr_node.next

    def printList(self):
        curr_node = self.head
        while curr_node is not None:
            print(curr_node.data)
            curr_node = curr_node.next

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
from linkedList import LinkedList, Node


class TestLinkedList(unittest.TestCase):

    def testInsertStart(self):
        print('Test: insertStart on an empty linked list')
        linkedList = LinkedList(None)
        linkedList.insertStart(1)
        self.assertEqual(linkedList.getData(), [1])

        print('Test: insertStart on a None')
        linkedList.insertStart(None)
        self.assertEqual(linkedList.getData(), [1])

        print('Test: insertStart on a non-empty linked list')
        linkedList.insertStart(11)
        linkedList.insertStart('letters')
        self.assertEqual(linkedList.getData(), ['letters', 11, 1])

        print('Success: testInsertStart')

    def testInsertEnd(self):
        print('Test: insertLast on an empty linked list')
        linkedList = LinkedList(None)
        linkedList.insertEnd(2)
        self.assertEqual(linkedList.getData(), [2])

        print('Test: insertEnd a None')
        linkedList.insertEnd(None)
        self.assertEqual(linkedList.getData(), [2])

        print('Test: insertEnd on a non-empty linked list')
        linkedList.insertEnd('4')
        linkedList.insertEnd(6)
        self.assertEqual(linkedList.getData(), [2, '4', 6])

        print('Success: insertEnd')

    def testSearch(self):
        print('Test: Search on an empty linked list')
        linkedList = LinkedList(None)
        element = linkedList.search(1)
        self.assertEqual(element, None)

        print('Test: Search on a None')
        linkedList1 = LinkedList(10)
        element = linkedList1.search(None)
        self.assertEqual(element, None)

        print('Test: Search on a non-empty linked list')
        head = Node(10)
        linkedList2 = LinkedList(head)
        linkedList2.insertStart(9)
        linkedList2.insertStart(8)
        linkedList2.insertStart(7)
        linkedList2.insertEnd(11)
        element = linkedList2.search(11)
        element2 = linkedList2.search('aaa')
        self.assertEqual(element, 11)
        self.assertEqual(element2, None)
        print('Success: testSearch')

    def testRemove(self):
        print('Test: remove element from an empty linked list')
        linkedList = LinkedList(None)
        linkedList.remove(2)
        self.assertEqual(linkedList.getData(), [])

        print('Test: remove a None')
        head = Node(1)
        linkedList = LinkedList(head)
        linkedList.remove(None)
        self.assertEqual(linkedList.getData(), [1])

        print('Test: remove element from a non-empty linked list')
        head = Node(1)
        linkedList = LinkedList(head)
        linkedList.insertEnd(2)
        linkedList.insertEnd(3)
        linkedList.insertStart(0)
        linkedList.remove(0)
        linkedList.remove2(2)
        self.assertEqual(linkedList.getData(), [1, 3])
        linkedList.remove('abc')
        self.assertEqual(linkedList.getData(), [1, 3])

        print('Success: testRemove')

    def testLen(self):
        print('Test length of thean empty linked list')
        linkedList = LinkedList(None)
        self.assertEqual(len(linkedList), 0)

        print('Test length of non empty linked list')
        head = Node(0)
        linkedList = LinkedList(head)
        linkedList.insertStart(1)
        linkedList.insertStart(2)
        linkedList.insertEnd(3)
        self.assertEqual(len(linkedList), 4)

        print('Success: testLen')


def main():
    test = TestLinkedList()
    test.testInsertStart()
    test.testInsertEnd()
    test.testSearch()
    test.testRemove()
    test.testLen()


if __name__ == "__main__":
    main()
```


[Github solution repo](https://github.com/Codewithml/coding-problems-solutions/tree/master/linked-lists/linked-list)

Happy coding :star: