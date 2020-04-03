
<h1><a href="https://www.codewars.com/kata/52a78825cdfc2cfc87000005">Evaluate mathematical expression</a></h1>
<p>
# Instructions

Given a mathematical expression as a string you must return the result as a number.

## Numbers
Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

## Operators
You need to support the following mathematical operators:

 - Multiplication `*`
 - Division `/` (as true division)
 - Addition `+`
 - Subtraction `-`

Operators are always evaluated from left-to-right, and `*` and `/` must be evaluated before `+` and `-`.

## Parentheses
You need to support multiple levels of nested parentheses, ex. `(2 / (2 + 3.33) * 4) - -6`

## Whitespace
There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (`-`) used for negating numbers and parentheses will *never* be separated by whitespace. I.e., all of the following are **valid** expressions.

```
1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2

6 + -(4)   // 2
6 + -( -4) // 10
```

And the following are **invalid** expressions
```
1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
```

## Validation
You do not need to worry about validation - you will only receive **valid** mathematical expressions following the above rules.

```if:javascript
NOTE: Both `eval` and `Function` are disabled. Same goes for `String.match`.
```

```if:php
NOTE: `eval` is disallowed in your solution.
```

```if:python
NOTE: `eval` and `exec` are disallowed in your solution.
```

```if:clojure
NOTE: `eval` and `import` is disallowed in your solution.
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
      <td>2 kyu</td>
      <td> <a href="https://www.codewars.com/users/ankr">ankr</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2013-12-11 09:47</td>
      <td>2014-02-01 19:24</td>
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
    <td>Expressions</td>
  </tr>
  <tr>
    <td>Basic Language Features</td>
  </tr>
  <tr>
    <td>Fundamentals</td>
  </tr>
  <tr>
    <td>Operators</td>
  </tr>
  <tr>
    <td>Parsing</td>
  </tr>
  <tr>
    <td>Strings</td>
  </tr>
</table>