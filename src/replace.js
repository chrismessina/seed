import classnames from 'classnames/dedupe'

import icons from './icons'

/**
 * Replace all HTML elements that have a `data-seed` attribute with SVG markup
 * corresponding to the element's `data-seed` attribute value.
 * @param {Object} attrs
 */
function replace(attrs = {}) {
  if (typeof document === 'undefined') {
    throw new Error('`seed.replace()` only works in a browser environment.')
  }

  // eslint-disable-next-line no-undef
  const elementsToReplace = document.querySelectorAll('[data-seed]')

  Array.from(elementsToReplace).forEach(element =>
    replaceElement(element, attrs)
  )
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-seed` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element, attrs = {}) {
  const elementAttrs = getAttrs(element)
  const name = elementAttrs['data-seed']
  delete elementAttrs['data-seed']

  const svgString = icons[name].toSvg({
    ...attrs,
    ...elementAttrs,
    ...{ class: classnames(attrs.class, elementAttrs.class) }
  })
  // eslint-disable-next-line no-undef
  const svgDocument = new DOMParser().parseFromString(
    svgString,
    'image/svg+xml'
  )
  const svgElement = svgDocument.querySelector('svg')

  element.parentNode.replaceChild(svgElement, element)
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value
    return attrs
  }, {})
}

export default replace
