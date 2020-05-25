
<h1><a href="https://www.codewars.com/kata/53573877d5493b4d6e00050c">Find the Capitals</a></h1>
<p>
Write a method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings

The method should return an array of sentences declaring the state or country and its capital.

Examples
```ruby
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] # returns &quot;The capital of Maine is Augusta&quot;

country_capitals = [{'country' =&gt; 'Spain', 'capital' =&gt; 'Madrid'}]
capital(country_capitals)[0] # returns &quot;The capital of Spain is Madrid&quot;

mixed_capitals: [{&quot;state&quot; =&gt; 'Maine', capital: 'Augusta'}, {country: 'Spain', &quot;capital&quot; =&gt; &quot;Madrid&quot;}]
capital(mixed_capitals)[0] # returns &quot;The capital of Maine is Augusta&quot;
```

```javascript
state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns &quot;The capital of Maine is Augusta&quot;

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns &quot;The capital of Spain is Madrid&quot;

mixed_capitals: [{&quot;state&quot; : 'Maine', capital: 'Augusta'}, {country: 'Spain', &quot;capital&quot; : &quot;Madrid&quot;}]
capital(mixed_capitals)[1] // returns &quot;The capital of Spain is Madrid&quot;
```

```python
[{'state': 'Maine', 'capital': 'Augusta'}] --&gt; [&quot;The capital of Maine is Augusta&quot;]
[{'country' : 'Spain', 'capital' : 'Madrid'}] --&gt; [&quot;The capital of Spain is Madrid&quot;]
[{&quot;state&quot; : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', &quot;capital&quot; : &quot;Madrid&quot;}] --&gt; [&quot;The capital of Maine is Augusta&quot;, &quot;The capital of Spain is Madrid&quot;]
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
      <td> <a href="https://www.codewars.com/users/ogryzek">ogryzek</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2014-04-24 01:34</td>
      <td>2014-10-21 23:50</td>
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
    <td>Hashes</td>
  </tr>
  <tr>
    <td>Data Structures</td>
  </tr>
</table>