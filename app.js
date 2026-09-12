// Comprehensive list of timezones
const ALL_TIMEZONES = [
    // Africa
    { name: 'Cairo', timezone: 'Africa/Cairo', region: 'Egypt' },
    { name: 'Lagos', timezone: 'Africa/Lagos', region: 'Nigeria' },
    { name: 'Johannesburg', timezone: 'Africa/Johannesburg', region: 'South Africa' },
    { name: 'Nairobi', timezone: 'Africa/Nairobi', region: 'Kenya' },
    { name: 'Casablanca', timezone: 'Africa/Casablanca', region: 'Morocco' },
    { name: 'Accra', timezone: 'Africa/Accra', region: 'Ghana' },
    
    // Americas
    { name: 'New York', timezone: 'America/New_York', region: 'USA (Eastern)' },
    { name: 'Los Angeles', timezone: 'America/Los_Angeles', region: 'USA (Pacific)' },
    { name: 'Chicago', timezone: 'America/Chicago', region: 'USA (Central)' },
    { name: 'Denver', timezone: 'America/Denver', region: 'USA (Mountain)' },
    { name: 'Anchorage', timezone: 'America/Anchorage', region: 'USA (Alaska)' },
    { name: 'Toronto', timezone: 'America/Toronto', region: 'Canada (Eastern)' },
    { name: 'Vancouver', timezone: 'America/Vancouver', region: 'Canada (Pacific)' },
    { name: 'Mexico City', timezone: 'America/Mexico_City', region: 'Mexico' },
    { name: 'São Paulo', timezone: 'America/Sao_Paulo', region: 'Brazil' },
    { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', region: 'Argentina' },
    { name: 'Santiago', timezone: 'America/Santiago', region: 'Chile' },
    { name: 'Caracas', timezone: 'America/Caracas', region: 'Venezuela' },
    { name: 'Lima', timezone: 'America/Lima', region: 'Peru' },
    
    // Asia
    { name: 'Dubai', timezone: 'Asia/Dubai', region: 'UAE' },
    { name: 'Bangkok', timezone: 'Asia/Bangkok', region: 'Thailand' },
    { name: 'Singapore', timezone: 'Asia/Singapore', region: 'Singapore' },
    { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', region: 'Hong Kong' },
    { name: 'Shanghai', timezone: 'Asia/Shanghai', region: 'China' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo', region: 'Japan' },
    { name: 'Seoul', timezone: 'Asia/Seoul', region: 'South Korea' },
    { name: 'Manila', timezone: 'Asia/Manila', region: 'Philippines' },
    { name: 'Jakarta', timezone: 'Asia/Jakarta', region: 'Indonesia' },
    { name: 'Kolkata', timezone: 'Asia/Kolkata', region: 'India' },
    { name: 'Mumbai', timezone: 'Asia/Kolkata', region: 'India' },
    { name: 'Delhi', timezone: 'Asia/Kolkata', region: 'India' },
    { name: 'Karachi', timezone: 'Asia/Karachi', region: 'Pakistan' },
    { name: 'Tehran', timezone: 'Asia/Tehran', region: 'Iran' },
    { name: 'Jerusalem', timezone: 'Asia/Jerusalem', region: 'Israel' },
    { name: 'Beirut', timezone: 'Asia/Beirut', region: 'Lebanon' },
    { name: 'Istanbul', timezone: 'Europe/Istanbul', region: 'Turkey' },
    { name: 'Moscow', timezone: 'Europe/Moscow', region: 'Russia' },
    { name: 'Almaty', timezone: 'Asia/Almaty', region: 'Kazakhstan' },
    { name: 'Baku', timezone: 'Asia/Baku', region: 'Azerbaijan' },
    
    // Europe
    { name: 'London', timezone: 'Europe/London', region: 'UK' },
    { name: 'Paris', timezone: 'Europe/Paris', region: 'France' },
    { name: 'Berlin', timezone: 'Europe/Berlin', region: 'Germany' },
    { name: 'Madrid', timezone: 'Europe/Madrid', region: 'Spain' },
    { name: 'Rome', timezone: 'Europe/Rome', region: 'Italy' },
    { name: 'Amsterdam', timezone: 'Europe/Amsterdam', region: 'Netherlands' },
    { name: 'Brussels', timezone: 'Europe/Brussels', region: 'Belgium' },
    { name: 'Vienna', timezone: 'Europe/Vienna', region: 'Austria' },
    { name: 'Prague', timezone: 'Europe/Prague', region: 'Czech Republic' },
    { name: 'Warsaw', timezone: 'Europe/Warsaw', region: 'Poland' },
    { name: 'Athens', timezone: 'Europe/Athens', region: 'Greece' },
    { name: 'Helsinki', timezone: 'Europe/Helsinki', region: 'Finland' },
    { name: 'Stockholm', timezone: 'Europe/Stockholm', region: 'Sweden' },
    { name: 'Oslo', timezone: 'Europe/Oslo', region: 'Norway' },
    { name: 'Copenhagen', timezone: 'Europe/Copenhagen', region: 'Denmark' },
    { name: 'Lisbon', timezone: 'Europe/Lisbon', region: 'Portugal' },
    { name: 'Zurich', timezone: 'Europe/Zurich', region: 'Switzerland' },
    
    // Oceania
    { name: 'Sydney', timezone: 'Australia/Sydney', region: 'Australia (Eastern)' },
    { name: 'Melbourne', timezone: 'Australia/Melbourne', region: 'Australia (Victoria)' },
    { name: 'Brisbane', timezone: 'Australia/Brisbane', region: 'Australia (Queensland)' },
    { name: 'Perth', timezone: 'Australia/Perth', region: 'Australia (Western)' },
    { name: 'Adelaide', timezone: 'Australia/Adelaide', region: 'Australia (South)' },
    { name: 'Auckland', timezone: 'Pacific/Auckland', region: 'New Zealand' },
    { name: 'Fiji', timezone: 'Pacific/Fiji', region: 'Fiji' },
    { name: 'Honolulu', timezone: 'Pacific/Honolulu', region: 'Hawaii' },
];

let clocksData = [];
let is24HourFormat = true;
const STORAGE_KEY = 'globalClocks';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadClocks();
    updateClocks();
    setInterval(updateClocks, 1000);
});

function initializeApp() {
    const defaultClocks = [
        { name: 'New York', timezone: 'America/New_York', region: 'USA (Eastern)' },
        { name: 'London', timezone: 'Europe/London', region: 'UK' },
        { name: 'Tokyo', timezone: 'Asia/Tokyo', region: 'Japan' },
        { name: 'Sydney', timezone: 'Australia/Sydney', region: 'Australia (Eastern)' },
    ];

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
        clocksData = defaultClocks;
        saveClocks();
    } else {
        clocksData = JSON.parse(saved);
    }
}

