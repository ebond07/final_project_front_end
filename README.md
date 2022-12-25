# Ideal Weather Weeks FRont-End

Link for front-end repository: https://github.com/ebond07/final_project <br />
Link for back-end repository: https://github.com/ebond07/final_project_backend <br />
Link for project presentation video: https://youtu.be/-OOG8VzQD8I <br />

## Project Description

The application allows users to create up to four ideal weather weeks in terms of temperature.
There are drop down menus which allow for the selection of the weeks as well as the deletion of them. Also buttons used to create days.

The front-end for this project was built on Microsoft Visual Studio Code using React JS.

### External Libraries used

https://fkhadra.github.io/react-toastify/introduction/

React-Toastify was used to create pop ups on the side of the window to alert the user whether the requests were succesful

https://github.com/oliviertassinari/react-swipeable-views

React-Swipeable-Views were used to allow the user to swipe between three options "Cloudy,Sunny,Rainy" for their day.

### Running the Project

For the front-end you must install the node modules using "npm install" if you do not have the correct modules for the project.

From then you can use the front-end as you wish.

### Challenges Faced

I faced challenges regarding creating the exact layout that I wanted to for the boxes. Using the div styling was something that took quite a bit of research for me to have exactly the way that I envisioned it.

In the future I would like 

## Design

### Class Structure

3 additional components besides app.js were added to keep the code clean.

Firstly, the boxes component was used to generate the boxes which have the counter for the temperature, the two buttons to modify the counter as well as the titles for the days, the sliders, and the button to submit the day. There is also a reset temps button to reset the temperatures for the days that is in the boxes component. The drop down menu for initializing a week is located in the boxes component so that the selected option can be put in a variable and used in the post request made in the boxes component.

Secondly, the weeklyselector component is used to generate the drop down menu for deleting a week.

Finally, the response component is used to generate the function which the buttons in the boxes class use for submitting the days. Inside this class there should also be the get requests which would get the information which has been posted in the boxes class and then display it below the header in the response component.

### Front-End 

![Screenshot_20221224_031705](https://user-images.githubusercontent.com/43860533/209451193-9ffbe4a5-2fbe-4d96-a208-5718645de8d7.png)

The two drop down menus at the top of the screen are used for selecting the week which you either want to delete or initialize depending on the drop down menu selected.

The buttons to the right of the drop down menus are for confirming you selection and making the equivalent request to the back-end.

The button on the left of all the boxes is to reset the counters of all the boxes back to 0.

The buttons inside the boxes are used to update the counter. The + button updates the counter by +1 and the - button updates the counter by -1

The counter itself changes colour depending on its value. When above 0 it is shown in red and when 0 and below it is shown in blue.
