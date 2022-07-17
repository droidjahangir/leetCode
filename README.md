## Guidelines
![dataStructure and algorithms](./images/datastructure-algorithms.png)
[click here](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)  to see live version

Best site for visualize data structure and algorithms : [visualAlgo](https://visualgo.net/en/list)

##Big O Cheat Sheet:
#### -Big Os-
`O(1)` Constant- no loops

`O(log N)` Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)

`O(n)` Linear- for loops, while loops through n items

`O(n log(n))` Log Liniear- usually sorting operations

`O(n^2)` Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops

`O(2^n)` Exponential- recursive algorithms that solves a problem of size N

`O(n!)` Factorial- you are adding a loop for every element

- Iterating through half a collection is still O(n)
- Two separate collections: O(a * b)

**What can cause time in a function?**

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

**-Rule Book-**

- Rule 1: Always worst Case
- Rule 2: Remove Constants
- Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)

`+` for steps in order

`*` for nested steps


- Rule 4: Drop Non-dominant terms

**-What causes Space complexity?-**

- Variables
- Data Structures
- Function Call
- Allocations

### Singly Linked List 
![singly linked list](./images/singly-linked-list.png)

### Doubly linked list 
![doubly linked list](./images/doubly-linked-list.png)

- singly linked list is useful for insertion and deletion, because singly linked list need less memory compared to doubly linked list. 

- doubly linked list is useful for traverse and searching.  

### stack
![stack](./images/stack.png)
pick() method just pick top element.

**Array will be suitable for stack implementation**

### queue
![queue](./images/queue.png)
here pick() method just pick first element. 

**Linked list will be the best suitable for queue implementation, because when we enqueue or dequeue an element from an array,
 then all element should be shifted from its original position. It will cost O(n) time complexity on the other hand Linked list will cost O(1) time complexity, but it will take some memory.**
 
 ### Tree
 ![tree](./images/tree.png)
 In binary search tree values which are less than root node exist in left tree and bigger values are exist in right. 
 
 **Balanced binary search tree**
 ![Balanced binary search tree](./images/balanced-binary-search-tree.png)
 binary search trees value are already in sorted order.
 
 **Unbalanced binary search tree**
 ![Unbalanced binary search tree](./images/unbalanced-tree.png)
 Balanced binary search tree gives us O(log N) complexity but unbalanced tree gives us O(n) time complexity but some algorithms help us to reduce complexity.
 
 AVL tree, Red-Black tree, B-tree algorithms turned unbalanced to balanced tree when insertion, then complexity reduced to O(log N)
 
 **Big O complexity chart**
 ![Big O complexity chart](./images/big-o-complexity-chart.png)
 
**Time complexity chart**
![Time complexity chart](./images/time-complexity-chart.png)

**Binary Heep**
room value is greater than total of child element value or vise versa. Insertion will happen from left to right. If insertion value break the rule then rearrange this heep. 
![Binary heep](./images/heep.png)

**priority queue**
queue works like first in first out, In priority queue each node has some weight, which will prioritize to out, like if some VIP comes in a line then he/she will be out first. 
![priority queue](./images/priority-queue.png)

**trie**
tries works in google search. trie help us find a word or part of a word exist in body of text. 
![trie](./images/trie.png)
 
### Graph
**All those are graph**
![graph](./images/graph.png)

**graph edge vertex**
![edge vertex](./images/graph-edge-vertex.png)

**graph weighted**
![weighted and unweighted graph](./images/graph-weighted.png)

**directed graph**
![directed graph](./images/graph-directed.png)

**cyclic graph**
![cyclic graph](./images/graph-cyclic.png) 

**graph visual details**
![graph visual details](./images/graph-visual.png)

**graph code**
![graph code](./images/graph-code.png)

**recursion**
![uses of recursion](./images/recursion.png)

**fibonacci**
![fibonacci](./images/fibonacci.png)

**all algorithms**
![all algorithms and data structure](./images/datastructure.png)