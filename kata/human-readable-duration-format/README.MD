
<h1><a href="https://www.codewars.com/kata/52742f58faf5485cae000b9a">Human readable duration format</a></h1>
<p>
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns `&quot;now&quot;`. Otherwise,  the duration is expressed as a combination of `years`, `days`, `hours`, `minutes` and `seconds`.

It is much easier to understand with an example:

```Fortran
formatDuration (62)    // returns &quot;1 minute and 2 seconds&quot;
formatDuration (3662)  // returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```c
formatDuration (62)    // returns &quot;1 minute and 2 seconds&quot;
formatDuration (3662)  // returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```nasm
mov edi, 62
call fmtduration      ; RAX &lt;- `1 minute and 2 seconds\0`

mov edi, 3662
call fmtduration      ; RAX &lt;- `1 hour, 1 minute and 2 seconds\0`
```
```cpp
format_duration(62)    // returns &quot;1 minute and 2 seconds&quot;
format_duration(3662)  // returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```javascript
formatDuration(62)    // returns &quot;1 minute and 2 seconds&quot;
formatDuration(3662)  // returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```python
format_duration(62)    # returns &quot;1 minute and 2 seconds&quot;
format_duration(3662)  # returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```ruby
format_duration(62)    # returns &quot;1 minute and 2 seconds&quot;
format_duration(3662)  # returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```elixir
format_duration(62)    # returns &quot;1 minute and 2 seconds&quot;
format_duration(3662)  # returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```php
format_duration(62)    # returns &quot;1 minute and 2 seconds&quot;
format_duration(3662)  # returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```haskell
formatDuration 62     -- returns &quot;1 minute and 2 seconds&quot;
formatDuration 3662   -- returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```java
TimeFormatter.formatDuration(62)   //returns &quot;1 minute and 2 seconds&quot;
TimeFormatter.formatDuration(3662) //returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```groovy
Kata.formatDuration(62)   //returns &quot;1 minute and 2 seconds&quot;
Kata.formatDuration(3662) //returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```shell
duration 62            # echos &quot;1 minute and 2 seconds&quot;
duration 3662          # echos &quot;1 hour, 1 minute and 2 seconds&quot;
```
```julia
formatduration(62)    # returns &quot;1 minute and 2 seconds&quot;
formatduration(3662)  # returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```racket
(format-duration 62)    ; returns &quot;1 minute and 2 seconds&quot;
(format-duration 3662)  ; returns &quot;1 hour, 1 minute and 2 seconds&quot;
```
```rust
format_duration(62)    // returns &quot;1 minute and 2 seconds&quot;
format_duration(3662)  // returns &quot;1 hour, 1 minute and 2 seconds&quot;
```

**For the purpose of this Kata, a year is 365 days and a day is 24 hours.**

Note that spaces are important.


### Detailed rules

The resulting expression is made of components like `4 seconds`, `1 year`, etc.  In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (`&quot;, &quot;`). Except the last component, which is separated by `&quot; and &quot;`, just like it would be written in English. 

A more significant units of time will occur before than a least significant one. Therefore, `1 second and 1 year` is not correct, but `1 year and 1 second` is.

Different components have different unit of times. So there is not repeated units like in `5 seconds and 1 second`.

A component will not appear at all if its value happens to be zero.  Hence, `1 minute and 0 seconds` is not valid, but it should be just `1 minute`.

 A unit of time must be used &quot;as much as possible&quot;. It means that the function should not return `61 seconds`, but `1 minute and 1 second` instead.  Formally, the duration specified by  of a component must not be greater than any valid more significant unit of time.

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
      <td> <a href="https://www.codewars.com/users/davazp">davazp</a></td>
      <td> <a href="https://www.codewars.com/users/jhoffner">jhoffner</a></td>
      <td>2013-11-02 03:14</td>
      <td>2013-11-20 02:05</td>
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
    <td>Formats</td>
  </tr>
  <tr>
    <td>Strings</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
  <tr>
    <td>Dates/Time</td>
  </tr>
  <tr>
    <td>Formatting</td>
  </tr>
  <tr>
    <td>Logic</td>
  </tr>
</table>