const API_KEY = 'b8772cdbf0ed484fa7053117250504'; // You'll need to get an API key from WeatherAPI.com
const BASE_URL = 'https://api.weatherapi.com/v1';

// DOM Elements
const locationInput = document.getElementById('locationInput');
const locationElement = document.getElementById('location');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const forecastContainer = document.getElementById('forecastContainer');

// Weather icon mapping
const weatherIcons = {
    '1000': 'wi-day-sunny', // Sunny
    '1003': 'wi-day-cloudy', // Partly cloudy
    '1006': 'wi-cloudy', // Cloudy
    '1009': 'wi-cloudy', // Overcast
    '1030': 'wi-fog', // Mist
    '1063': 'wi-day-rain', // Patchy rain possible
    '1066': 'wi-snow', // Patchy snow possible
    '1069': 'wi-sleet', // Patchy sleet possible
    '1072': 'wi-sleet', // Patchy freezing drizzle possible
    '1087': 'wi-thunderstorm', // Thundery outbreaks possible
    '1114': 'wi-snow-wind', // Blowing snow
    '1117': 'wi-snow-wind', // Blizzard
    '1135': 'wi-fog', // Fog
    '1147': 'wi-fog', // Freezing fog
    '1150': 'wi-sprinkle', // Patchy light drizzle
    '1153': 'wi-sprinkle', // Light drizzle
    '1168': 'wi-sleet', // Freezing drizzle
    '1171': 'wi-sleet', // Heavy freezing drizzle
    '1180': 'wi-day-rain', // Patchy light rain
    '1183': 'wi-rain', // Light rain
    '1186': 'wi-rain', // Moderate rain at times
    '1189': 'wi-rain', // Moderate rain
    '1192': 'wi-rain', // Heavy rain at times
    '1195': 'wi-rain', // Heavy rain
    '1198': 'wi-sleet', // Light freezing rain
    '1201': 'wi-sleet', // Moderate or heavy freezing rain
    '1204': 'wi-sleet', // Light sleet
    '1207': 'wi-sleet', // Moderate or heavy sleet
    '1210': 'wi-snow', // Patchy light snow
    '1213': 'wi-snow', // Light snow
    '1216': 'wi-snow', // Patchy moderate snow
    '1219': 'wi-snow', // Moderate snow
    '1222': 'wi-snow', // Patchy heavy snow
    '1225': 'wi-snow', // Heavy snow
    '1237': 'wi-hail', // Ice pellets
    '1240': 'wi-day-showers', // Light rain shower
    '1243': 'wi-showers', // Moderate or heavy rain shower
    '1246': 'wi-showers', // Torrential rain shower
    '1249': 'wi-sleet', // Light sleet showers
    '1252': 'wi-sleet', // Moderate or heavy sleet showers
    '1255': 'wi-snow', // Light snow showers
    '1258': 'wi-snow', // Moderate or heavy snow showers
    '1261': 'wi-hail', // Light showers of ice pellets
    '1264': 'wi-hail', // Moderate or heavy showers of ice pellets
    '1273': 'wi-thunderstorm', // Patchy light rain with thunder
    '1276': 'wi-thunderstorm', // Moderate or heavy rain with thunder
    '1279': 'wi-thunderstorm', // Patchy light snow with thunder
    '1282': 'wi-thunderstorm' // Moderate or heavy snow with thunder
};

async function searchWeather() {
    const location = locationInput.value.trim();
    if (!location) return;

    try {
        // Get current weather and forecast
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=no&alerts=no`);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        // Update current weather
        updateCurrentWeather(data);
        
        // Update forecast
        updateForecast(data);
    } catch (error) {
        showError(error.message);
    }
}

function updateCurrentWeather(data) {
    const current = data.current;
    const location = data.location;
    
    locationElement.textContent = `${location.name}, ${location.country}`;
    weatherIcon.innerHTML = `<i class="wi ${weatherIcons[current.condition.code] || 'wi-day-sunny'}"></i>`;
    temperature.textContent = `${Math.round(current.temp_c)}°C`;
    weatherDescription.textContent = current.condition.text;
    humidity.textContent = `${current.humidity}%`;
    windSpeed.textContent = `${Math.round(current.wind_kph)} km/h`;
    pressure.textContent = `${current.pressure_mb} hPa`;
    visibility.textContent = `${current.vis_km} km`;
}

function updateForecast(data) {
    forecastContainer.innerHTML = '';
    
    // Get daily forecast
    const forecastDays = data.forecast.forecastday;
    
    forecastDays.forEach(day => {
        const date = new Date(day.date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-day';
        forecastItem.innerHTML = `
            <div class="forecast-date">${dayName}</div>
            <div class="forecast-icon"><i class="wi ${weatherIcons[day.day.condition.code] || 'wi-day-sunny'}"></i></div>
            <div class="forecast-temp">
                <span class="forecast-temp-high">${Math.round(day.day.maxtemp_c)}°</span>
                <span class="forecast-temp-low">${Math.round(day.day.mintemp_c)}°</span>
            </div>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Remove any existing error message
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    document.querySelector('.weather-container').insertBefore(errorDiv, forecastContainer);
}

// Handle Enter key in search input
locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// Get user's location and show weather
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
        try {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=5&aqi=no&alerts=no`);
            const data = await response.json();
            
            if (!data.error) {
                locationInput.value = data.location.name;
                searchWeather();
            }
        } catch (error) {
            showError('Could not get weather for your location');
        }
    });
} 