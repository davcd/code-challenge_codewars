
<h1><a href="https://www.codewars.com/kata/577ff15ad648a14b780000e7">Welcome!</a></h1>
<p>
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win. 

### The Task
- Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
- Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

### The Database

```javascript
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
```
```python
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
```
```ruby
'english'=&gt;'Welcome',
'czech'=&gt;'Vitejte',
'danish'=&gt;'Velkomst',
'dutch'=&gt;'Welkom',
'estonian'=&gt;'Tere tulemast',
'finnish'=&gt;'Tervetuloa',
'flemish'=&gt;'Welgekomen',
'french'=&gt;'Bienvenue',
'german'=&gt;'Willkommen',
'irish'=&gt;'Failte',
'italian'=&gt;'Benvenuto',
'latvian'=&gt;'Gaidits',
'lithuanian'=&gt;'Laukiamas',
'polish'=&gt;'Witamy',
'spanish'=&gt;'Bienvenido',
'swedish'=&gt;'Valkommen',
'welsh'=&gt;'Croeso'
```
```csharp
{&quot;english&quot;, &quot;Welcome&quot;},
{&quot;czech&quot;, &quot;Vitejte&quot;},
{&quot;danish&quot;, &quot;Velkomst&quot;},
{&quot;dutch&quot;, &quot;Welkom&quot;},
{&quot;estonian&quot;, &quot;Tere tulemast&quot;},
{&quot;finnish&quot;, &quot;Tervetuloa&quot;},
{&quot;flemish&quot;, &quot;Welgekomen&quot;},
{&quot;french&quot;, &quot;Bienvenue&quot;},
{&quot;german&quot;, &quot;Willkommen&quot;},
{&quot;irish&quot;, &quot;Failte&quot;},
{&quot;italian&quot;, &quot;Benvenuto&quot;},
{&quot;latvian&quot;, &quot;Gaidits&quot;},
{&quot;lithuanian&quot;, &quot;Laukiamas&quot;},
{&quot;polish&quot;, &quot;Witamy&quot;},
{&quot;spanish&quot;, &quot;Bienvenido&quot;},
{&quot;swedish&quot;, &quot;Valkommen&quot;},
{&quot;welsh&quot;, &quot;Croeso&quot;}
```
```elixir
english: &quot;Welcome&quot;,
czech: &quot;Vitejte&quot;,
danish: &quot;Velkomst&quot;,
dutch: &quot;Welkom&quot;,
estonian: &quot;Tere tulemast&quot;,
finnish: &quot;Tervetuloa&quot;,
flemish: &quot;Welgekomen&quot;,
french: &quot;Bienvenue&quot;,
german: &quot;Willkommen&quot;,
irish: &quot;Failte&quot;,
italian: &quot;Benvenuto&quot;,
latvian: &quot;Gaidits&quot;,
lithuanian: &quot;Laukiamas&quot;,
polish: &quot;Witamy&quot;,
spanish: &quot;Bienvenido&quot;,
swedish: &quot;Valkommen&quot;,
welsh: &quot;Croeso&quot;
```
``` java
english: &quot;Welcome&quot;,
czech: &quot;Vitejte&quot;,
danish: &quot;Velkomst&quot;,
dutch: &quot;Welkom&quot;,
estonian: &quot;Tere tulemast&quot;,
finnish: &quot;Tervetuloa&quot;,
flemish: &quot;Welgekomen&quot;,
french: &quot;Bienvenue&quot;,
german: &quot;Willkommen&quot;,
irish: &quot;Failte&quot;,
italian: &quot;Benvenuto&quot;,
latvian: &quot;Gaidits&quot;,
lithuanian: &quot;Laukiamas&quot;,
polish: &quot;Witamy&quot;,
spanish: &quot;Bienvenido&quot;,
swedish: &quot;Valkommen&quot;,
welsh: &quot;Croeso&quot;
```
```rust
(&quot;english&quot;, &quot;Welcome&quot;),
(&quot;czech&quot;, &quot;Vitejte&quot;),
(&quot;danish&quot;, &quot;Velkomst&quot;),
(&quot;dutch&quot;, &quot;Welkom&quot;),
(&quot;estonian&quot;, &quot;Tere tulemast&quot;),
(&quot;finnish&quot;, &quot;Tervetuloa&quot;),
(&quot;flemish&quot;, &quot;Welgekomen&quot;),
(&quot;french&quot;, &quot;Bienvenue&quot;),
(&quot;german&quot;, &quot;Willkommen&quot;),
(&quot;irish&quot;, &quot;Failte&quot;),
(&quot;italian&quot;, &quot;Benvenuto&quot;),
(&quot;latvian&quot;, &quot;Gaidits&quot;),
(&quot;lithuanian&quot;, &quot;Laukiamas&quot;),
(&quot;polish&quot;, &quot;Witamy&quot;),
(&quot;spanish&quot;, &quot;Bienvenido&quot;),
(&quot;swedish&quot;, &quot;Valkommen&quot;),
(&quot;welsh&quot;, &quot;Croeso&quot;)
```


Possible invalid inputs include:
~~~~
IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied
~~~~

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
      <td> <a href="https://www.codewars.com/users/lucymonie">lucymonie</a></td>
      <td> <a href="https://www.codewars.com/users/donaldsebleung">donaldsebleung</a></td>
      <td>2016-07-08 21:12</td>
      <td>2016-07-11 16:49</td>
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
    <td>Hashes</td>
  </tr>
  <tr>
    <td>Data Structures</td>
  </tr>
  <tr>
    <td>Objects</td>
  </tr>
  <tr>
    <td>Data Types</td>
  </tr>
</table>