'use strict'

const prop = require('./')

const obj = {
  foo: {
    bar: {
      baz: 5
    },
    'oof/bax': {
      rab: 'zab'
    }
  }
}

console.log(prop.get(obj, 'foo/bar')) // {baz: 5}
console.log(prop.get(obj, 'foo$$bar', {sep: '$$'}))  // {baz: 5}
console.log(prop.get(obj, 'foo.bar', {sep: '.'}))
console.log(prop.get(obj, 'foo/oof$$/bax', {escape: '$$'})) // {rab: 'zab'}

console.log(prop.set(obj, 'foo/bar', 'Hi')) // { foo: { bar: 'Hi', 'oof/bax': { rab: 'zab' } } }
console.log(prop.set(obj, 'foo/bar/baz', 5)) // { foo: { bar: { baz: 5 }, 'oof/bax': { rab: 'zab' } } }

console.log(prop.remove(obj, 'foo/bar')) // true
console.log(obj) // { foo: { 'oof/bax': { rab: 'zab' } } }
