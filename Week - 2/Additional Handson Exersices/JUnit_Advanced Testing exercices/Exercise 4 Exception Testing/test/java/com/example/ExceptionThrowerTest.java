package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ExceptionThrowerTest {

    @Test
    void testThrowException() {
        ExceptionThrower thrower = new ExceptionThrower();

        // Test will pass if this method throws IllegalArgumentException
        assertThrows(IllegalArgumentException.class, thrower::throwException);
    }
}
