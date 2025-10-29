# 🌦️ Weather Dashboard

A beautiful, responsive weather application that provides real-time weather information for any city worldwide. Built with HTML, CSS, and JavaScript for Hacktoberfest 2025.

![Weather Dashboard](https://img.shields.io/badge/Hacktoberfest-2025-orange)
![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🔍 **City Search**: Search weather information for any city worldwide
- 📍 **Geolocation Support**: Get weather for your current location with one click
- 🌡️ **Real-time Data**: Current temperature, feels-like temperature, and weather conditions
- 💧 **Detailed Metrics**: Humidity, wind speed, atmospheric pressure, and visibility
- 🌅 **Sunrise & Sunset**: View sunrise and sunset times for the selected location
- 🎨 **Beautiful UI**: Modern gradient design with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight**: Quick loading with no external dependencies (except Font Awesome for icons)
- 🎭 **Weather Icons**: Dynamic weather icons that change based on conditions
- 🔄 **Loading States**: Visual feedback with loading spinner and error messages

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An OpenWeatherMap API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RKRISH07/hacktoberfest-2025.git
   cd hacktoberfest-2025/Projects/WeatherDashboard
   ```

2. **Get your OpenWeatherMap API Key**
   - Visit [OpenWeatherMap API](https://openweathermap.org/api)
   - Click "Sign Up" to create a free account
   - Navigate to "API Keys" section in your account
   - Copy your API key

3. **Configure the API Key**
   - Open `script.js` in your text editor
   - Find line 4: `const API_KEY = 'YOUR_API_KEY';`
   - Replace `'YOUR_API_KEY'` with your actual API key
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

4. **Launch the Application**
   - Open `index.html` in your web browser
   - Start searching for weather information!

## 📖 Usage

### Search by City Name
1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the weather information displayed on the screen

### Use Current Location
1. Click the "Use Current Location" button
2. Allow browser permission to access your location
3. Weather data for your current location will be displayed

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox, grid, animations, and gradients
- **JavaScript (ES6+)**: Async/await for API calls, DOM manipulation, event handling
- **OpenWeatherMap API**: Real-time weather data
- **Font Awesome**: Beautiful weather and UI icons

## 📁 File Structure

```
WeatherDashboard/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality and API integration
└── README.md           # Project documentation
```

## 🌟 Key Components

### HTML Structure
- **Header Section**: Title and subtitle
- **Search Section**: City input and geolocation button
- **Weather Info Section**: Displays all weather data
  - Location and date
  - Weather icon and description
  - Temperature and feels-like temperature
  - Weather details grid (humidity, wind, pressure, visibility)
  - Sunrise and sunset information
- **Error/Loading States**: User feedback components

### CSS Features
- Beautiful gradient backgrounds
- Smooth animations (fade-in, bounce, float, spin)
- Responsive grid layout for weather details
- Hover effects and transitions
- Mobile-first responsive design
- Custom loading spinner animation

### JavaScript Functionality
- API key validation
- City-based weather search
- Geolocation-based weather search
- Error handling for various scenarios
- Dynamic content updates
- Date and time formatting
- State management (loading, error, success)

## 🎨 Customization

### Change Color Scheme
Edit the gradient colors in `style.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Change Default City
Uncomment and modify the last line in `script.js`:
```javascript
getWeatherByCity('London'); // Change 'London' to your preferred city
```

### Add More Weather Details
The OpenWeatherMap API provides additional data. Check the [API documentation](https://openweathermap.org/current) and add more fields as needed.

## 🐛 Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Ensure you've replaced `'YOUR_API_KEY'` with your actual API key
   - Verify your API key is active in your OpenWeatherMap account
   - Free API keys may take a few hours to activate

2. **"City not found" error**
   - Check the spelling of the city name
   - Try using just the city name without country
   - Some small cities may not be in the database

3. **Geolocation not working**
   - Ensure you've granted location permission to your browser
   - HTTPS is required for geolocation in most browsers
   - Check if your browser supports geolocation

4. **No weather data displayed**
   - Open browser console (F12) to check for errors
   - Verify your internet connection
   - Check if the API is responding

## 🤝 Contributing

Contributions are welcome! This project is part of Hacktoberfest 2025.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](../../LICENSE).

## 👨‍💻 Author

Created with ❤️ for Hacktoberfest 2025

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- Hacktoberfest 2025 for encouraging open source contributions

## 📸 Screenshots

### Desktop View
*Beautiful gradient background with all weather information displayed*

### Mobile View
*Fully responsive design that works perfectly on mobile devices*

### Search & Geolocation
*Easy-to-use search interface with geolocation support*

---

**Happy Coding! 🚀** Made with ❤️ for Hacktoberfest 2025
