function findTechnology(path) {
  const title = path.replace('/technologies/', '')
  return title
}

export default findTechnology