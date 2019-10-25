/* globals crypto */
'use strict'
const bytes = require('bytesish')

const s = _s => {
  if (_s.startsWith('sha2')) _s = 'SHA' + _s.slice(4)
  if (_s.startsWith('sha')) return 'SHA-' + _s.slice(3)

  else if (!_s.startsWith('SHA')) throw new Error('Unsupported algorithm')
  return _s
}

module.exports = (_from, algo = 'SHA-256') => crypto.subtle.digest(s(algo), bytes(_from))
