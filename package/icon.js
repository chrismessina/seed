import classnames from 'classnames/dedupe'
import DEFAULT_ATTRS from './default-attrs.json'

class Icon {
    constructor(name, contents) {
        this.name = name
        this.contents = contents
        this.attrs = {
            ...DEFAULT_ATTRS,
            ...{ class: `seed seed-${name}` },
        }
    }

    toSvg(attrs = {}) {
        const combinedAttrs = {
            ...this.attrs,
            ...attrs,
            ...{ class: classnames(this.attrs.class, attrs.class) },
        }

        const svg = `<svg ${attrsToString(combinedAttrs)}>${
            this.contents
        }</svg>`
        return svg
    }

    toString() {
        return this.contents
    }
}

function attrsToString(attrs) {
    return Object.keys(attrs)
        .map(key => `${key}="${attrs[key]}"`)
        .join(' ')
}

export default Icon
