
<h1><a href="https://www.codewars.com/kata/5d49c93d089c6e000ff8428c">Computer problem series #1: Fill the Hard Disk Drive</a></h1>
<p>
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue. 

### Input:

* Array of file sizes `(0 &lt;= s &lt;= 100)`
* Capacity of the HD `(0 &lt;= c &lt;= 500)`

### Output:

* Number of files that can be fully saved in the HD. 

### Examples:

```
save([4,4,4,3,3], 12) -&gt; 3
# 4+4+4 &lt;= 12, but 4+4+4+3 &gt; 12
```

```
save([4,4,4,3,3], 11) -&gt; 2
# 4+4 &lt;= 11, but 4+4+4 &gt; 11
```

Do not expect any negative or invalid inputs.
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
      <td> <a href="https://www.codewars.com/users/albertogcmr">albertogcmr</a></td>
      <td> <a href="https://www.codewars.com/users/daniloxxv">daniloxxv</a></td>
      <td>2019-08-08 11:18</td>
      <td>2019-08-14 12:45</td>
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
    <td>Arrays</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
</table>