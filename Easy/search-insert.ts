function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      console.log(i);
      return i;
    } else if (i === nums.length && target >= nums[i]) {
      console.log(i + 1);
      return i + 1;
    }
  }
  return nums.length;
}

console.log(searchInsert([1, 3, 5, 6], 7));
