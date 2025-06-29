package com.example;

import org.junit.jupiter.api.Test;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTimeout;

public class PerformanceTesterTest {

    @Test
    void testPerformTaskCompletesInTime() {
        PerformanceTester tester = new PerformanceTester();

        // Passes if performTask() finishes within 200 milliseconds
        assertTimeout(Duration.ofMillis(200), tester::performTask);
    }
}
