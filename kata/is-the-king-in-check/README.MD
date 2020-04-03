
<h1><a href="https://www.codewars.com/kata/5e28ae347036fa001a504bbe">Is the King in check ?</a></h1>
<p>
You have to write a function 
```if:c,python
~~~
king_is_in_check
~~~
```
```if:haskell,javascript
~~~
kingIsInCheck
~~~
```
that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars (Javascript : strings of length 1) and returns  ````true```` if the black king is in check or ````false```` if it is not.

```if:c,haskell
The array will include 64 squares which can contain the following characters :
&lt;ul&gt;
  &lt;li&gt;'K' for the black King;&lt;/li&gt;
  &lt;li&gt;'Q' for a white Queen;&lt;/li&gt;
  &lt;li&gt;'B' for a white Bishop;&lt;/li&gt;
  &lt;li&gt;'N' for a white kNight;&lt;/li&gt;
  &lt;li&gt;'R' for a white Rook;&lt;/li&gt;
  &lt;li&gt;'P' for a white Pawn;&lt;/li&gt;
  &lt;li&gt;&lt;pre&gt;' ' (a space) if there is no piece on that square.&lt;/pre&gt;&lt;/li&gt;
&lt;/ul&gt;
```
```if:javascript,python
The array will include 64 squares which can contain the following characters :
&lt;ul&gt;
  &lt;li&gt;'♔' for the black King;&lt;/li&gt;
  &lt;li&gt;'♛' for a white Queen;&lt;/li&gt;
  &lt;li&gt;'♝' for a white Bishop;&lt;/li&gt;
  &lt;li&gt;'♞' for a white Knight;&lt;/li&gt;
  &lt;li&gt;'♜' for a white Rook;&lt;/li&gt;
  &lt;li&gt;'♟' for a white Pawn;&lt;/li&gt;
  &lt;li&gt;&lt;pre&gt;' ' (a space) if there is no piece on that square.&lt;/pre&gt;&lt;/li&gt;
&lt;/ul&gt;

Note : these are actually inverted-color [chess Unicode characters](https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode)  because the dark codewars theme makes the white appear black and vice versa. Use the characters shown above.
```

There will always be exactly one king, which is the **black** king, whereas all the other pieces are **white**.&lt;br&gt;
**The board is oriented from Black's perspective.**&lt;br&gt;
Remember that pawns can only move and take **forward**.&lt;br&gt;
Also be careful with the pieces' lines of sight ;-) .

The input will always be valid, no need to validate it.
To help you visualize the position, tests will print a chessboard to show you the problematic cases.
Looking like this :

&lt;pre&gt;
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♜ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♔ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|

&lt;/pre&gt;









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
      <td>5 kyu</td>
      <td> <a href="https://www.codewars.com/users/trashy_incel">trashy_incel</a></td>
      <td> <a href="https://www.codewars.com/users/Blind4Basics">Blind4Basics</a></td>
      <td>2020-01-23 18:25</td>
      <td>2020-01-28 09:08</td>
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
    <td>Games</td>
  </tr>
  <tr>
    <td>Arrays</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Strings</td>
  </tr>
</table>