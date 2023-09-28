# weather-app


This web application allows users to check the current weather for a location by making asynchronous requests to a weather API. The app displays weather data in a user-friendly format, handles error cases gracefully, and offers the option to switch between temperature units (Celsius and Fahrenheit).

## Features

1. **Homepage**: 
   - The homepage provides a simple user interface.
   - Users can enter a city name in the search input field and click the "°C" or "°F" button to retrieve weather data.

2. **Weather Display**, **Unit Selection**:
   - The app displays the current weather conditions for the specified location.
   - Weather details include temperature, humidity and wind speed, and a weather description.

3. **Error Handling**:
   - The app gracefully handles cases where the entered city name is not found or when there is an issue with the API request.
   - It displays a user-friendly error message.

4. **Styling and Responsive Design**:
   - The app is visually appealing with a thoughtfully designed layout and color scheme.
   - It is responsive and functions well on both desktop and mobile devices.

5. **Geolocation (Optional)**:
   - Users can opt to use their device's geolocation to automatically fetch the weather for their current location.
   - The app requests and handles geolocation permissions appropriately.


## How to Use

1. **Search by City**:
   - Enter the name of a city in the search input field.
   - Click the "°C" or "°F" button to retrieve weather data for that city in "Celsius" and "Fahrenheit".

2. **Toggle Temperature Units**:
   - Use the "Celsius" and "Fahrenheit" buttons to switch between temperature units.
   - The temperature data will update accordingly.

3. **Geolocation (Optional)**:
   - Allow the app to use your device's geolocation.
   - The app will automatically fetch weather data for your current location.


## Additional Information

- API Key: This app uses the OpenWeatherMap API. Replace the placeholder API key in the JavaScript code with your own API key. You can obtain an API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

- Assets: The `images` folder contains icons used in the app's interface. You can replace them with your own if desired.

- Styling: The app's visual style is defined in the `style.css`, `media.css` and `location-slider.css` file. You can customize the styles to fit your preferences.

Feel free to explore the code in the `script.js` file to see how the app functions.

Enjoy using the Weather Web Application!

## Credits

This project was created by Anshuman Garg. Feel free to contact me at anshx108@gmail.com for any questions or feedback.

