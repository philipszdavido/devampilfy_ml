import tensorflow as tf

x_ = tf.placeholder(tf.float32, shape=[4,2], name = 'x-input')
# x_ = [[1,1],[1,0],[0,1],[0,0]]
y_ = tf.placeholder(tf.float32, shape=[4,1], name = 'y-input')
# y_ = [[0],[1],[1],[1]]

Theta1 = tf.Variable(tf.random_uniform([2,2], -1, 1), name = "Theta1")
# Theta1 = [[-1,1],[1,-1]]
Theta2 = tf.Variable(tf.random_uniform([2,1], -1, 1), name = "Theta2")
# Theta2 = [[1],[-1]]

Bias1 = tf.Variable(tf.zeros([2]), name = "Bias1")
Bias2 = tf.Variable(tf.zeros([1]), name = "Bias2")

m1 = tf.matmul(x_, Theta1)

A2 = tf.sigmoid(tf.matmul(x_, Theta1) + Bias1)

XOR_X = [[0,0],[0,1],[1,0],[1,1]]
XOR_Y = [[0],[1],[1],[0]]

init = tf.global_variables_initializer()
sess = tf.Session()

sess.run(init)
print('\n ', sess.run(Theta1))
#print('\n ', sess.run(Bias1))
print('\n ', XOR_X)
print('\n ', sess.run(m1, feed_dict={x_: XOR_X, y_: XOR_Y}))
