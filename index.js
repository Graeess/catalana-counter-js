function countWellFormedParentheses(n) {
  if (n < 0 || n % 2 !== 0 || n > 40) {
    throw new Error("Invalid input");
  }

  const pairs = BigInt(n / 2);
  const catalan = (num) => {
    let result = 1n;
    for (let i = 0n; i < num; i++) {
      result = result * (2n * num - i) / (i + 1n); // всё в BigInt
    }
    return result / (num + 1n);
  };

  return catalan(pairs).toString();
}

module.exports = { countWellFormedParentheses };
