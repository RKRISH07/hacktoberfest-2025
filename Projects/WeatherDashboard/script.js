// OpenWeatherMap API Configuration
// Get your free API key from: https://openweathermap.org/api
// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'YOUR_API_KEY'; // IMPORTANT: Replace this with your actual API key
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const weatherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('error');
const loadingSpinner = document.getElementById('loading');
const errorText = document.getElementById('errorText');

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherByCity(city);
    } else {
        showError('Please enter a city name');
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            getWeatherByCity(city);
        } else {
            showError('Please enter a city name');
        }
    }
});

locationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        showLoading();
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByCoordinates(latitude, longitude);
            },
            (error) => {
                hideLoading();
                showError('Unable to retrieve your location. Please check your browser settings.');
            }
        );
    } else {
        showError('Geolocation is not supported by your browser');
    }
});

// Fetch Weather by City Name
async function getWeatherByCity(city) {
    showLoading();
    hideError();
    
    try {
        const response = await fetch(
            `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling and try again.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your API configuration.');
            } else {
                throw new Error('Failed to fetch weather data. Please try again.');
            }
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        hideLoading();
        showError(error.message);
    }
}

// Fetch Weather by Coordinates
async function getWeatherByCoordinates(lat, lon) {
    try {
        const response = await fetch(
            `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch weather data for your location');
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        hideLoading();
        showError(error.message);
    }
}

// Display Weather Information
function displayWeather(data) {
    hideLoading();
    hideError();
    
    // Update city name and date
    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('date').textContent = formatDate(new Date());
    
    // Update weather icon and description
    const iconCode = data.weather[0].icon;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    document.getElementById('weatherDescription').textContent = data.weather[0].description;
    
    // Update temperature
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°C`;
    
    // Update weather details
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.wind.speed} m/s`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
    document.getElementById('visibility').textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    
    // Update sunrise and sunset
    document.getElementById('sunrise').textContent = formatTime(data.sys.sunrise);
    document.getElementById('sunset').textContent = formatTime(data.sys.sunset);
    
    // Show weather info
    weatherInfo.classList.remove('hidden');
}

// Helper Functions
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

function showLoading() {
    loadingSpinner.classList.remove('hidden');
    weatherInfo.classList.add('hidden');
    errorMessage.classList.add('hidden');
}

function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.remove('hidden');
    weatherInfo.classList.add('hidden');
}

function hideError() {
    errorMessage.classList.add('hidden');
}

// Check if API key is configured
if (API_KEY === 'YOUR_API_KEY') {
    showError(
        'Please configure your OpenWeatherMap API key in the script.js file. ' +
        'Get your free API key from: https://openweathermap.org/api'
    );
}

// Optional: Load weather for a default city on page load
// Uncomment the line below to load weather for a default city
// getWeatherByCity('London');
