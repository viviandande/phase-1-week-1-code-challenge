# phase-1-week-1-code-challenge
*****
### Author : Name : Vivian Dande Date : 28/11/2022
****
## Project Description
Toy challenge1
This is a program that prompts the user to input student marks. The input is between 0 and 100 while the output indicates the correct grade as follows:

A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.

All the tasks to be performed under my functions are wrapped in curly braces.

<!-- function checkGrades(studentsGrades){

    } -->
In the student grading program, my function is to display the result of every grade typed in and return the correct grade. I have indicated the return value for instance :

<!-- if(studentsGrades >= 79 && studentsGrades <= 100){
         return "A"
    } -->
 when we console.log the function `checkGrades` and pass an argument of `56` to it, the function should return `"A"`. This is because this is because the function indicates that A > 79
    <!-- console.log(checkGrades(86)) -->


******
Toy challenge2
The code challenge tests a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

The function `checkSpeedCar` is assigned a parameter `speedCar` and return different values depending on the return instructions.
<!-- function checkSpeedCar(speedCar){ -->
 If the car speed input `70`, which is the speed limit then the return will print `"Ok"`
<!-- if (speedCar <=70){
    return "OK" -->
The reurn value of every additional `5km/s` will be `total number of demerit points`. To assign this value to a strictly equality operator, we use the `Math.floor`so that it rounds down the demerit points.
<!-- else if (speedCar <= 130){
    return Math.floor((speedCar-70)/5) + "  points" -->
Any speed above 130 will return  `"Lincense suspended"`
<!-- else if(speedCar > 130){
    return "Lincense suspended"
} -->
To convert the speed into a value we use `.value`
    <!-- let speed = parseInt(document.getElementById ("Speed").value) -->



********
Toy challenge3

********
## SetUp Instruction
### Requirements
* [Lang](lang Url)
* [Framework](Framework URL)
* Text editor eg [Visual Studio Code](https://code.visualstudio.com/download)
* [Testing Platform](Platform URL)


### Getting Files
* Fork the repo
- Create a new branch in your terminal (git checkout -b improve-feature)
- Install the prerequisites
- Make appropriate changes in file(s)
- Run the server to see the changes
- Add the changes and commit them (git commit -am "Improve App")
- Push to the branch (git push origin improve-app)
- Create a Pull request
* Open the folder location on terminal and use the following command to run app:

## How To Run It
>  $ node.js
To print the console
>open with live server

Then run server with the above command
*****
## Live Link
Or you can access the web application directly via this [LINK.](link.com/)
*****
## Dependencies
- Package Name
- Package Name
- Package Name
- Package Name
*****
## Technologies Used
1. HTML
2. MdBootstrap
3. HTML
4. CSS
5. JavaScript
*****
## Contact Information
* Email : example@gmail.com
*****
## [License](LICENSE)
MIT License
Copyright (c) YEAR Author
