In this project, let's fix the Google Search Suggestions app by applying the concepts we have learned till now.

Refer to the image below:

![image](https://github.com/bukka5sandhya/Debugging-Google-search-Suggestions-React-Js-/assets/133884532/59b3f48f-c0ff-4517-a66d-9863947fb871)

https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif

Set Up Instructions

Click to view

Download dependencies by running npm install

Start up the app using npm start

Completion Instructions

Functionality to be fixed

Fix the given code to have the following functionality

Initially, all suggestions in the suggestionsList should be displayed

When a value is provided in the search input, then display the suggestions which include the search input irrespective of case

When the arrow of a suggestion is clicked, then the value of the search input should be updated with the respective suggestion clicked

The GoogleSuggestions component receives the suggestionsList as a prop. It consists of a list of suggestion objects with the following properties in each suggestion object

Key	Data Type

id	Number

suggestion	String

Quick Tips

Click to view

There are 7 bugs to be fixed to achieve the functionality and the UI that is expected

Things to Keep in Mind

All components you implement should go in the src/components directory.

Don't change the component folder names as those are the files being imported into the tests.

Do not remove the pre-filled code

Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
