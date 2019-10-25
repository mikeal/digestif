# digestif

![2954](https://img.shields.io/badge/compiled%20bundle-3k-brightgreen) ![1173](https://img.shields.io/badge/gzipped%20bundle-1k-brightgreen)

Cross-platform SHA2 hash digests.

This library produces digest hashes for any binary type or string
with a very low footprint and impact on bundle size in browsers.

It also works in Node.js but still restricts itself to the hash
types supported in the browser without external dependencies.

```javascript
const digest = require('digestif')
let hash = digest('hello world') // defaults to sha256
assert(hash instanceof ArrayBuffer)

// Accepts any binary type
hash = digest(new Uint8Array(20))

// Supports SHA2 256, 384 and 512
hash = digest('hello world', 'SHA-512')
```
