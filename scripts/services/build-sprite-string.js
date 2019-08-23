import DEFAULT_ATTRS from '../../package/default-attrs.json'

function buildSpriteString(icons) {
    const symbols = Object.keys(icons)
        .map(icon => toSvgSymbol(icon, icons[icon]))
        .join('')

    return `<svg xmlns="${DEFAULT_ATTRS.xmlns}"><defs>${symbols}</defs></svg>`
}

function toSvgSymbol(name, contents) {
    return `<symbol id="${name}" viewBox="${DEFAULT_ATTRS.viewBox}">${contents}</symbol>`
}

export default buildSpriteString
