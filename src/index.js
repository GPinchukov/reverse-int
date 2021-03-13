module.exports = function reverse (n) {
    let ar = n.toString().split('').reverse().join('');
    return parseInt(ar);
}
