# Weather App

You will be creating an app to get weather data!

## Setup

## Requirements

### Part 1
Use a prompt to get the user's zip and display the city and state of that zip code. You can use the `Zippopotamus` API to get this data. For example, 
`http://api.zippopotam.us/us/90210` will get you data for Beverly Hills and `http://api.zippopotam.us/us/19963` will get you my hometown!

### Part 2
Use the `longitude` and `latitude` you get from `Zippopotamus` to get weather data from the `7Timer` API. For example, `http://www.7timer.info/bin/api.pl?output=json&product=civillight&lon=-118.4&lat=34.1` gets the weather for the longitude `-118.4` and latitude `34.1` e.g. Beverly Hills. Display the current temperature.

### Part 3
Use all the weather data to generate a 7 day forcast for the given zip code. 

### Part 4
Have the browser collect the user's zip code from their location so that they do not have to enter it.
