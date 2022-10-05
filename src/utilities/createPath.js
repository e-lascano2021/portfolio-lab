import hyphenateWords from "./hyphenateWords.js"

function createPath(str, base) {
  const hyphenatedWord = hyphenateWords(str)
  return `/${base}/${hyphenatedWord}`
}

export default createPath