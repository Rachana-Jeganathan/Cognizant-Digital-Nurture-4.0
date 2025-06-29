public class Calculator {

    // Method to add two numbers
    public int add(int a, int b) {
        return a + b;
    }

    // Method to check if a number is even
    public boolean isEven(int number) {
        return number % 2 == 0;
    }

    // Method to divide two numbers
    public double divide(int dividend, int divisor) {
        if (divisor == 0) {
            throw new ArithmeticException("Cannot divide by zero");
        }
        return (double) dividend / divisor;
    }
}