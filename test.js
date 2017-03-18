/* eslint-env jest */
'use strict'

const prop = require('./')

test('get', () => {
  const obj = {foo: {bar: {baz: 5}, 'oof/bax': {rab: 'zab'}}}

  expect(prop.get(obj, 'foo/bar')).toEqual({baz: 5})
  expect(prop.get(obj, 'foo$$bar', {sep: '$$'})).toEqual({baz: 5})
  expect(prop.get(obj, 'foo.bar', {sep: '.'})).toEqual({baz: 5})
  expect(prop.get(obj, 'foobarbaz', {defaultValue: 'foo'})).toBe('foo')
})

test('set', () => {
  const obj = {foo: 5}

  expect(prop.set(obj, 'foo/bar', 'Hi')).toEqual({foo: { bar: 'Hi' }})
})

test('remove', () => {
  const obj = {foo: {bar: 5}}

  expect(prop.remove(obj, 'foo/bar')).toBeTruthy()
})
