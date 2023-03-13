const twoSum = function (nums, target) {
  const lookup = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (lookup.has(diff)) {
      return [lookup.get(diff), i];
    }
    lookup.set(nums[i], i);
  }

  return [];
};

const nums = [3, 3],
  target = 6;
console.log(twoSum(nums, target)); // [0,1]
