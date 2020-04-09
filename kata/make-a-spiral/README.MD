
<h1><a href="https://www.codewars.com/kata/534e01fbbb17187c7e0000c6">Make a spiral</a></h1>
<p>
Your task, is to create a NxN spiral with a given `size`.

For example, spiral with size 5 should look like this:

```
00000
....0
000.0
0...0
00000
```

and with the size 10:

```
0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
```

Return value should contain array of arrays, of `0` and `1`, for example for given size `5` result should be:


```javascript
[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
```
```rust
[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
```
```julia
[1 1 1 1 1; 0 0 0 0 1; 1 1 1 0 1; 1 0 0 0 1; 1 1 1 1 1]
```

Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

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
      <td>3 kyu</td>
      <td> <a href="https://www.codewars.com/users/Bugari">Bugari</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2014-04-16 09:19</td>
      <td>2014-06-11 19:56</td>
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
    <td>Arrays</td>
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
    <td>Fundamentals</td>
  </tr>
</table>