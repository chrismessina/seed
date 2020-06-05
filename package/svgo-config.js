const svgoOptions = [
    { convertShapeToPath: false },
    { convertPathData: { noSpaceAfterFlags: false } },
    { mergePaths: { noSpaceAfterFlags: false } },
    { inlineStyles: { onlyMatchedOnce: false } },
    { removeTitle: true },
    { removeHiddenElems: false },
]

export default svgoOptions