function setupEventListeners() {
    const searchInput = document.getElementById('timezoneSearch');
    const addBtn = document.getElementById('addBtn');
    const resetBtn = document.getElementById('resetBtn');
    const toggleFormatBtn = document.getElementById('toggleFormatBtn');
    const dropdown = document.getElementById('suggestionsDropdown');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length > 0) {
            showSuggestions(query, searchInput);
        } else {
            dropdown.classList.remove('active');
        }
    });

    addBtn.addEventListener('click', () => {
        const query = document.getElementById('timezoneSearch').value.trim();
        if (query) {
            const timezone = findTimezoneByQuery(query);
            if (timezone) {
                addClock(timezone);
                document.getElementById('timezoneSearch').value = '';
                dropdown.classList.remove('active');
            } else {
                alert('Timezone not found. Please try again.');
            }
        }
    });

    resetBtn.addEventListener('click', () => {
        if (confirm('Reset to default timezones?')) {
            clocksData = [
                { name: 'New York', timezone: 'America/New_York', region: 'USA (Eastern)' },
                { name: 'London', timezone: 'Europe/London', region: 'UK' },
                { name: 'Tokyo', timezone: 'Asia/Tokyo', region: 'Japan' },
                { name: 'Sydney', timezone: 'Australia/Sydney', region: 'Australia (Eastern)' },
            ];
            saveClocks();
            renderClocks();
        }
    });

    toggleFormatBtn.addEventListener('click', () => {
        is24HourFormat = !is24HourFormat;
        toggleFormatBtn.textContent = is24HourFormat ? 'Toggle 24H/12H' : 'Toggle 24H/12H';
        updateClocks();
    });

    document.addEventListener('click', (e) => {
        if (e.target !== searchInput && e.target !== dropdown) {
            dropdown.classList.remove('active');
        }
    });
}

