import Svgo from 'svgo'
import cheerio from 'cheerio'
import { format } from 'prettier'
import DEFAULT_ATTRS from '../../package/default-attrs.json'

function setAttrs(svg) {
    const $ = cheerio.load(svg)

    Object.keys(DEFAULT_ATTRS).forEach(key =>
        $('svg').attr(key, DEFAULT_ATTRS[key])
    )

    return $('body').html()
}

const optimizeSvg = (svg, path) => {
    const uniquePrefix = path.replace(/.svg/g, '')
    const svgo = new Svgo({
        plugins: [
            { prefixIds: { prefix: uniquePrefix } },
            { cleanupIDs: { force: true } }
        ]
    })

    return svgo.optimize(svg).then(({ data }) => data)
} 

function processSvg(svg, path) {
    return optimizeSvg(svg, path)
        .then(setAttrs)
        .then(result => format(result, { parser: 'babel' }))
        .then(svg => svg.replace(/;/g, ''))
}

export default processSvg


