A Simple Web Application

This application has two features:

The app shows a list of People records that are available via the SalesLoft API using the API key in recieved in the technical assement email. In that list, the app displays each person’s name, email address, and job title.

The app has a button that, when clicked, displays a frequency count of all the unique characters in all the email addresses of all the People accessed from the api and sorts the characters by frequency count.

Example: 
...
T : 20
M : 20
L : 22
@ : 25
. : 30
R : 35
I : 36
A : 40
O : 41
N : 41
E : 60


This application uses a React front end to render a person component for each person object returned from the Salesloft API. All the people are held within a people container component that allows for an organized simple component structure. The fetch to our API data is held at the top app level and passed to the people container through props. Each person component is rendered by mapping over the set of people data and rendering each person's specific name, email and job title. The character frequency button, located in top right, sorts the characters by frequency count.
