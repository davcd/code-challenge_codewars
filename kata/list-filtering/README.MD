
<h1><a href="https://www.codewars.com/kata/53dbd5315a3c69eed20002dd">List Filtering</a></h1>
<p>
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

### Example

```python
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```
```csharp
ListFilterer.GetIntegersFromList(new List&lt;object&gt;(){1, 2, &quot;a&quot;, &quot;b&quot;}) =&gt; {1, 2}
ListFilterer.GetIntegersFromList(new List&lt;object&gt;(){1, 2, &quot;a&quot;, &quot;b&quot;, 0, 15}) =&gt; {1, 2, 0, 15}
ListFilterer.GetIntegersFromList(new List&lt;object&gt;(){1, 2, &quot;a&quot;, &quot;b&quot;, &quot;aasf&quot;, &quot;1&quot;, &quot;123&quot;, 231}) =&gt; {1, 2, 231}
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
      <td>7 kyu</td>
      <td> <a href="https://www.codewars.com/users/cmgerber">cmgerber</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2014-08-01 19:58</td>
      <td>2014-08-13 06:24</td>
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
    <td>Lists</td>
  </tr>
  <tr>
    <td>Data Structures</td>
  </tr>
  <tr>
    <td>Filtering</td>
  </tr>
  <tr>
    <td>Algorithms</td>
  </tr>
  <tr>
    <td>Logic</td>
  </tr>
</table>