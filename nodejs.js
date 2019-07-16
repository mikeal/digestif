'use strict'
const bytes = require('bytesish')
const crypto = require('crypto')

const s = _s => {
  if (!_s.startsWith('sha') && !_s.startsWith('SHA')) throw new Error('Unsupported algorithm')
  return _s.toLowerCase().replace(/-/g, '')
}

module.exports = (_from, algo = 'sha256') => new Promise(resolve => {
  return resolve(crypto.createHash(s(algo)).update(bytes.native(_from)).digest())
})
