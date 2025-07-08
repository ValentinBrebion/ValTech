# Course on Testing

## Introduction
Testing is a crucial step in the development of software, products, or systems, aimed at ensuring their quality, reliability, and compliance with specified requirements. Tests help identify defects, errors, or malfunctions before deployment or final delivery.

## Types of Tests

### Technical Tests
- **Objective**: Verify implementations at different granularities and on various technical aspects.
- **Examples**:
  - **Unit Tests (UT)**: Verify that each individual unit or component of the code works correctly. For example, testing a function that calculates the sum of two numbers to ensure it returns the correct result.
  - **Integration Tests (IT)**: Test the interaction between different modules or components to ensure they work together correctly. For example, verifying that the payment module works well with the inventory management module.
  - **Performance Tests**: Measure the responsiveness, stability, and scalability of the system under different workloads. For example, testing how a website behaves with a large number of simultaneous users.
  - **Security Tests**: Identify and fix security vulnerabilities in the system. For example, verifying that sensitive data is properly encrypted.

### Functional Tests
- **Objective**: Verify functional aspects at a higher granularity, particularly compliance with functional specifications.
- **Examples**:
  - **Functional Acceptance Tests**: Verify that the system or application meets the functional requirements as defined by the business owner. For example, ensuring a user can create an account and log in without issues.
  - **User Journey Tests**: Verify that different user journeys are logical, error-free, and smooth. For example, ensuring a user can easily navigate from the homepage to the payment page.

### Bug Fixing
- **Objective**: Identify and fix anomalies detected during testing.
- **Example**: If a test reveals that a button doesn't work, the developer must identify the cause of the problem and fix it.

### Other Types of Tests
- **Regression Tests**: Ensure that new modifications haven't introduced bugs in existing functionality. For example, after adding a new feature, verify that old features still work correctly.
- **Compatibility Tests**: Verify that the application works correctly on different browsers, operating systems, and hardware configurations. For example, testing a website on Chrome, Firefox, and Safari.
- **Compliance Tests**: Ensure the system complies with legal regulations, industry standards, and internal company policies. For example, verifying that the system complies with GDPR for personal data protection.
- **Exploratory Tests**: Use application features without a framework to detect anomalies or problems outside planned test scenarios. For example, freely navigating an application to discover unanticipated bugs.
- **Training/Documentation Tests**: Verify that user documentation is clear and sufficient to allow effective use of the system. For example, ensuring that the user manual is understandable and covers all important features.

By integrating these different types of tests into the development process, teams can improve the overall quality of their products and reduce the risk of failures after deployment.

## Asserts and Tests
When conducting tests, it's important to distinguish between tests and asserts.

- A test is a method executed within the Test class
- An assert is a method of the inherited class that allows you to affirm something. Each assertion must be true for the test to pass.
- The result can be in the form:

```
Tests: 5, Assertions: 8, Failures: 1.
```

This means that:

- 5 different tests were executed through 5 methods that start with the word test.
- 8 asserts were performed
- 1 function failed due to 1 false assert (assertion)

In this case, the test failed. 