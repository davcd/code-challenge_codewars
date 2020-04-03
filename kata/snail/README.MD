
<h1><a href="https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1">Snail</a></h1>
<p>
## Snail Sort

Given an `n x n` array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

```
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=&gt; [1,2,3,6,9,8,7,4,5]
```

For better understanding, please follow the numbers of the next array consecutively:

```
array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=&gt; [1,2,3,4,5,6,7,8,9]
```

This image will illustrate things more clearly:

&lt;img src=&quot;http://www.haan.lu/files/2513/8347/2456/snail.png&quot; /&gt;

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array `[[]]`.
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
      <td> <a href="https://www.codewars.com/users/stevenbarragan">stevenbarragan</a></td>
      <td>-</td>
      <td>2013-08-28 06:56</td>
      <td>-</td>
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
    <td>Arrays</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
</table>