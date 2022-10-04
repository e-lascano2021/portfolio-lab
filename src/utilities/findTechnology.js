function findTechnology(path) {
  const title = path.replace('/technologies/', '')
  console.log(title)
  return title
}

export default findTechnology