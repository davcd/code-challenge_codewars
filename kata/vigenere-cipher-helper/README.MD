
<h1><a href="https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3">Vigenère Cipher Helper</a></h1>
<p>
The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). 

The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname &quot;le chiffre indéchiffrable&quot; or &quot;the indecipherable cipher.&quot;

[From Wikipedia](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher):

&gt; The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.
&gt;
&gt; . . .
&gt;
&gt; In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift `3`, `A` would become `D`, `B` would become `E`, `Y` would become `B` and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.

Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- **this is not the case here.**

The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

Visual representation:
```js
&quot;my secret code i want to secure&quot;  // message
&quot;passwordpasswordpasswordpasswor&quot;  // key
```
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

## Example
```js
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'
```
Any character not in the alphabet must be left as is. For example (following from above):
```js
c.encode('CODEWARS'); // returns 'CODEWARS'
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
      <td>4 kyu</td>
      <td> <a href="https://www.codewars.com/users/jacobb">jacobb</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2014-01-12 16:29</td>
      <td>2014-02-17 02:22</td>
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
    <td>Logic</td>
  </tr>
  <tr>
    <td>Ciphers</td>
  </tr>
  <tr>
    <td>Cryptography</td>
  </tr>
  <tr>
    <td>Security</td>
  </tr>
  <tr>
    <td>Objects</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Classes</td>
  </tr>
  <tr>
    <td>Basic Language Features</td>
  </tr>
  <tr>
    <td>Object-oriented Programming</td>
  </tr>
  <tr>
    <td>Fundamentals</td>
  </tr>
  <tr>
    <td>Programming Paradigms</td>
  </tr>
  <tr>
    <td>Strings</td>
  </tr>
</table>