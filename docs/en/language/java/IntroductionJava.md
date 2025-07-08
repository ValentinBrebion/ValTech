---
next: false
prev: 
    text: 'Introduction to TypeScript'
    link: '/en/language/TypeScript/IntroTypeScript'
---

# Introduction to Java
Java is a widely used object-oriented programming language for developing web, mobile, and embedded applications. Created by Sun Microsystems (now owned by Oracle), Java is known for its portability, robustness, and security. This course will guide you through the fundamental concepts of Java, enabling you to understand and master this powerful language.

## History of Java
Java was developed by James Gosling and his team at Sun Microsystems in 1995. Initially designed for consumer electronic devices, Java quickly evolved to become a general-purpose programming language. Its popularity exploded with the rise of the Internet, where it became a preferred choice for web application development.

## Java Characteristics
***<u>Portability</u>***<br>
>One of Java's main advantages is its portability. Java code is compiled into bytecode, which can be executed on any machine with the Java Virtual Machine (JVM). This means you can write code once and run it anywhere.

***<u>Object-Oriented</u>***<br>
>Java is an object-oriented language, meaning it uses concepts such as classes, objects, inheritance, polymorphism, and encapsulation. These concepts allow code to be structured in a modular and reusable way.

***<u>Security</u>***<br>
>Java offers several security mechanisms, including the security manager, security policies, and security classes. These mechanisms help protect applications against unauthorized access and attacks.

***<u>Robustness</u>***<br>
>Java is designed to be robust, with strict exception handling and type checking. This helps prevent common errors and improve application reliability.

***<u>Multithreading</u>***<br>
>Java supports multithreading, allowing multiple threads to execute simultaneously. This is particularly useful for applications requiring high performance and increased responsiveness.

## Installing Java
To start developing in Java, you need to install the Java Development Kit (JDK). Here are the steps to install the JDK on different operating systems:

::: code-group

```Windows
Download the JDK from Oracle's official website or OpenJDK.
Run the installer and follow the on-screen instructions.
Add the JDK's bin directory to the PATH environment variable.
```

```macOS
Download the JDK from Oracle's official website or OpenJDK.
Open the .dmg file and follow the installation instructions.
Add the JDK's bin directory to the PATH environment variable.
```
```Linux
Use your distribution's package manager to install the JDK. For example, on Ubuntu, you can use the following command:

sudo apt-get install openjdk-11-jdk
Add the JDK's bin directory to the PATH environment variable.
```
:::

## First Java Program
Here's a simple Java program that displays "Hello, World!" on the screen:

```java 
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
To compile and run this program, follow these steps:

:::tip Steps 
- Save the code in a file named HelloWorld.java.
>Open a terminal and navigate to the directory containing the file.
Compile the program with the following command:

- javac HelloWorld.java
>Run the compiled program with the following command:

- java HelloWorld
>You should see the message "Hello, World!" displayed on the screen.
:::
## Conclusion
This introduction to Java has presented you with the basics of the language, its main features, and how to install the JDK. In the upcoming sections, we will explore in detail the concepts of object-oriented programming, control structures, collections, and much more. Stay tuned to deepen your knowledge of Java! 