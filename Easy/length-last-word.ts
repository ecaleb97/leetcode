function lengthOfLastWord(s: string): number {
  const wordsArray: string[] = s.trim().split(" ");
  const lastword = wordsArray[wordsArray.length - 1];
  return lastword.length;
}

console.log(lengthOfLastWord("Hello World"));
