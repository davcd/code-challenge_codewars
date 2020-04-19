
<h1><a href="https://www.codewars.com/kata/525f50e3b73515a6db000b83">Create Phone Number</a></h1>
<p>
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

&lt;h3&gt;Example:&lt;/h3&gt;

```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // =&gt; returns &quot;(123) 456-7890&quot;
```
```cpp
createPhoneNumber(int[10]{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // =&gt; returns &quot;(123) 456-7890&quot;
```
```crystal
create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # =&gt; returns &quot;(123) 456-7890&quot;
```
```ruby
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # =&gt; returns &quot;(123) 456-7890&quot;
```
```coffeescript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # =&gt; returns &quot;(123) 456-7890&quot;
```
```java
Kata.createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // =&gt; returns &quot;(123) 456-7890&quot;
```
```dart
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // =&gt; returns &quot;(123) 456-7890&quot;
```
```haskell
createPhoneNumber [1,2,3,4,5,6,7,8,9,0] -- =&gt; returns &quot;(123) 456-7890&quot;
```
```csharp
Kata.CreatePhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // =&gt; returns &quot;(123) 456-7890&quot;
```
```python
create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # =&gt; returns &quot;(123) 456-7890&quot;
```
```scala
Kata.createPhoneNumber(Seq(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) # =&gt; returns &quot;(123) 456-7890&quot;
```
```php
createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); // =&gt; returns &quot;(123) 456-7890&quot;
```
```f#
createPhoneNumber [1; 2; 3; 4; 5; 6; 7; 8; 9; 0] // =&gt; returns &quot;(123) 456-7890&quot;
```
```clojure
(create-phone-number [1 2 3 4 5 6 7 8 9 0]) ;; =&gt; returns &quot;(123) 456-7890&quot;
```
```rust
create_phone_number(&amp;[1,2,3,4,5,6,7,8,9,0]); // returns &quot;(123) 456-7890&quot;
```
```go
CreatePhoneNumber([10]uint{1,2,3,4,5,6,7,8,9,0})  // returns &quot;(123) 456-7890&quot;
```
```c
create_phone_number(phnum, (const unsigned char[]){1,2,3,4,5,6,7,8,9,0});
    /* phnum &lt;- &quot;(123) 456-7890&quot; */
```
```nasm
phnum:  resb 15
nums:   db  1,2,3,4,5,6,7,8,9,0

mov rdi, phnum
mov rsi, nums
call create_phone_number  ; RAX &lt;- phnum &lt;- &quot;(123) 456-7890&quot; 
```
```typescript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // =&gt; returns &quot;(123) 456-7890&quot;
```
```julia
createphonenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # -&gt; returns &quot;(123) 456-7890&quot;
```
```cfml
createPhoneNumber( [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ) // =&gt; returns &quot;(123) 456-7890&quot;
```

The returned format must be correct in order to complete this challenge. &lt;br/&gt;
Don't forget the space after the closing parentheses!
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
      <td> <a href="https://www.codewars.com/users/xDranik">xDranik</a></td>
      <td>-</td>
      <td>2013-10-17 02:52</td>
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
  <tr>
    <td>Strings</td>
  </tr>
  <tr>
    <td>Loops</td>
  </tr>
  <tr>
    <td>Control Flow</td>
  </tr>
  <tr>
    <td>Basic Language Features</td>
  </tr>
  <tr>
    <td>Fundamentals</td>
  </tr>
  <tr>
    <td>Formatting</td>
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
</table>