'use strict'

/**
 * Determine if value is object.
 * @param {Any} val
 */
function isObj (val) {
  if (val === null) { return false }
  return ((typeof val === 'function') || (typeof val === 'object'))
}

/**
 * Separate path into segments.
 * @param {String} path
 * @param {String} sep
 * @param {String} escape
 */
function getPathSegments (path, sep = '/', escape = '**') {
  const pathArr = path.split(sep) || []
  const segments = []

  for (let i = 0; i < pathArr.length; i++) {
    let segment = pathArr[i]
    const escapeIndex = segment.indexOf(escape)

    if (escapeIndex !== -1 && pathArr[i + 1] !== undefined) {
      segment = segment.slice(0, segment.indexOf(escape)) + sep + pathArr[++i]
    }

    segments.push(segment)
  }

  return segments
}

/**
 * Retrieve nested property from object.
 * @param {Object} obj
 * @param {String} path
 * @param {Object} opts
 */
function get (obj, path, opts = {}) {
  const {defaultValue, sep = '/', escape = '\\'} = opts

  if (!isObj(obj) || typeof path !== 'string') {
    return defaultValue && obj
  }

  const pathArr = getPathSegments(path, sep, escape)

  for (let i = 0; i < pathArr.length; i++) {
    obj = obj[pathArr[i]]

    if ((obj === undefined || obj === null)) { return defaultValue }
  }

  return obj
}

/**
 * Set a property on a object.
 * @param {Object} obj
 * @param {String} path
 * @param {Any} value
 * @param {Object} opts
 */
function set (obj, path, value, opts = {}) {
  const { sep = '/', escape = '\\' } = opts

  if (!isObj(obj) || typeof path !== 'string') {
    return false
  }

  const pathArr = getPathSegments(path, sep, escape)
  const initObj = obj

  for (let i = 0; i < pathArr.length; i++) {
    const segment = pathArr[i]

    if (!isObj(obj[segment])) {
      obj[segment] = {}
    }

    if (i === pathArr.length - 1) {
      obj[segment] = value
    }

    obj = obj[segment]
  }

  return initObj
}

/**
 * Remove property from object.
 * @param {Object} obj
 * @param {String} path
 * @param {Object} opts
 */
function remove (obj, path, opts = {}) {
  const { sep = '/', escape = '\\' } = opts

  if (!isObj(obj) || typeof path !== 'string') {
    return false
  }

  const pathArr = getPathSegments(path, sep, escape)

  for (let i = 0; i < pathArr.length; i++) {
    const p = pathArr[i]

    if (i === pathArr.length - 1) {
      delete obj[p]
      return true
    }

    obj = obj[p]

    if (!isObj(obj)) {
      return false
    }
  }
}

module.exports = {
  get,
  set,
  remove
}
