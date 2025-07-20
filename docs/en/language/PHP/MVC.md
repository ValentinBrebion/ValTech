---
next: 
    text: 'API'
    link: '/en/language/PHP/API/introductionHistory'
prev: 
    text: 'Discovering Laravel'
    link: '/en/language/PHP/Laravel/Laravel'
---

# <u>Introduction to MVC</u>
MVC (Model-View-Controller) is a software architecture pattern commonly used in computer application development, particularly in web applications and applications based on graphical interfaces.

## <u>3 distinct but interconnected components</u>

### M for Model!
First comes the Model: It's the representation of the application's data and business rules, in other words, it handles data logic, interacts with the database, and manages data manipulation operations.

### V for View!
Next comes the View: It's responsible for displaying the data that the Model provides in a form that's understandable to the user. The View contains no business logic; it focuses solely on presenting information, whether in the form of text, tables, graphs, or other visual elements. In a web application, for example, the View would correspond to the HTML, CSS, and sometimes JavaScript that display the data to the end user.

### C for Controller!
Finally, there's the Controller: It acts as the link between the Model and the View. It receives user inputs (for example, a button click or form submission), processes these inputs, and sends them to the Model. Once the data is manipulated by the Model, the Controller determines which View should be displayed to reflect the changes. It thus acts as an intermediary that orchestrates the interactions between the data (Model) and its presentation (View). 