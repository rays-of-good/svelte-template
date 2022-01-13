export function configureCommonJS(develop) {
  return {
    sourceMap: develop,
    transformMixedEsModules: true,
  }
}

let cjs = configureCommonJS(false)

export default cjs