function showSuggestions(query, inputElement) {
    const dropdown = document.getElementById('suggestionsDropdown');
    const suggestions = ALL_TIMEZONES.filter(tz =>
        tz.name.toLowerCase().includes(query) ||
        tz.region.toLowerCase().includes(query) ||
        tz.timezone.toLowerCase().includes(query)
    ).slice(0, 8);

    if (suggestions.length === 0) {
        dropdown.innerHTML = '<div class="suggestion-item">No timezones found</div>';
    } else {
        dropdown.innerHTML = suggestions.map(tz =>
            `<div class="suggestion-item" data-timezone="${tz.timezone}" data-name="${tz.name}" data-region="${tz.region}">
                <strong>${tz.name}</strong><br>
                <small>${tz.region}</small>
            </div>`
        ).join('');

        dropdown.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const timezone = item.dataset.timezone;
                const name = item.dataset.name;
                const region = item.dataset.region;
                addClock({ name, timezone, region });
                document.getElementById('timezoneSearch').value = '';
                dropdown.classList.remove('active');
            });
        });
    }

    dropdown.classList.add('active');
}

function findTimezoneByQuery(query) {
    query = query.toLowerCase();
    return ALL_TIMEZONES.find(tz =>
        tz.name.toLowerCase() === query ||
        tz.timezone.toLowerCase() === query ||
        tz.region.toLowerCase() === query
    );
}

function addClock(timezone) {
    if (!clocksData.find(c => c.timezone === timezone.timezone)) {
        clocksData.push(timezone);
        saveClocks();
        renderClocks();
    } else {
        alert('This timezone is already added!');
    }
}

function removeClock(timezone) {
    clocksData = clocksData.filter(c => c.timezone !== timezone);
    saveClocks();
    renderClocks();
}

function saveClocks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clocksData));
}

function loadClocks() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        clocksData = JSON.parse(saved);
    }
}

function getTimeInTimezone(timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: !is24HourFormat,
        });
        return formatter.format(new Date());
    } catch (e) {
        return 'Invalid TZ';
    }
}

function getDateInTimezone(timezone) {
    try {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: timezone,
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return formatter.format(new Date());
    } catch (e) {
        return 'Invalid TZ';
    }
}

function getTimezoneOffset(timezone) {
    try {
        const now = new Date();
        const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
        const offset = (tzDate - utcDate) / 3600000;
        const sign = offset >= 0 ? '+' : '';
        const hours = Math.floor(Math.abs(offset));
        const minutes = Math.round((Math.abs(offset) - hours) * 60);
        return `UTC ${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
    } catch (e) {
        return 'UTC';
    }
}

function updateClocks() {
    clocksData.forEach(clock => {
        const timeElement = document.querySelector(`[data-timezone="${clock.timezone}"] .digital-time`);
        const dateElement = document.querySelector(`[data-timezone="${clock.timezone}"] .digital-date`);
        const offsetElement = document.querySelector(`[data-timezone="${clock.timezone}"] .timezone-offset`);
        
        if (timeElement) {
            timeElement.textContent = getTimeInTimezone(clock.timezone);
        }
        if (dateElement) {
            dateElement.textContent = getDateInTimezone(clock.timezone);
        }
        if (offsetElement) {
            offsetElement.textContent = getTimezoneOffset(clock.timezone);
        }
    });
}

function renderClocks() {
    const grid = document.getElementById('clocksGrid');
    
    if (clocksData.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1;">
                <div class="empty-state">
                    <div class="empty-state-icon">🕐</div>
                    <h2>No Clocks Added</h2>
                    <p>Search and add your favorite timezones to get started!</p>
                </div>
            </div>
        `;
        return;
    }

    grid.innerHTML = clocksData.map(clock => `
        <div class="clock-card" data-timezone="${clock.timezone}">
            <div class="timezone-name">${clock.name}</div>
            <div class="timezone-region">${clock.region}</div>
            <div class="timezone-offset">${getTimezoneOffset(clock.timezone)}</div>
            <div class="digital-time">${getTimeInTimezone(clock.timezone)}</div>
            <div class="digital-date">${getDateInTimezone(clock.timezone)}</div>
            <div class="card-actions">
                <button class="copy-btn" onclick="copyClock('${clock.timezone}', '${clock.name}')">📋 Copy</button>
                <button class="delete-btn" onclick="removeClock('${clock.timezone}')">🗑️ Remove</button>
            </div>
        </div>
    `).join('');
}

function copyClock(timezone, name) {
    const time = getTimeInTimezone(timezone);
    const date = getDateInTimezone(timezone);
    const text = `${name}: ${time} (${date})`;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy!');
    });
}

// Initial render
function render() {
    renderClocks();
    updateClocks();
}