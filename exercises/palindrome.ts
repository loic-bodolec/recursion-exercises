function palindrome(word: string): boolean {
  // console.log(">> palindrome", word);
  if (word.length <= 1) {
    return true;
  }
  const compare = word[0] === word[word.length - 1];
  if (!compare) return false;
  // console.log(
  //   "first&last letter equal?",
  //   word[0],
  //   word[word.length - 1],
  //   compare
  // );
  const res = palindrome(word.slice(1, -1));

  return res;
}

console.log(palindrome("ressassez"));

export default palindrome;
