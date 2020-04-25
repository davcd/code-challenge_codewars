
<h1><a href="https://www.codewars.com/kata/52a382ee44408cea2500074c">Matrix Determinant</a></h1>
<p>
Write a function that accepts a square matrix (`N x N` 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix `|a|` has determinant `a`.

A 2x2 matrix `[ [a, b], [c, d] ]` or
```js
|a  b|
|c  d|
```
has determinant: `a*d - b*c`.

The determinant of an `n x n` sized matrix is calculated by reducing the problem to the calculation of the determinants of `n` matrices of`n-1 x n-1` size.

For the 3x3 case, `[ [a, b, c], [d, e, f], [g, h, i] ]` or
```js
|a b c|  
|d e f|  
|g h i|  
```
the determinant is: `a * det(a_minor) - b * det(b_minor) + c * det(c_minor)` where `det(a_minor)` refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:
```js
|- - -|
|- e f|
|- h i|  
```
Note the alternation of signs. 

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row `[a, b, c, d]`, then:

`det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)`

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
      <td> <a href="https://www.codewars.com/users/pjfranzini">pjfranzini</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2013-12-07 23:18</td>
      <td>2014-01-13 19:35</td>
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
    <td>Graphs</td>
  </tr>
  <tr>
    <td>Data Structures</td>
  </tr>
  <tr>
    <td>Linear Algebra</td>
  </tr>
  <tr>
    <td>Algebra</td>
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
</table>