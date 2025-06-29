import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    // Create an instance to test
    private final Calculator calculator = new Calculator();

    @Test
    void testAdd() {
        // Test positive numbers
        assertEquals(5, calculator.add(2, 3));

        // Test negative numbers
        assertEquals(-1, calculator.add(2, -3));

        // Test zero
        assertEquals(0, calculator.add(0, 0));
    }

    @Test
    void testIsEven() {
        // Test even number
        assertTrue(calculator.isEven(4));

        // Test odd number
        assertFalse(calculator.isEven(5));

        // Test zero (edge case)
        assertTrue(calculator.isEven(0));
    }

    @Test
    void testDivide() {
        // Normal division
        assertEquals(2.5, calculator.divide(5, 2), 0.001);

        // Division by zero should throw exception
        assertThrows(ArithmeticException.class, () -> calculator.divide(5, 0));
    }
}