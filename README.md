# Cipher.js

Shifting cipher (the key changes for every character in the input string).

You start with a given offset (`A = B` for instance).  
Then, for every character in the input, the key shifts a position to the left for consonants and to the right for vowels.

Usage:

```js
const cipher = require('cipher');

cipher.encode("hello world", cipher.getKeyFrom("b")); // "igmnrbzsupi"

cipher.decode("igmnrbzsupi", cipher.getKeyFrom("b")); // "hello world"

// getKeyFrom() gives you an offset alphabet, like so:
// { "a": "b", "b": "c", // ...et cetera }
```
