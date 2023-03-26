// Find the GCD (greatest common denominator) of 2 numbers using Euclid's algorithm
// GCD - largest integer that divides both numbers without leaving a remainder

const gcd = (a, b) => {
  while(b !== 0) {
    const aStore = a;
    a = b;
    b = aStore % b;
  }
  
  return a;
};

console.log(gcd(20, 8)); // 4
console.log(gcd(60, 96)); // 12
