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

console.log(staircase(6));