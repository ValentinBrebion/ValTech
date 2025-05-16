---
next: false
prev: false
---

# Regex

Regular expressions (or regex) are patterns used to match, search, extract, or manipulate character strings. They are powerful for processing complex texts and are found in many programming languages such as Python, JavaScript, Java, Perl, etc.

## Basic Concept
A regex is a sequence of characters that forms a pattern. This pattern can be used to:

- Validate: Check if a string matches a particular pattern (e.g., is it an email address?).
- Search: Find all occurrences of a pattern in a text.
- Extract: Isolate certain parts of a string that match a pattern.
- Replace: Modify a string based on parts matching a pattern.
<br>

## Basic Regex Syntax

| Character        |      Description      |
| ------------- | :-----------: |
| .      | Matches any character except a line break |
| \d    |   Matches a digit ([0-9])    |
| \D |   Matches anything except a digit ([^0-9])    |
| \w |   Matches an alphanumeric character ([a-zA-Z0-9_])    |
| \W |   Matches anything except an alphanumeric character    |
| \s |   Matches a space, tab, or line break   |
| \S |   Matches anything except a space   |
| ^ |   Start of a string   |
| $ |   End of a string   |
| [...] |   Matches a set of characters   |
| [^...] |  Matches anything except the specified set of characters   |
| ` | `   |
| (abc) | Capture group to isolate parts of the string  |

## Quantifiers
Quantifiers allow you to specify the ***number of times an element can appear***.

| Quantifier        |      Description      |
| ------------- | :-----------: |
| *     | 0 or more times |
| +     | 1 or more times |
| ?     | 0 or 1 time (optional) |
| n    | Exactly n times |
| n,    | At least n times |

## Regex Examples
Email address validation:

```regex
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
```

::: tip <h4>Explanation:</h4>
- `[a-zA-Z0-9._%+-]+` : One or more letters, numbers, or certain special characters before the @.
- `@[a-zA-Z0-9.-]+` : The domain must contain letters, numbers, dots, or hyphens.
- `\.[a-zA-Z]{2,}` : A dot followed by two or more letters for the top-level domain (.com, .org, etc.).
:::

Find all phone numbers in the format "123-456-7890":

```regex
\d{3}-\d{3}-\d{4}
```

::: tip <h4>Explanation:</h4>
- `\d{3}` : Three digits.
- `\d{3}` : Three more digits.
- `\d{4}` : Four digits.
:::

Validate a US ZIP code (5 digits):

```regex
\d{5}
```

## Capture Groups
Capture groups allow you to capture sub-parts of a string and reuse them.

::: tip <h4>Example: Extract the domain from an email address</h4>
```regex
([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})
```
If we apply this regex to "name@domain.com", here's the result:
* Group 1: `"name"`
* Group 2: `"domain.com"`
:::

## References to Captured Groups
After capturing groups, you can refer to them for replacement operations.

Regex to replace a phone number:
```regex
(\d{3})-(\d{3})-(\d{4})
```
And replacing with:

```text
($1) $2-$3
```
This will convert the number "123-456-7890" to "(123) 456-7890".

## Character Classes
Character classes are used to define a set of characters that you want to match.

| Class        |      Description      |
| ------------- | :-----------: |
| [abc]    | Matches 'a', 'b', or 'c' |
| [a-z]   | Matches any lowercase letter |
| [A-Z]   | Matches any uppercase letter |
| [0-9]   | Matches any digit |
| [a-zA-Z0-9]   | Matches an uppercase letter, lowercase letter, or digit |
| [^abc]   | Matches anything except 'a', 'b', or 'c' |

## Start and End Anchors
* `^` : Matches the start of a string. Example: ^Hello matches a string that starts with "Hello".
* `$` : Matches the end of a string. Example: world$ matches a string that ends with "world".

::: info Example:
Match a string that starts with a word and ends with a period:
```regex
^\w+.*\.$
```
:::

## Modifiers (flags)
Modifiers allow you to modify the behavior of a regex:

* `i` : Case-insensitive (e.g., Hello matches "hello", "HELLO", etc.).
* `g` : Global search, allowing to find all occurrences in a string.
* `m` : Multi-line mode, allowing to match the start (^) or end ($) of each line.

Example:
For a case-insensitive search:
```regex
/hello/i
```

### Code Usage Examples (Python)
a) ***Simple matching:***
```python
import re

text = "Hello, here's my email: name@domain.com"
pattern = r'\b\w+@\w+\.\w+\b'
email = re.search(pattern, text)

if email:
    print("Email address found:", email.group())
```

b) ***Text replacement:***
```python
import re

text = "Phone number: 123-456-7890"
new_text = re.sub(r'(\d{3})-(\d{3})-(\d{4})', r'(\1) \2-\3', text)
print(new_text)
``` 