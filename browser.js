/* globals crypto */
'use strict'
const bytes = require('bytesish')

const s = _s => {
  if (_s.startsWith('sha')) return 'SHA-' + _s.slice(3)
  return _s
}

module.exports = (_from, algo = 'SHA-256') => crypto.subtle.digest(s(algo), bytes(_from))
