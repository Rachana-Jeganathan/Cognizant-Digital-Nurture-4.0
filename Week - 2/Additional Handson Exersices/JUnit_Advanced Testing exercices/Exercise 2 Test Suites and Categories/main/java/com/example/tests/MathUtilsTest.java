package com.example.tests;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MathUtilsTest {

    @Test
    void testAdd() {
        int result = 2 + 3;
        assertEquals(5, result, "2 + 3 should be 5");
    }
}
