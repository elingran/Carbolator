# Carbolator

## Description of the project
Carbolator stands for carbon calculator, which says a lot about Carbolator's purpose. In the app, you can calculate the amount of carbon emissions your traveling activities generate, and compare different traveling options. The app uses data from the Distance Matrix API (Google Maps Platform) to get the distances for the trips, whereon we have used static data to calculate the carbon emissions for each type of travel option. To improve the user experience Google Maps Autocomplete is used when the user enters which cities or addresses to travel between.

# How to setup
1. Download the recommended version of node.js: https://nodejs.org/en/
2. Clone the repository to some folder. 
3. Cd this folder and run 'npm install' from the command line. This will install all React dependence. You might have to use --force or similar for some React libraries.
4. We also have our Firebase and Google API keys locally in the file .env.local. We do not want them publicly displayed on Github so we added the file in our Canvas submission. But this file needs to be moved to the root directory for Firebase and Google API to work!
5. Then just run 'npm start' from the terminal and the app should run :)
