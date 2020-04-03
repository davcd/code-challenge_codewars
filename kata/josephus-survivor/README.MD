
<h1><a href="https://www.codewars.com/kata/555624b601231dc7a400017a">Josephus Survivor</a></h1>
<p>
In this kata you have to correctly return who is the &quot;survivor&quot;, ie: the last element of a &lt;a href=&quot;http://www.codewars.com/kata/josephus-permutation/&quot; target=&quot;_blank&quot; title=&quot;Josephus sequence&quot;&gt;Josephus permutation&lt;/a&gt;.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

```
josephus_survivor(7,3) =&gt; means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] =&gt; 3 is counted out
[1,2,4,5,7] =&gt; 6 is counted out
[1,4,5,7] =&gt; 2 is counted out
[1,4,5] =&gt; 7 is counted out
[1,4] =&gt; 5 is counted out
[4] =&gt; 1 counted out, 4 is the last element - the survivor!
```

The above link about the &quot;base&quot; kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

**Notes and tips:** using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be &gt;=1.
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
      <td> <a href="https://www.codewars.com/users/GiacomoSorbi">GiacomoSorbi</a></td>
      <td> <a href="https://www.codewars.com/users/dnolan">dnolan</a></td>
      <td>2015-05-15 18:54</td>
      <td>2015-05-20 05:51</td>
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
    <td>Mathematics</td>
  </tr>
  <tr>
    <td>Logic</td>
  </tr>
  <tr>
    <td>Numbers</td>
  </tr>
  <tr>
    <td>Lists</td>
  </tr>
  <tr>
    <td>Data Structures</td>
  </tr>
  <tr>
    <td>Arrays</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
</table>