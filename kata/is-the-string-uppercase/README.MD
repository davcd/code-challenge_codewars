
<h1><a href="https://www.codewars.com/kata/56cd44e1aa4ac7879200010b">Is the string uppercase?</a></h1>
<p>
# Is the string uppercase?

## Task

```if-not:haskell,csharp,javascript,coffeescript,elixir,forth,go,dart,julia,cpp,reason,typescript,racket,ruby
Create a method `is_uppercase()` to see whether the string is ALL CAPS. For example:
```
```if:haskell,reason,typescript
Create a method `isUpperCase` to see whether the string is ALL CAPS. For example:
```
```if:csharp
Create an extension method `IsUpperCase` to see whether the string is ALL CAPS. For example:
```
```if:julia
Create a function `isupper` to see whether the string is ALL CAPS. For example:
```
```if:cpp
Create a function `is_uppercase()` to see whether the string is ALL CAPS. For example:
```
```if:javascript,coffeescript
Add the `isUpperCase` method to `String` to see whether the string is ALL CAPS. For example:
```
```if:elixir
Create a method `upper_case?` to see whether the string is ALL CAPS. For example:
```
```if:forth,factor
Create a word `uppercase?` to check whether a string is ALL CAPS. For example:
```
```if:go
Create a method `IsUpperCase` to see whether the string is ALL CAPS. For example:
```
```if:racket
Create a method `upcase?` to see whether the string is ALL CAPS. For example:
```
```if:ruby
Create a method `is_upcase?` to see whether the string is ALL CAPS. For example:
```

