package com.example.tests;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class StringUtilsTest {

    @Test
    void testIsEmpty() {
        String str = "";
        assertTrue(str.isEmpty(), "String should be empty");
    }
}
