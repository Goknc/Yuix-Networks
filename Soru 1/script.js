var res1 = 0;
var res2 = 0;

for (let i = 0; i < 10; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        res1 += i
    }
}

console.log(res1)

for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        res2 += i
    }
}

console.log(res2)

