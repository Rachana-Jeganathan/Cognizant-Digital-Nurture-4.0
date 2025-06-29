package com.example.tests;

import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({
        MathUtilsTest.class,
        StringUtilsTest.class
})
public class AllTests {
    // No code needed – just annotations
}
