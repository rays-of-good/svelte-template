export function configureTypescript(develop) {
  return {
    sourceMap: develop,
  }
}

let t = configureTypescript(false)

export default t