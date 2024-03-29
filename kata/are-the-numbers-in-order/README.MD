
<h1><a href="https://www.codewars.com/kata/56b7f2f3f18876033f000307">Are the numbers in order?</a></h1>
<p>
# Are the numbers in order?

In this Kata, your function receives an array of integers as input.  Your task is to determine whether the numbers are in ascending order.  An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.  An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

For example:

```java
isAscOrder(new int[]{1,2,4,7,19}) == true
isAscOrder(new int[]{1,2,3,4,5}) == true
isAscOrder(new int[]{1,6,10,18,2,4,20}) == false
isAscOrder(new int[]{9,8,7,6,5,4,3,2,1}) == false // numbers are in DESCENDING order
```
```c
in_asc_order({1,2,4,7,19}, 5); // returns true
in_asc_order({1,2,3,4,5}, 5); // returns true
in_asc_order({1,6,10,18,2,4,20}, 7); // returns false
in_asc_order({9,8,7,6,5,4,3,2,1}, 9); // returns false because the numbers are in DESCENDING order
```
```js
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
```
```cpp
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
```
```csharp
Kata.IsAscOrder(new int[]{1,2,4,7,19}) == true
Kata.IsAscOrder(new int[]{1,2,3,4,5}) == true
Kata.IsAscOrder(new int[]{1,6,10,18,2,4,20}) == false
Kata.IsAscOrder(new int[]{9,8,7,6,5,4,3,2,1}) == false // numbers are in DESCENDING order
```
```python
in_asc_order([1,2,4,7,19]) # returns True
in_asc_order([1,2,3,4,5]); // returns True
in_asc_order([1,6,10,18,2,4,20]) # returns False
in_asc_order([9,8,7,6,5,4,3,2,1]) # returns False because the numbers are in DESCENDING order
```
```php
in_asc_order([1, 2, 4, 7, 19]); // true
in_asc_order([1, 2, 3, 4, 5]); // true
in_asc_order([1, 6, 10, 18, 2, 4, 20]); // false
in_asc_order([9, 8, 7, 6, 5, 4, 3, 2, 1]); // false (NOTE: because the numbers are in DESCENDING order, not ascending order)
```
```haskell
isAscOrder [1, 2, 4, 7, 19] -- True
isAscOrder [1, 2, 3, 4, 5] -- True
isAscOrder [1, 6, 10, 18, 2, 4, 20] -- False
isAscOrder [9, 8, 7, 6, 5, 4, 3, 2, 1] -- False (NOTE: because the numbers are in DESCENDING order, not ascending order)
```
```ruby
is_asc_order([1,2,4,7,19]) # returns True
is_asc_order([1,2,3,4,5]); // returns True
is_asc_order([1,6,10,18,2,4,20]) # returns False
is_asc_order([9,8,7,6,5,4,3,2,1]) # returns False because the numbers are in DESCENDING order
```
```crystal
is_asc_order([1,2,4,7,19]) # returns True
is_asc_order([1,2,3,4,5]); // returns True
is_asc_order([1,6,10,18,2,4,20]) # returns False
is_asc_order([9,8,7,6,5,4,3,2,1]) # returns False because the numbers are in DESCENDING order
```
```go
InAscOrder([]int{1, 2, 4, 7, 19}) # returns True
InAscOrder([]int{1, 2, 3, 4, 5}) // returns True
InAscOrder([]int{1, 6, 10, 18, 2, 4, 20}) # returns False
InAscOrder([]int{9, 8, 7, 6, 5, 4, 3, 2, 1}) # returns False because the numbers are in DESCENDING order
```
```nasm
in_asc_order({1,2,4,7,19}, 5); // =&gt; 1
in_asc_order({1,2,3,4,5}, 5); // =&gt; 1
in_asc_order({1,6,10,18,2,4,20}, 7); // =&gt; 0
in_asc_order({9,8,7,6,5,4,3,2,1}, 9); // =&gt; 0
```
```factor
{ 1 2 4 7 19 } in-asc-order? ! returns t
{ 1 2 3 4 5 } in-asc-order? ! returns t
{ 1 6 10 18 2 4 20 } in-asc-order? ! returns f
{ 9 8 7 6 5 4 3 2 1 } in-asc-order? ! returns f because the numbers are in DESCENDING order
```

~~~if:nasm
**10/08/2018: Codewars doesn't support NASM code blocks in the Kata Description yet - please refer to the Sample Test Cases instead.**
~~~

*N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.*

</p>
<h2>Kata information</h2>
<table>
  <thead>
    <tr>
      <th>Difficulty</th>
      <th>Author</th>
      <th>Approver</th>
      <th>Published date</th>
      <th>Approved date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7 kyu</td>
      <td> <a href="https://www.codewars.com/users/donaldsebleung">donaldsebleung</a></td>
      <td> <a href="https://www.codewars.com/users/raulbc777">raulbc777</a></td>
      <td>2016-02-08 03:29</td>
      <td>2016-02-09 08:00</td>
    </tr>
  </tbody>
</table>
<h3>Related topics</h3>
<table>
  <tbody></tbody>
  <tr>
    <td>Algorithms</td>
  </tr>
  <tr>
    <td>Fundamentals</td>
  </tr>
  <tr>
    <td>Mathematics</td>
  </tr>
  <tr>
    <td>Logic</td>
  </tr>
  <tr>
    <td>Numbers</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Control Flow</td>
  </tr>
  <tr>
    <td>Basic Language Features</td>
  </tr>
  <tr>
    <td>Optimization</td>
  </tr>
</table>