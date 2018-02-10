const step_gradient = (b_current, m_current, points, learningRate) => {

    b_gradient = 0
    m_gradient = 0
    N = points.length
    for (var i = 0; i < points.length; i++) {
        x = points[i][0]
        y = points[i][1]
        b_gradient += -(2 / N) * (y - ((m_current * x) + b_current))
        m_gradient += -(2 / N) * x * (y - ((m_current * x) + b_current))
    }
    new_b = b_current - (learningRate * b_gradient)
    new_m = m_current - (learningRate * m_gradient)
    return [new_b, new_m]
}

const gradient_descent_runner = (points, starting_b, starting_m, learning_rate, num_iterations) => {
    var b = starting_b
    var m = starting_m
    for (var index = 0; index < num_iterations; index++) {
        b = step_gradient(b, m, points, learning_rate)[0]
        m = step_gradient(b, m, points, learning_rate)[1]
    }
    return [b, m]
}
const test = (points, b) => {
    //y = mx + b
    var res = []
    for (var i = 0; i < points.length; i++) {
        x = points[i][0]
        res.push(b[1] * x + b[0])
    }
    return res
}
var points = [
    //x, y
    [1, 1],
    [2, 3],
    [4, 3],
    [3, 2],
    [5, 5]
]

const learning_rate = 0.0001
const initial_b = 0 // initial y-intercept guess
const initial_m = 0 // initial slope guess
const num_iterations = 2000

console.log('Running')
b = gradient_descent_runner(points, initial_b, initial_m, learning_rate, num_iterations)
console.log(b)
console.log('....... Running Tests .......\n')
console.log(test(points, b))