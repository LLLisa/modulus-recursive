function modulus(num1, num2) {
    if (num1 < num2) {
        return num1;
    }
    num1 -= num2;
    return modulus(num1, num2);
}

console.log(modulus(52, 5));
