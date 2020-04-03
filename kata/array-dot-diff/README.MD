
<h1><a href="https://www.codewars.com/kata/523f5d21c841566fde000009">Array.diff</a></h1>
<p>
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list `a`, which are present in list `b`.

```c
array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
```
```javascript
arrayDiff([1,2],[1]) == [2]
```
```ruby
array_diff([1,2],[1]) == [2]
```
```python
array_diff([1,2],[1]) == [2]
```
```coffeescript
arrayDiff([1,2],[1]) == [2]
```
```haskell
difference [1,2] [1] == [2]
```
```csharp
Kata.ArrayDiff(new int[] {1, 2}, new int[] {1}) =&gt; new int[] {2}
```
```fsharp
arrayDiff [|1|] [|1; 2|] = [|2|]
```
```rust
array_diff(vec![1,2], vec![1]) == vec![2]
```
```clojure
(= (array-diff [1 2] [1]) [2])
```
```groovy
Kata.arrayDiff([1,2],[1]) == [2]
```
```julia
arraydiff([1,2],[1]) == [2]
```
```nim
arrayDiff(@[1,2],@[1]) == @[2]
```
```php
arrayDiff([1,2],[1]) == [2]
```
```r
array_diff(c(1, 2), 1) == 2
```
```prolog
array_diff([1, 2], [1], [2]). % Result = [2]
```

If a value is present in `b`, all of its occurrences must be removed from the other:

```c
array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
```
```javascript
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```
```ruby
array_diff([1,2],[1]) == [2]
```
```python
array_diff([1,2,2,2,3],[2]) == [1,3]
```
```coffeescript
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```
```haskell
difference [1,2,2,2,3] [2] == [1,3]
```
```csharp
Kata.ArrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2}) =&gt; new int[] {1, 3}
```
```fsharp
arrayDiff [|2|] [|1; 2; 2; 2; 3|] = [|1; 3|]
```
```rust
array_diff(vec![1,2,2,2,3], vec![2]) == vec![1,3]
```
```clojure
(= (array-diff [1,2,2,2,3] [2]) [1,3])
```
```groovy
Kata.arrayDiff([1,2,2,2,3],[2]) == [1,3]
```
```julia
arraydiff([1,2,2,2,3],[2]) == [1,3]
```
```nim
arrayDiff(@[1,2,2,2,3],@[2]) == @[1,3]
```
```php
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```
```r
array_diff(c(1, 2, 2, 2, 3), 2) == c(1, 3)
```
```prolog
array_diff([1, 2, 2, 2, 3], [2], [1, 3]). % Result = [1, 3]
```
~~~ if:c
NOTE: In C, assign return array length to pointer *z
~~~

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
      <td>6 kyu</td>
      <td> <a href="https://www.codewars.com/users/marcinbunsch">marcinbunsch</a></td>
      <td>-</td>
      <td>2013-09-22 23:34</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
<h3>Related topics</h3>
<table>
  <tbody></tbody>
  <tr>
    <td>Fundamentals</td>
  </tr>
  <tr>
    <td>Arrays</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
</table>