'use strict'
const digest = require('../')
const bytes = require('bytesish')
const assert = require('assert')
const tsame = require('tsame')
const { it } = require('mocha')

const test = it

const same = (x, y) => assert.ok(tsame(x, y))

const b64 = {
  sha256: 'uU0nuZNNPgilLlLX2n2r+sSE7+N6U4DukIj3rOLvzek='
}
test('all sha hashes', async () => {
  const b = await digest('hello world')
  same(bytes.toString(b, 'base64'), b64.sha256)
})

test('test bad algorith', async () => {
  let b
  try {
    b = await digest('hello world', 'fail')
  } catch (e) {
    same(e.message, 'Unsupported algorithm')
  }
  assert(!b)
})
