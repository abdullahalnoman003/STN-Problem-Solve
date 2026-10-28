// Problem 1: Staircase 
let staircase = (n) => {
    let stair = [];
    for (let i = 1; i <= n; i++) {
        let space = ' '.repeat(n - i);
        let hash = '#'.repeat(i);
        stair.push(space + hash);
    }
    return stair.join('\n');
}

// console.log(staircase(6));

// Problem 2: Grading Students 

let gradingStudents = (grades) => {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        } else {
            let rounded = Math.ceil(grade / 5) * 5;
            return rounded - grade < 3 ? rounded : grade;
        }
    });
}
// console.log(gradingStudents([73, 67, 38, 33])); 

// Problem 3: Time Conversion

let timeConversion = (s) => {
    
}

// Problem 4: String Repeat

let repeatStr = (n, s) => {
    if (n < 0) return '';
    return s.repeat(n);
}

console.log(repeatStr(5, 'hello'));


// Problem 5: Reversed Strings

let solution = (str) => {
    return str.split('').reverse().join('');
}
// console.log(solution('world'));

// Problem 6: Sum of Positive

let positiveSum = (arr) => {
    
    sum = 0;
    arr.map(num =>{
        if(num > 0){
            sum += num;
        }
    })
    return sum;
}

console.log(positiveSum([1, -4, 7, 12]));
// Problem 7: Summation

let summation = (num) => {
    
}

// Problem 8: Convert a Boolean to a String

let booleanToString = (b) => {
    
}

// Problem 9: Fizz Buzz

let fizzBuzz = (n) => {
    
}

// Problem 10: Running Sum of 1D Array

let runningSum = (nums) => {
    
}

// Problem 11: Richest Customer Wealth

let maximumWealth = (accounts) => {
    
}

// Problem 12: Remove Duplicates from Sorted Array

let removeDuplicates = (nums) => {
    
}

// Problem 13: Contains Duplicate

let containsDuplicate = (nums) => {
    
}

// Problem 14: Move Zeroes

let moveZeroes = (nums) => {
    
}

// Problem 15: Merge Sorted Array

let merge = (nums1, m, nums2, n) => {
    
}

// Problem 16: 3Sum

let threeSum = (nums) => {
    
}

// Problem 17: Plus One

let plusOne = (digits) => {
    
}

// Problem 18: Reverse String

let reverseString = (s) => {
    
}

// Problem 19: Length of Last Word

let lengthOfLastWord = (s) => {
    
}

// Problem 20: Longest Common Prefix

let longestCommonPrefix = (strs) => {
    
}
