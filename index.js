const x = [1, 4, 5, 6, 7]
const y = [4, 5, 6, 7, 8]
const w1 = 9.9
const w2 = 9.7
    //activation = (input1 * w1) + (input2 * w2)
const actv = (i1, i2) => {
    return (i1 * w1) + (i2 * w2);
}
const thresFn = (actv) => {
    return actv >= 1 ? 1 : 0;
}
console.log(thresFn(actv(1, 1)))

const x_ = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
]
const y_ = [1, 0, 0, 0];
const func = (x1, x2) => {
    return (6)
}