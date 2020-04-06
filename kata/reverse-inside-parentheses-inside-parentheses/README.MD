
<h1><a href="https://www.codewars.com/kata/5e07b5c55654a900230f0229">Reverse Inside Parentheses (Inside Parentheses)</a></h1>
<p>
In this kata, you will be given a string of text and valid parentheses, such as `&quot;h(el)lo&quot;`. You must return the string, with only the text inside parentheses reversed, so `&quot;h(el)lo&quot;` becomes `&quot;h(le)lo&quot;`. However, if said parenthesized text contains parenthesized text itself, then that too must reversed back, so it faces the original direction. When parentheses are reversed, they should switch directions, so they remain syntactically correct (i.e. `&quot;h((el)l)o&quot;` becomes `&quot;'h(l(el))o'&quot;`). This pattern should repeat for however many layers of parentheses.

For example:
```javascript
reverseInParens(&quot;h(el)lo&quot;) == &quot;h(le)lo&quot;;
reverseInParens(&quot;a ((d e) c b)&quot;) == &quot;a (b c (d e))&quot;;
reverseInParens(&quot;one (two (three) four)&quot;) == &quot;one (ruof (three) owt)&quot;;
reverseInParens(&quot;one (ruof ((rht)ee) owt)&quot;) == &quot;one (two ((thr)ee) four)&quot;;
```
```c
reverse_in_parens(&quot;h(el)lo&quot;) == &quot;h(le)lo&quot;);
reverse_in_parens(&quot;a ((d e) c b)&quot;) == &quot;a (b c (d e))&quot;);
reverse_in_parens(&quot;one (two (three) four)&quot;) == &quot;one (ruof (three) owt)&quot;);
reverse_in_parens(&quot;one (ruof ((rht)ee) owt)&quot;) == &quot;one (two ((thr)ee) four)&quot;);
```
```elixir
Kata.reverse_in_parens(&quot;h(el)lo&quot;) == &quot;h(le)lo&quot;
Kata.reverse_in_parens(&quot;a ((d e) c b)&quot;) == &quot;a (b c (d e))&quot;
Kata.reverse_in_parens(&quot;one (two (three) four)&quot;) == &quot;one (ruof (three) owt)&quot;
Kata.reverse_in_parens(&quot;one (ruof ((rht)ee) owt)&quot;) == &quot;one (two ((thr)ee) four)&quot;
```
```haskell
reverseInParens &quot;h(el)lo&quot; == &quot;h(le)lo&quot;
reverseInParens &quot;a ((d e) c b)&quot; == &quot;a (b c (d e))&quot;
reverseInParens &quot;one (two (three) four)&quot; == &quot;one (ruof (three) owt)&quot;
reverseInParens &quot;one (ruof ((rht)ee) owt)&quot; == &quot;one (two ((thr)ee) four)&quot;
```

Input parentheses will always be valid (i.e. you will never get &quot;(()&quot;).
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
      <td> <a href="https://www.codewars.com/users/dmercertaylor">dmercertaylor</a></td>
      <td> <a href="https://www.codewars.com/users/Avanta">Avanta</a></td>
      <td>2019-12-28 20:13</td>
      <td>2019-12-29 16:45</td>
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
    <td>Strings</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Basic Language Features</td>
  </tr>
  <tr>
    <td>Recursion</td>
  </tr>
  <tr>
    <td>Algorithms</td>
  </tr>
  <tr>
    <td>Computability Theory</td>
  </tr>
  <tr>
    <td>Logic</td>
  </tr>
  <tr>
    <td>Theoretical Computer Science</td>
  </tr>
  <tr>
    <td>Parsing</td>
  </tr>
</table>