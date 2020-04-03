
<h1><a href="https://www.codewars.com/kata/5550d638a99ddb113e0000a2">Josephus Permutation</a></h1>
<p>
This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: **they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act)**.

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial *array/list of items* to be permuted as if they were in a circle and counted out every *k* places until none remained.

**Tips and notes:** it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be &gt;=1.

For example, with n=7 and k=3 `josephus(7,3)` should act this way.
```
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] =&gt; 3 is counted out and goes into the result [3]
[1,2,4,5,7] =&gt; 6 is counted out and goes into the result [3,6]
[1,4,5,7] =&gt; 2 is counted out and goes into the result [3,6,2]
[1,4,5] =&gt; 7 is counted out and goes into the result [3,6,2,7]
[1,4] =&gt; 5 is counted out and goes into the result [3,6,2,7,5]
[4] =&gt; 1 is counted out and goes into the result [3,6,2,7,5,1]
[] =&gt; 4 is counted out and goes into the result [3,6,2,7,5,1,4]
```
So our final result is:
```
josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
```
For more info, browse the &lt;a href=&quot;http://en.wikipedia.org/wiki/Josephus_problem&quot; target=&quot;_blank&quot;&gt;Josephus Permutation&lt;/a&gt; page on wikipedia; related kata: &lt;a href=&quot;http://www.codewars.com/kata/josephus-survivor&quot; target=&quot;_blank&quot; title=&quot;Josephus sequence - last element&quot;&gt;Josephus Survivor&lt;/a&gt;.

Also, [live game demo](https://iguacel.github.io/josephus/) by [OmniZoetrope](https://www.codewars.com/users/OmniZoetrope).
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
      <td>2015-05-15 18:02</td>
      <td>2015-05-20 05:52</td>
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
    <td>Permutations</td>
  </tr>
</table>