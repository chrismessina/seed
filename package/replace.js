import classnames from 'classnames/dedupe'

import icons from './icons'

function replace(attrs = {}) {
  if (typeof document === 'undefined') {
    throw new Error('`seed.replace()` only works in a browser environment.')
  }

  const elementsToReplace = document.querySelectorAll('[data-seed]')

  Array.from(elementsToReplace).forEach(element =>
    replaceElement(element, attrs)
  )
}

function replaceElement(element, attrs = {}) {
  const elementAttrs = getAttrs(element)
  const name = elementAttrs['data-seed']

  const svgString = icons[name].toSvg({
    ...attrs,
    ...elementAttrs,
    ...{ class: classnames(attrs.class, elementAttrs.class) }
  })

  const svgDocument = new DOMParser().parseFromString(svgString, 'text/html')
  const svgElement = svgDocument.querySelector('svg')

  element.parentNode.replaceChild(svgElement, element)
}

function getAttrs(element) {
  return Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value

    return attrs
  }, {})
}

export default replace
