
<h1><a href="https://www.codewars.com/kata/593ff8b39e1cc4bae9000070">Longest Common Subsequence (Performance version)</a></h1>
<p>
## Longest Common Subsequence (Performance version)

from [Wikipedia](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem):  
The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences.  
It differs from problems of finding common substrings: unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences.

## Task

Write a function `lcs` that accepts two `string`s and returns their longest common subsequence as a `string`. 
Performance matters.

#### Examples

```javascript
lcs( &quot;abcdef&quot;, &quot;abc&quot; ) =&gt; &quot;abc&quot;
lcs( &quot;abcdef&quot;, &quot;acf&quot; ) =&gt; &quot;acf&quot;
lcs( &quot;132535365&quot;, &quot;123456789&quot; ) =&gt; &quot;12356&quot;
lcs( &quot;abcdefghijklmnopq&quot;, &quot;apcdefghijklmnobq&quot; ) =&gt; &quot;acdefghijklmnoq&quot;
```
```haskell
lcs &quot;abcdef&quot; &quot;abc&quot; -&gt; &quot;abc&quot;
lcs &quot;abcdef&quot; &quot;acf&quot; -&gt; &quot;acf&quot;
lcs &quot;132535365&quot; &quot;123456789&quot; -&gt; &quot;12356&quot;
lcs &quot;abcdefghijklmnopq&quot; &quot;apcdefghijklmnobq&quot; -&gt; &quot;acdefghijklmnoq&quot;
```
```clojure
(lcs &quot;abcdef&quot; &quot;abc&quot;) ; &quot;abc&quot;
(lcs &quot;abcdef&quot; &quot;acf&quot;) ; &quot;acf&quot;
(lcs &quot;132535365&quot; &quot;123456789&quot;) ; &quot;12356&quot;
(lcs &quot;abcdefghijklmnopq&quot; &quot;apcdefghijklmnobq&quot;) ; &quot;acdefghijklmnoq&quot;
```

#### Testing

This is a performance version of [xDranik](http://www.codewars.com/users/xDranik)'s [kata of the same name](http://www.codewars.com/kata/longest-common-subsequence/).  
This kata, however, has much more full and heavy testing. Intermediate random tests have string arguments of 20 characters; hard random tests 40 characters; extreme 60 characters (characters are chosen out of 36 different ones).
```if:javascript
The reference algorithm solves all (12 fixed, 72 intermediate, 24 hard, 12 extreme) tests within ~150ms. The example algorithm without memoisation would take ~15000ms.
```
```if:haskell
The naive (Wikipedia) solution will run out of time, but
the reference algorithm, stolen from the other kata from user geekyfox, showcasing memoisation, and
the example algorithm, optimising the recursion, do not have any runtime problems (at all).
```

#### Notes

The subsequences of `&quot;abc&quot;` are `&quot;&quot;, &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;ab&quot;, &quot;ac&quot;, &quot;bc&quot;, &quot;abc&quot;`.  
`&quot;&quot;` is a valid subsequence in this kata, and a possible return value.  
All inputs will be valid.  
Two strings may have more than one longest common subsequence. When this occurs, return any of them.
```javascript
lcs( string0, string1 ) === lcs( string1, string0 )
```
```haskell
lcs xs ys == lcs ys xs
```
```clojure
(= (lcs xs ys) (lcs ys xs))
```
Wikipedia has an [article](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem) that may be helpful.
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
      <td> <a href="https://www.codewars.com/users/JohanWiltink">JohanWiltink</a></td>
      <td> <a href="https://www.codewars.com/users/Voile">Voile</a></td>
      <td>2017-06-13 16:53</td>
      <td>2017-08-17 15:09</td>
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
    <td>Performance</td>
  </tr>
  <tr>
    <td>Strings</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Sequences</td>
  </tr>
  <tr>
    <td>Arrays</td>
  </tr>
</table>