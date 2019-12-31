# burger2_the-sequel-

Live Link:





------Description on how to use the Burger2 application----


 * Enter the name of a hamburger that you would like to eat. 
 * You can make up any type of hamburger and hit the submit button.

After the hamburger is posted to the page, you can eat it by pressing the 'DEVOUR IT' button.


Requirements:
Remove all references to the previous vanilla MySQL queries in the previous Burger application and replace them with Sequelize queries.
Remove old files such as ORM.js and any references to it in burgers_controller.js

Technologies Used:

* Sequelize
* Node.js, Express,
* MySQL Workbench
* Handlebars

Code Explanation:
A connection to the MySQL database is created with Sequelize in the config/connection.js. The connection is then exported and required in model/burger.js where the data is defined and given datatypes in our MySQL database.

The burgers_controller.js file is where the routes are defined.

Sequelize methods such as findAll(), create(), and update() replaced the previous vanilla MySQL queries.


![image](https://user-images.githubusercontent.com/54521457/71628662-9ca41100-2bbe-11ea-8865-507fca72b0f0.png)
