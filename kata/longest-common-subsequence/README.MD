
<h1><a href="https://www.codewars.com/kata/52756e5ad454534f220001ef">Longest Common Subsequence</a></h1>
<p>
Write a function called `LCS` that accepts two sequences and returns the longest subsequence common to the passed in sequences.

### Subsequence
A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

### Example subsequence
Subsequences of `&quot;abc&quot;` = `&quot;a&quot;`, `&quot;b&quot;`, `&quot;c&quot;`, `&quot;ab&quot;`, `&quot;ac&quot;`, `&quot;bc&quot;` and `&quot;abc&quot;`.

### LCS examples
```javascript
LCS( &quot;abcdef&quot; , &quot;abc&quot; ) =&gt; returns &quot;abc&quot;
LCS( &quot;abcdef&quot; , &quot;acf&quot; ) =&gt; returns &quot;acf&quot;
LCS( &quot;132535365&quot; , &quot;123456789&quot; ) =&gt; returns &quot;12356&quot;
```
```haskell
lcs &quot;a&quot;         &quot;b&quot;         `shouldBe` &quot;&quot;
lcs &quot;abcdef&quot;    &quot;abc&quot;       `shouldBe` &quot;abc&quot;
lcs &quot;132535365&quot; &quot;123456789&quot; `shouldBe` &quot;12356&quot;
```
```python
lcs( &quot;abcdef&quot; , &quot;abc&quot; ) =&gt; returns &quot;abc&quot;
lcs( &quot;abcdef&quot; , &quot;acf&quot; ) =&gt; returns &quot;acf&quot;
lcs( &quot;132535365&quot; , &quot;123456789&quot; ) =&gt; returns &quot;12356&quot;
```
```ruby
lcs( &quot;abcdef&quot; , &quot;abc&quot; ) =&gt; returns &quot;abc&quot;
lcs( &quot;abcdef&quot; , &quot;acf&quot; ) =&gt; returns &quot;acf&quot;
lcs( &quot;132535365&quot; , &quot;123456789&quot; ) =&gt; returns &quot;12356&quot;
```
```java
Solution.lcs(&quot;abcdef&quot;, &quot;abc&quot;) =&gt; returns &quot;abc&quot;
Solution.lcs(&quot;abcdef&quot;, &quot;acf&quot;) =&gt; returns &quot;acf&quot;
Solution.lcs(&quot;132535365&quot;, &quot;123456789&quot;) =&gt; returns &quot;12356&quot;
```
```go
LCS( &quot;abcdef&quot;, &quot;abc&quot; ) =&gt; returns &quot;abc&quot;
LCS( &quot;abcdef&quot;, &quot;acf&quot; ) =&gt; returns &quot;acf&quot;
LCS( &quot;132535365&quot;, &quot;123456789&quot; ) =&gt; returns &quot;12356&quot;
```
```ocaml
lcs ['a';'b';'c';'d';'e';'f'] ['a';'b';'c'] =&gt; returns ['a';'b';'c']
lcs ['a';'b';'c';'d';'e';'f'] ['a';'c';'f'] =&gt; returns ['a';'c';'f']
lcs [1;3;2;5;3;5;3;6;5] [1;2;3;4;5;6;7;8;9] =&gt; returns [1;2;3;5;6]
```

### Notes
* Both arguments will be strings
* Return value must be a string
* Return an empty string if there exists no common subsequence
* Both arguments will have one or more characters (in JavaScript)
* All tests will only have a single longest common subsequence. Don't worry about cases such as `LCS( &quot;1234&quot;, &quot;3412&quot; )`, which would have two possible longest common subsequences: `&quot;12&quot;` and `&quot;34&quot;`.

Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).

### Tips

Wikipedia has an explanation of the two properties that can be used to solve the problem:

- [First property](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem#First_property)
- [Second property](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem#Second_property)

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
      <td> <a href="https://www.codewars.com/users/xDranik">xDranik</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2013-11-02 22:57</td>
      <td>2013-11-27 17:58</td>
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
    <td>Strings</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Search</td>
  </tr>
  <tr>
    <td>Logic</td>
  </tr>
</table>