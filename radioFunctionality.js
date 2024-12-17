// radioFunctionality.js

// Ensure radioStations data is already loaded from radio.js

const radioCountrySelect = document.getElementById('radioCountrySelect');
const radioStateSelect = document.getElementById('radioStateSelect');
const radioCitySelect = document.getElementById('radioCitySelect');
const radioList = document.getElementById('radioList');

// Function to get unique values for country, state, city from radioStations
function getRadioUniqueValues(key, filterObj = {}) {
    let filtered = radioStations;
    if (filterObj.country) {
        filtered = filtered.filter(r => r.country === filterObj.country);
    }
    if (filterObj.state) {
        filtered = filtered.filter(r => r.state === filterObj.state);
    }
    const unique = [...new Set(filtered.map(r => r[key]))];
    unique.sort();
    return unique;
}

// Populate country dropdown on page load
document.addEventListener('DOMContentLoaded', () => {
    const countries = getRadioUniqueValues('country');
    populateRadioSelect(radioCountrySelect, countries, 'Select Country');
    radioStateSelect.disabled = true;
    radioCitySelect.disabled = true;
});

radioCountrySelect.addEventListener('change', () => {
    const selectedCountry = radioCountrySelect.value;
    if (selectedCountry) {
        const states = getRadioUniqueValues('state', { country: selectedCountry });
        populateRadioSelect(radioStateSelect, states, 'Select State/Province');
        radioStateSelect.disabled = false;
        radioCitySelect.disabled = true;
        radioCitySelect.innerHTML = '<option value="">Select City</option>';
        radioList.innerHTML = '<p>Select a state and city to view radio stations.</p>';
    } else {
        radioStateSelect.innerHTML = '<option value="">Select State/Province</option>';
        radioCitySelect.innerHTML = '<option value="">Select City</option>';
        radioStateSelect.disabled = true;
        radioCitySelect.disabled = true;
        radioList.innerHTML = '<p>Select a country, state, and city to view radio stations.</p>';
    }
});

radioStateSelect.addEventListener('change', () => {
    const selectedCountry = radioCountrySelect.value;
    const selectedState = radioStateSelect.value;
    if (selectedState) {
        const cities = getRadioUniqueValues('city', { country: selectedCountry, state: selectedState });
        populateRadioSelect(radioCitySelect, cities, 'Select City');
        radioCitySelect.disabled = false;
        radioList.innerHTML = '<p>Select a city to view radio stations.</p>';
    } else {
        radioCitySelect.innerHTML = '<option value="">Select City</option>';
        radioCitySelect.disabled = true;
        radioList.innerHTML = '<p>Select a state and city to view radio stations.</p>';
    }
});

radioCitySelect.addEventListener('change', () => {
    const selectedCountry = radioCountrySelect.value;
    const selectedState = radioStateSelect.value;
    const selectedCity = radioCitySelect.value;
    if (selectedCity) {
        displayRadioStations(selectedCountry, selectedState, selectedCity);
    } else {
        radioList.innerHTML = '<p>Select a city to view radio stations.</p>';
    }
});

// Function to populate a select element with options
function populateRadioSelect(selectElement, items, defaultText) {
    let options = `<option value="">${defaultText}</option>`;
    items.forEach(item => {
        options += `<option value="${item}">${item}</option>`;
    });
    selectElement.innerHTML = options;
}

// Function to display radio stations
function displayRadioStations(country, state, city) {
    const filteredStations = radioStations.filter(r =>
        r.country === country && r.state === state && r.city === city
    );

    if (filteredStations.length === 0) {
        radioList.innerHTML = '<p>No radio stations found for this location.</p>';
        return;
    }

    let html = '';
    filteredStations.forEach(station => {
        html += `
            <div class="venue-card">
                <h3>${station.name}</h3>
                <p><strong>City:</strong> ${station.city}</p>
                <p><strong>Phone:</strong> ${station.phone || 'N/A'}</p>
                <p><strong>Email:</strong> ${station.email && station.email.startsWith('mailto:') 
                    ? `<a href="${station.email}">${station.email.replace('mailto:', '')}</a>` 
                    : station.email || 'N/A'}</p>
                <p><strong>Website:</strong> <a href="${station.website}" target="_blank">${station.website}</a></p>
                <p><strong>Submit Music:</strong> <a href="${station.submitMusic}" target="_blank">Click here</a></p>
            </div>
        `;
    });

    radioList.innerHTML = html;
}
