# 2. Stack

Implement a stack data structure in JavaScript that contains the following operations:

Constructor
Stack
Creates an instance of a Stack class that doesn't contain any items. The constructor not accept any arguments.

METHODS


push
Pushes an item onto the top of the stack.

Arguments
{*} item: The item to be pushed onto the stack.
Returns
{number}: The new length of the stack.
Time Complexity
O(1)
pop
Remove an item at the top of the stack.

Returns
{*} item: The item at the top of the stack if it is not empty, undefined otherwise.
Time Complexity
O(1)
isEmpty
Determines if the stack is empty.

Returns
{boolean}: true if the stack has no items, false otherwise.
Time Complexity
O(1)
peek
Returns the item at the top of the stack without removing it from the stack.

Returns
{*}: The item at the top of the stack if it is not empty, undefined otherwise.
Time Complexity
O(1)
length
Returns the number of items in the stack.

Returns
{number}: The number of items in the stack.
Time Complexity
O(1)




Examples:-

const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false
