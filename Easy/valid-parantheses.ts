function isValid(s: string): boolean {
  if (s.length === 0) return false;
  let bracketMap = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  let stack: string[] = [];

  for (let char of s) {
    if (char === "[" || char === "{" || char === "(") stack.push(char);
    else {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

isValid("([])");
