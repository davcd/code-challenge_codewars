
<h1><a href="https://www.codewars.com/kata/52b7ed099cdc285c300001cd">Sum of Intervals</a></h1>
<p>
Write a function called `sumIntervals`/`sum_intervals()` that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

### Intervals

Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: `[1, 5]` is an interval from 1 to 5. The length of this interval is 4.

### Overlapping Intervals

List containing overlapping intervals:

```
[
   [1,4],
   [7, 10],
   [3, 5]
]
```

The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

### Examples:

```javascript
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // =&gt; 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // =&gt; 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // =&gt; 19

```
```java
// null argument
Interval.sumIntervals(null);  // =&gt; 0

// empty intervals
Interval.sumIntervals(new int[][]{});  // =&gt; 0
Interval.sumIntervals(new int[][]{2,2}, {5,5});  // =&gt; 0

// disjoined intervals
Interval.sumIntervals(new int[][]{
  {1,2},{3,5}
});  // =&gt; (2-1) + (5-3) = 3

// overlapping intervals
Interval.sumIntervals(new int[][]{
  {1,4},{3,6},{2,8}
});  // [1,8] =&gt; 7
```
```C#
// empty intervals
Intervals.SumIntervals(new (int, int)[]{ });  // =&gt; 0
Intervals.SumIntervals(new (int, int)[]{ (2, 2), (5, 5)});  // =&gt; 0

// disjoined intervals
Intervals.SumIntervals(new (int, int)[]{
  (1, 2), (3, 5)
});  // =&gt; (2-1) + (5-3) = 3

// overlapping intervals
Intervals.SumIntervals(new (int, int)[]{
  (1, 4), (3, 6), (2, 8)
});  // (1,8) =&gt; 7
```
```cpp
sum_intervals( {
   {1,2},
   {6, 10},
   {11, 15}
} ); // =&gt; 9

sum_intervals( {
   {1,4},
   {7, 10},
   {3, 5}
} ); // =&gt; 7

sum_intervals( {
   {1,5},
   {10, 20},
   {1, 6},
   {16, 19},
   {5, 11}
} ); // =&gt; 19
```
```c
sum_intervals((const struct interval[]){
   {1,2},
   {6, 10},
   {11, 15}
}, 3); /* =&gt; 9 */

sum_intervals((const struct interval[]){
   {1,4},
   {7, 10},
   {3, 5}
}, 3); /* =&gt; 7 */

sum_intervals((const struct interval[]){
   {1,5},
   {10, 20},
   {1, 6},
   {16, 19},
   {5, 11}
}, 5); /* =&gt; 19 */
```
```nasm
v1:
    dd    1,2, \
          6,10, \
          11,15
v2:
    dd    1,4
    dd    7,10
    dd    3,5
v3:
    dd    1,5, 10,20, 1,6, 16,19, 5,11
      
    mov rdi, v1
    mov rsi, 3
    call sumintvls    ; EAX &lt;- 9
    
    mov rdi, v2
    mov rsi, 3
    call sumintvls    ; EAX &lt;- 7
    
    mov rdi, v3
    mov rsi, 5
    call sumintvls    ; EAX &lt;- 19
```
```clojure
(sum-intervals [ [1 5] [10 15] [-1 3] ]) ; =&gt; 11

(sum-intervals [ [1 5] ]) ; =&gt; 4 
```
```typescript
sumOfIntervals([[1, 5], [10, 15], [-1, 3]]) // =&gt; 11

sumOfIntervals([[1, 5]]) // =&gt; 4 
```
```crystal
sum_of_intervals([{1, 5}, {10, 15}, {-1, 3}]) # =&gt; 11

sum_of_intervals([{1, 5}]) # =&gt; 4 
```
```elixir
sum_of_intervals([{1, 5}, {10, 15}, {-1, 3}]) # =&gt; 11

sum_of_intervals([{1, 5}]) # =&gt; 4 
```
```haskell
sumOfIntervals([(1, 5}, (10, 15}, (-1, 3)]) -- =&gt; 11

sumOfIntervals([(1, 5)]) -- =&gt; 4 
```
```julia
sumofintervals([(1, 5}, (10, 15}, (-1, 3)]) # =&gt; 11

sumofintervals([(1, 5)]) # =&gt; 4 
```
```dart
sumOfIntervals([[1, 5], [10, 15], [-1, 3]]) // =&gt; 11

sumOfIntervals([[1, 5]]) // =&gt; 4 
```
```racket
(sum-intervals (list (list -1 21) (list -59 -45))) ;; 36
(sum-intervals (list (list 1 5) (list 10 15) (list -1 3))) ;; 11
(sum-intervals (list (list 1 2) (list 6 10) (list 11 15))) ;; 36
```
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
      <td>4 kyu</td>
      <td> <a href="https://www.codewars.com/users/xDranik">xDranik</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2013-12-23 11:12</td>
      <td>2013-12-26 01:51</td>
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
    <td>Logic</td>
  </tr>
  <tr>
    <td>Aggregations</td>
  </tr>
  <tr>
    <td>Arithmetic</td>
  </tr>
  <tr>
    <td>Mathematics</td>
  </tr>
  <tr>
    <td>Numbers</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Integers</td>
  </tr>
</table>