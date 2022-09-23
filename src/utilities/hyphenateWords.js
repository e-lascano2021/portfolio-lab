function hyphenateWords (str) {
  let hyphenatedWord = str.toLowerCase().replace(" ", '-');
  let cleaned = hyphenatedWord.replace(/[&/\\#, +()$~%.'":*?<>{}]/g , '');
  return cleaned
}

export default hyphenateWords