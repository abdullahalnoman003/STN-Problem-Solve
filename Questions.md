# Questions

## Table of Contents

- [Problem 1: Staircase](#problem-1-staircase)
- [Problem 2: Grading Students](#problem-2-grading-students)
- [Problem 3: Time Conversion](#problem-3-time-conversion)
- [Problem 4: String Repeat](#problem-4-string-repeat)
- [Problem 5: Reversed Strings](#problem-5-reversed-strings)
- [Problem 6: Sum of Positive](#problem-6-sum-of-positive)
- [Problem 7: Summation](#problem-7-summation)
- [Problem 8: Convert a Boolean to a String](#problem-8-convert-a-boolean-to-a-string)
- [Problem 9: Fizz Buzz](#problem-9-fizz-buzz)
- [Problem 10: Running Sum of 1D Array](#problem-10-running-sum-of-1d-array)
- [Problem 11: Richest Customer Wealth](#problem-11-richest-customer-wealth)
- [Problem 12: Remove Duplicates from Sorted Array](#problem-12-remove-duplicates-from-sorted-array)
- [Problem 13: Contains Duplicate](#problem-13-contains-duplicate)
- [Problem 14: Move Zeroes](#problem-14-move-zeroes)
- [Problem 15: Merge Sorted Array](#problem-15-merge-sorted-array)
- [Problem 16: 3Sum](#problem-16-3sum)
- [Problem 17: Plus One](#problem-17-plus-one)
- [Problem 18: Reverse String](#problem-18-reverse-string)
- [Problem 19: Length of Last Word](#problem-19-length-of-last-word)
- [Problem 20: Longest Common Prefix](#problem-20-longest-common-prefix)

## Problem 1: Staircase

### Problem Statement
Given an integer `n`, construct a right-aligned staircase made of `#` characters and spaces. 

**Requirements:**
- Staircase must have exactly `n` rows.
- First row: `1` `#`, second: `2` `#`s, ..., last row: `n` `#`s.
- Each row is right-aligned with leading spaces.
- Rows separated by `\n`. No trailing spaces.

### Function Signature
```js
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function(n) {

};
```

### Examples
| Input | Output |
|---|---|
| `n = 4` | <pre>   #\n  ##\n ###\n####</pre> |
| `n = 1` | <pre>#</pre> |

## Problem 2: Grading Students

### Problem Statement
Round grades based on:
1. If grade < `38` → unchanged.
2. If difference to next multiple of `5` < `3` → round up to next multiple of `5`.
3. Else → unchanged.

Return array of final grades.

### Function Signature
```js
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function(grades) {

};
```

### Examples
| Input | Output |
|---|---|
| `grades = [73, 67, 38, 33]` | `[75, 67, 40, 33]` |
| `grades = [84, 29, 57]` | `[85, 29, 57]` |

## Problem 3: Time Conversion

### Problem Statement
Convert 12-hour format time `hh:mm:ssAM/PM` to 24-hour format `HH:mm:ss`.

**Rules:**
- `12:xx:xxAM` → `00:xx:xx`
- `12:xx:xxPM` → `12:xx:xx`
- Other `PM` → add `12` to hour
- Other `AM` → unchanged

### Function Signature
```js
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function(s) {

};
```

### Examples
| Input | Output |
|---|---|
| `"07:05:45PM"` | `"19:05:45"` |
| `"12:00:00AM"` | `"00:00:00"` |
| `"12:30:45PM"` | `"12:30:45"` |

## Problem 4: String Repeat

### Problem Statement
Return a new string by repeating `s` exactly `n` times in order. If `n == 0` return `""`.

### Function Signature
```js
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function(n, s) {

};
```

### Examples
| Input | Output |
|---|---|
| `n = 3, s = "ha"` | `"hahaha"` |
| `n = 0, s = "hello"` | `""` |
| `n = 4, s = "a"` | `"aaaa"` |

## Problem 5: Reversed Strings

### Problem Statement
Return a new string with characters in reverse order. Do **not** modify the original string.

### Function Signature
```js
/**
 * @param {string} str
 * @return {string}
 */
var solution = function(str) {

};
```

### Examples
| Input | Output |
|---|---|
| `"world"` | `"dlrow"` |
| `"hello"` | `"olleh"` |
| `""` | `""` |

## Problem 6: Sum of Positive

### Problem Statement
Sum all numbers > `0` in array. Ignore `0` and negatives. If none or empty → `0`.

### Function Signature
```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function(arr) {

};
```

### Examples
| Input | Output |
|---|---|
| `[1, -4, 7, 12]` | `20` |
| `[-1, -2, 0, -5]` | `0` |

## Problem 7: Summation

### Problem Statement
Return sum of integers from `1` to `num` inclusive.

### Function Signature
```js
/**
 * @param {number} num
 * @return {number}
 */
var summation = function(num) {

};
```

### Examples
| Input | Output |
|---|---|
| `num = 8` | `36` |
| `num = 1` | `1` |

## Problem 8: Convert a Boolean to a String

### Problem Statement
Convert boolean `b` to string `"true"` or `"false"`.

### Function Signature
```js
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function(b) {

};
```

### Examples
| Input | Output |
|---|---|
| `true` | `"true"` |
| `false` | `"false"` |

## Problem 9: Fizz Buzz

### Problem Statement
For `i` from `1` to `n`, return:
- `"FizzBuzz"` if divisible by 3 and 5
- `"Fizz"` if divisible by 3 only
- `"Buzz"` if divisible by 5 only
- `i.toString()` otherwise

Return array of `n` strings.

### Function Signature
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

};
```

### Examples
| Input | Output |
|---|---|
| `n = 5` | `["1", "2", "Fizz", "4", "Buzz"]` |
| `n = 15` | `["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]` |

## Problem 10: Running Sum of 1D Array

### Problem Statement
Return array where `result[i]` = sum of `nums[0]` through `nums[i]`.

### Function Signature
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

};
```

### Examples
| Input | Output |
|---|---|
| `[1, 2, 3, 4]` | `[1, 3, 6, 10]` |
| `[1, 1, 1, 1, 1]` | `[1, 2, 3, 4, 5]` |

## Problem 11: Richest Customer Wealth

### Problem Statement
Find maximum total wealth among all customers. Wealth of a customer = sum of values in their row.

### Function Signature
```js
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

};
```

### Examples
| Input | Output |
|---|---|
| `[[1,2,3],[3,2,1]]` | `6` |
| `[[1,5],[7,3],[3,5]]` | `10` |

## Problem 12: Remove Duplicates from Sorted Array

### Problem Statement
Remove duplicates in-place from sorted array. Keep relative order. Return `k`. First `k` elements must be unique sorted values. Rest don't matter.

### Function Signature
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

};
```

### Examples
| Input | Output (return value) | Resulting array (first k) |
|---|---|---|
| `[1,1,2]` | `2` | `[1,2,...]` |
| `[0,0,1,1,1,2,2,3,3,4]` | `5` | `[0,1,2,3,4,...]` |

## Problem 13: Contains Duplicate

### Problem Statement
Return `true` if any value appears at least twice, else `false`.

### Function Signature
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

};
```

### Examples
| Input | Output |
|---|---|
| `[1,2,3,1]` | `true` |
| `[1,2,3,4]` | `false` |
| `[1,1,1,3,3,4,3,2,4,2]` | `true` |

## Problem 14: Move Zeroes

### Problem Statement
Move all `0`s to end while preserving order of non-zero elements. In-place, no extra array. Return nothing.

### Function Signature
```js
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function(nums) {

};
```

### Examples
| Input | Output after modification |
|---|---|
| `[0,1,0,3,12]` | `[1,3,12,0,0]` |
| `[0,0,1]` | `[1,0,0]` |
| `[1,2,3]` | `[1,2,3]` |

## Problem 15: Merge Sorted Array

### Problem Statement
Merge `nums2` into `nums1` in-place. `nums1` has length `m+n`, first `m` valid, last `n` reserved (zeros). `nums2` has `n` elements. Result sorted in non-decreasing order.

### Function Signature
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function(nums1, m, nums2, n) {

};
```

### Examples
| Input | Output after modification |
|---|---|
| `nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3` | `[1,2,2,3,5,6]` |
| `nums1=[1], m=1, nums2=[], n=0` | `[1]` |
| `nums1=[0], m=0, nums2=[1], n=1` | `[1]` |

## Problem 16: 3Sum

### Problem Statement
Find all unique triplets `[nums[i],nums[j],nums[k]]` with distinct indices such that sum = `0`. 
- Must use each element once per triplet
- No duplicate triplets
- Order doesn't matter
- Return empty array if none

### Function Signature
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

};
```

### Examples
| Input | Output |
|---|---|
| `[-1,0,1,2,-1,-4]` | `[[-1,-1,2],[-1,0,1]]` |
| `[0,1,1]` | `[]` |
| `[0,0,0]` | `[[0,0,0]]` |

## Problem 17: Plus One

### Problem Statement
Increment big integer represented as array of digits (most significant first). Handle carry. Leading zero only when number is `0`.

### Function Signature
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

};
```

### Examples
| Input | Output |
|---|---|
| `[1,2,9]` | `[1,3,0]` |
| `[4,3,2,1]` | `[4,3,2,2]` |
| `[9,9,9]` | `[1,0,0,0]` |

## Problem 18: Reverse String

### Problem Statement
Reverse array of characters `s` in-place. Return nothing.

### Function Signature
```js
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function(s) {

};
```

### Examples
| Input | Output after modification |
|---|---|
| `["h","e","l","l","o"]` | `["o","l","l","e","h"]` |
| `["H","a","n","n","a","h"]` | `["h","a","n","n","a","H"]` |

## Problem 19: Length of Last Word

### Problem Statement
Return length of last word in `s`. Word = maximal sequence of non-space chars. Handle leading/trailing/multiple spaces.

### Function Signature
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

};
```

### Examples
| Input | Output |
|---|---|
| `"Hello World"` | `5` |
| `"   fly me   to   the moon  "` | `4` |
| `"luffy is still joyboy"` | `6` |

## Problem 20: Longest Common Prefix

### Problem Statement
Find longest common prefix among all strings in `strs`. Return `""` if none. If one string or any empty → handle accordingly.

### Function Signature
```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

};
```

### Examples
| Input | Output |
|---|---|
| `["flower","flow","flight"]` | `"fl"` |
| `["dog","racecar","car"]` | `""` |
| `["interspecies","interstellar","interstate"]` | `"inter"`
