function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";

  let commonPrefix = "";

  for (let char of strs[0]) {
    if (strs.every((s) => s.startsWith(commonPrefix + char)))
      commonPrefix += char;
    else break;
  }
  console.log(commonPrefix);
  return commonPrefix;
}

longestCommonPrefix(["flower", "flow", "flight"]);
