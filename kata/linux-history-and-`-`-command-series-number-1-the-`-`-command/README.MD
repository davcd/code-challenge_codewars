
<h1><a href="https://www.codewars.com/kata/58143221f9588e340e00009f">Linux history and  `!` command. Series#1  The `!!` command</a></h1>
<p>
All Unix user know the command line `history`. This one comes with a set of useful commands know as the `bang` command. 

For more information about the history command line you can take a look at: 

- The man page -&gt; simply type `man history` in your terminal.
- The online man page [here](https://linux.die.net/man/3/history).
- And for more information about the `bang` command you can read [this article](http://jaysoo.ca/2009/09/16/unix-history-and-bang-commands/)

For this first kata we will explore the `!!` command, according to the man page this one refer to the previous command.  This is a synonym for `!-1`.

In this kata you should complete a function that take in argument an `history` with the following format: 

```
  1  cd /pub
  2  more beer
  3  lost
  4  ls 
  5  touch me 
  6  chmod 000 me 
  7  more me
  8  history
```

and that should return the last executed command line, in this case it will be `history`.

**Note**: Lot of the command line comes form some geeky t-shirt and form this [excellent page](http://langevin.univ-tln.fr/cours/UPS/extra/unix-shell-jokes.txt).



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
      <td>6 kyu</td>
      <td> <a href="https://www.codewars.com/users/nbeck">nbeck</a></td>
      <td> <a href="https://www.codewars.com/users/suic">suic</a></td>
      <td>2016-10-29 05:22</td>
      <td>2016-10-29 21:30</td>
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
    <td>Parsing</td>
  </tr>
  <tr>
    <td>Logic</td>
  </tr>
  <tr>
    <td>Regular Expressions</td>
  </tr>
  <tr>
    <td>Declarative Programming</td>
  </tr>
  <tr>
    <td>Advanced Language Features</td>
  </tr>
  <tr>
    <td>Programming Paradigms</td>
  </tr>
  <tr>
    <td>Fundamentals</td>
  </tr>
</table>