```python
is_uppercase(&quot;c&quot;) == False
is_uppercase(&quot;C&quot;) == True
is_uppercase(&quot;hello I AM DONALD&quot;) == False
is_uppercase(&quot;HELLO I AM DONALD&quot;) == True
is_uppercase(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == False
is_uppercase(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == True
```
```haskell
isUpperCase &quot;c&quot; == False
isUpperCase &quot;C&quot; == True
isUpperCase &quot;hello I AM DONALD&quot; == False
isUpperCase &quot;HELLO I AM DONALD&quot; == True
isUpperCase &quot;ACSKLDFJSgSKLDFJSKLDFJ&quot; == False
isUpperCase &quot;ACSKLDFJSGSKLDFJSKLDFJ&quot; == True
```
```csharp
&quot;c&quot;.IsUpperCase() == false
&quot;C&quot;.IsUpperCase() == true
&quot;hello I AM DONALD&quot;.IsUpperCase() == false
&quot;HELLO I AM DONALD&quot;.IsUpperCase() == true
&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;.IsUpperCase() == false
&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;.IsUpperCase() == true
```
```dart
isUpperCase(&quot;c&quot;) == false
isUpperCase(&quot;C&quot;) == true
isUpperCase(&quot;hello I AM DONALD&quot;) == false
isUpperCase(&quot;HELLO I AM DONALD&quot;) == true
isUpperCase(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == false
isUpperCase(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == true
```
```julia
isupper(&quot;c&quot;) == false
isupper(&quot;C&quot;) == true
isupper(&quot;hello I AM DONALD&quot;) == false
isupper(&quot;HELLO I AM DONALD&quot;) == true
isupper(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == false
isupper(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == true
```
```php
is_uppercase(&quot;c&quot;) == false
is_uppercase(&quot;C&quot;) == true
is_uppercase(&quot;hello I AM DONALD&quot;) == false
is_uppercase(&quot;HELLO I AM DONALD&quot;) == true
is_uppercase(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == false
is_uppercase(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == true
```
```c
is_uppercase(&quot;c&quot;) == false
is_uppercase(&quot;C&quot;) == true
is_uppercase(&quot;hello I AM DONALD&quot;) == false
is_uppercase(&quot;HELLO I AM DONALD&quot;) == true
is_uppercase(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == false
is_uppercase(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == true
```
```cpp
is_uppercase(&quot;c&quot;) == false
is_uppercase(&quot;C&quot;) == true
is_uppercase(&quot;hello I AM DONALD&quot;) == false
is_uppercase(&quot;HELLO I AM DONALD&quot;) == true
is_uppercase(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == false
is_uppercase(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == true
```
```javascript
&quot;c&quot;.isUpperCase() == false
&quot;C&quot;.isUpperCase() == true
&quot;hello I AM DONALD&quot;.isUpperCase() == false
&quot;HELLO I AM DONALD&quot;.isUpperCase() == true
&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;.isUpperCase() == false
&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;.isUpperCase() == true
```
```coffeescript
&quot;c&quot;.isUpperCase() == no
&quot;C&quot;.isUpperCase() == yes
&quot;hello I AM DONALD&quot;.isUpperCase() == no
&quot;HELLO I AM DONALD&quot;.isUpperCase() == yes
&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;.isUpperCase() == no
&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;.isUpperCase() == yes
```
```elixir
upper_case?(&quot;c&quot;) == false
upper_case?(&quot;C&quot;) == true
upper_case?(&quot;hello I AM DONALD&quot;) == false
upper_case?(&quot;HELLO I AM DONALD&quot;) == true
upper_case?(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == false
upper_case?(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == true
```
```forth
s&quot; c&quot; uppercase? -&gt; false
s&quot; C&quot; uppercase? -&gt; true
s&quot; hello I AM DONALD&quot; uppercase? -&gt; false
s&quot; HELLO I AM DONALD&quot; uppercase? -&gt;  true
s&quot; ACSKLDFJSgSKLDFJSKLDFJ&quot; uppercase? -&gt; false
s&quot; ACSKLDFJSGSKLDFJSKLDFJ&quot; uppercase? -&gt; true
```
```factor
&quot;c&quot; uppercase? -&gt; f
&quot;C&quot; uppercase? -&gt; t
&quot;hello I AM DONALD&quot; uppercase? -&gt; f
&quot;HELLO I AM DONALD&quot; uppercase? -&gt;  t
&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot; uppercase? -&gt; f
&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot; uppercase? -&gt; t
```
```go
type MyString string
MyString(&quot;c&quot;).IsUpperCase() == false
MyString(&quot;C&quot;).IsUpperCase() == true
MyString(&quot;hello I AM DONALD&quot;).IsUpperCase() == false
MyString(&quot;HELLO I AM DONALD&quot;).IsUpperCase() == true
MyString(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;).IsUpperCase() == false
MyString(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;).IsUpperCase() == true
```
```racket
(upcase? &quot;c&quot;) ; #f
(upcase? &quot;C&quot;) ; #t
(upcase? &quot;hello I AM DONALD&quot;) ; #f
(upcase? &quot;HELLO I AM DONALD&quot;) ; #t 
(upcase? &quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) ; #f
(upcase? &quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) ; #t
```
```reason
isUpperCase(&quot;c&quot;) == false
isUpperCase(&quot;C&quot;) == true
isUpperCase(&quot;hello I AM DONALD&quot;) == false
isUpperCase(&quot;HELLO I AM DONALD&quot;) == true
isUpperCase(&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;) == false
isUpperCase(&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;) == true
```
```typescript
isUpperCase('c') == false
isUpperCase('C') == true
isUpperCase('hello I AM DONALD') == false
isUpperCase('HELLO I AM DONALD') == true
isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ') == false
isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ') == true
```
```ruby
&quot;c&quot;.is_upcase? == false
&quot;C&quot;.is_upcase? == true
&quot;hello I AM DONALD&quot;.is_upcase? == false
&quot;HELLO I AM DONALD&quot;.is_upcase? == true
&quot;ACSKLDFJSgSKLDFJSKLDFJ&quot;.is_upcase? == false
&quot;ACSKLDFJSGSKLDFJSKLDFJ&quot;.is_upcase? == true
```

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

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
      <td>8 kyu</td>
      <td> <a href="https://www.codewars.com/users/donaldsebleung">donaldsebleung</a></td>
      <td> <a href="https://www.codewars.com/users/matt%20c">matt c</a></td>
      <td>2016-02-24 08:36</td>
      <td>2016-02-24 21:11</td>
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
    <td>Object-oriented Programming</td>
  </tr>
  <tr>
    <td>Programming Paradigms</td>
  </tr>
</table>