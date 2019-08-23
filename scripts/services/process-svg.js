import Svgo from 'svgo'
import cheerio from 'cheerio'
import { format } from 'prettier'

import DEFAULT_ATTRS from '../../package/default-attrs.json'

const defaultOptions = [
    { convertShapeToPath: false },
    { convertPathData: { noSpaceAfterFlags: false } },
    { mergePaths: false },
    { inlineStyles: { onlyMatchedOnce: false } },
    { removeAttrs: { attrs: '(fill|stroke|clip-rule|fill-rule.*)' } },
    { removeTitle: true },
    { removeHiddenElems: false },
]

function setAttrs(svg) {
    const $ = cheerio.load(svg)

    Object.keys(DEFAULT_ATTRS).forEach(key =>
        $('svg').attr(key, DEFAULT_ATTRS[key])
    )

    return $('body').html()
}

const optimizeSvg = svg => {
    const svgo = new Svgo({
        plugins: defaultOptions,
    })

    return svgo.optimize(svg).then(({ data }) => data)
}

function processSvg(svg) {
    return optimizeSvg(svg)
        .then(setAttrs)
        .then(result => format(result, { parser: 'babel' }))
        .then(svg => svg.replace(/;/g, ''))
}

export default processSvg
