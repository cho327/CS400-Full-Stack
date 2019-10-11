function *fibonacci(n, curr = 0, next = 1) {
    if (n === 0) {
        return curr;
    }
    yield curr;
    yield *fibonacci(n-1, next, curr + next);
}

let first10 = [...fibonacci(10)];
console.log(first10);