import Svgo from 'svgo'
import cheerio from 'cheerio'
import { format } from 'prettier'
import DEFAULT_ATTRS from '../../package/default-attrs.json'
import svgoOptions from '../../package/svgo-config'

function setAttrs(svg) {
    const $ = cheerio.load(svg)

    Object.keys(DEFAULT_ATTRS).forEach(key =>
        $('svg').attr(key, DEFAULT_ATTRS[key])
    )

    return $('body').html()
}

const optimizeSvg = svg => {
    const svgo = new Svgo({
        plugins: svgoOptions,
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
