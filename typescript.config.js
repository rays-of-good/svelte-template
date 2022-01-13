export function configureTypescript(production) {
  return {
    sourceMap: !production,
    inlineSources: !production,
  }
}

let t = configureTypescript(true)

export default t