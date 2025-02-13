# 4. Insertion Sort


Implement a function that performs an insertion sort. The function should take in an array of integers and return an array with the integers sorted in ascending order. The input array is modified.

Insertion Sort expected input and output

Examples
insertionSort([9, 3, 6, 2, 1, 11]); // [1, 2, 3, 6, 9, 11]
insertionSort([12, 16, 14, 1, 2, 3]); // [1, 2, 3, 12, 14, 16]
Recap
Insertion sort is a simple sorting algorithm which compares elements one at a time with preceding element(s), "inserting" them into the correct position, and progressively building up a sorted array.

The algorithm starts by examining the 2nd element of the input array (the "current" element), and compares it with its preceding element (i.e. the 1st element). If the current element is smaller, we swap their places (by copy). The result is that the first 2 elements are sorted correctly in ascending order.

Illustration of first iteration of insertion sort algorithm

The algorithm then moves onto the next element in the input list and compares it with preceding elements (already sorted in ascending order) to insert it into the right position. Since preceding elements are already sorted, the algorithm only needs to compare the current element with every preceding element until the current element is not smaller than that element. It's then inserted into the right position in the list and the algorithm moves onto the next element in the input list.

For e.g., continuing from the example above, the algorithm will move onto the 3rd element as the "current" element and compare it with the preceding sorted list. By iterating backwards through the preceding list, the current element is compared progressively with the 2nd element, followed by the 1st element, until it is no longer smaller than that element. It will then insert itself into that position. If its smaller than both the 2nd and 1st element, it is simply inserted at the start of the list as the smallest element.

Illustration of subsequent iteration of insertion sort algorithm

