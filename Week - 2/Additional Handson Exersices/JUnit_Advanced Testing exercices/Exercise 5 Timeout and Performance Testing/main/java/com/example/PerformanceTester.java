package com.example;

public class PerformanceTester {

    public void performTask() {
        try {
            // Simulates a delay of 100 milliseconds
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
