export function configureCommonJS(production) {
  return {
    sourceMap: !production,
    transformMixedEsModules: !production,
  }
}

let cjs = configureCommonJS(true)

export default cjs