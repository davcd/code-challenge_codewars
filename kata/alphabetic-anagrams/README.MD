
<h1><a href="https://www.codewars.com/kata/53e57dada0cb0400ba000688">Alphabetic Anagrams</a></h1>
<p>
Consider a &quot;word&quot; as any sequence of capital letters A-Z (not limited to just &quot;dictionary words&quot;). For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; for our purposes &quot;AAIILNORSTTY&quot; is also a &quot;word&quot; composed of the same letters as these two).

We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

Given a word, return its number. Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), and take no more than 500 milliseconds to run. To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). For the JS tests with large positions, there's some leeway (.000000001%). If you feel like you're getting it right for the smaller ranks, and only failing by rounding on the larger, submit a couple more times and see if it takes.

Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).

C# is using a `long`, which may not have the best precision, but the tests are locked so we can't change it.

Sample words, with their rank:&lt;br /&gt;
ABAB = 2&lt;br /&gt;
AAAB = 1&lt;br /&gt;
BAAA = 4&lt;br /&gt;
QUESTION = 24572&lt;br /&gt;
BOOKKEEPER = 10743

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
      <td>3 kyu</td>
      <td> <a href="https://www.codewars.com/users/Azuaron">Azuaron</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2014-08-09 14:23</td>
      <td>2014-11-06 16:38</td>
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
    <td>Strings</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
</table>