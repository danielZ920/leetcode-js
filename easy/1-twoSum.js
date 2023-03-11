// https://leetcode-cn.com/problems/two-sum/
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

//  

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]
//  

// 提示：

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// 只会存在一个有效答案

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1.暴力破解
var twoSum = function(nums, target) {
  let len = nums.length;
  if (len < 2) return [];
  
  for (let i  = 0; i < len; i++) {
    // 同一元素不允许重复出现
    for (let j = i + 1; j< len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [];
};

const nums = [2, 3, 5, 7, 9]
const target = 9;
console.log(twoSum(nums, target))

// 2.map
var twoSum2 = function (nums, target) {
  var map = new Map();

  for (let i = 0, lens = nums.length; i < lens; i++) {
    if (map.has(target - nums[i])) { // 算出目标值和当前值的差，检测hashmap是否存在该差，如果有直接返回
      return [map.get(target - nums[i]), i]
    } else { // 如果没有 以当前值和当前索引为k,v存入哈希表
      return map.set(nums[i], i);
    }
  }
  return []
}

console.log(twoSum2(nums, target));