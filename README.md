# 🌍 Global Digital Clock - Multiple Timezones

A beautiful, real-time digital clock application that displays the current time across multiple timezones worldwide. Built with vanilla JavaScript, HTML, and CSS.

## ✨ Features

- **Real-time Clock Updates**: Displays current time updated every second
- **Multi-Timezone Support**: 50+ cities across all continents
- **Add/Remove Timezones**: Easily customize which timezones to display
- **Timezone Search**: Quickly find and add timezones by city, region, or timezone code
- **12/24 Hour Toggle**: Switch between 12-hour and 24-hour time formats
- **UTC Offset Display**: Shows UTC offset for each timezone
- **Date Display**: Shows formatted date for each timezone
- **Local Storage**: Persists your selected timezones across browser sessions
- **Copy to Clipboard**: Quick copy functionality for time and date
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds, smooth animations, and intuitive controls

## 🚀 Quick Start

### Option 1: Online Demo
Simply open `index.html` in your web browser.

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/RC-KNIGHT/digital-clock-timezone.git
cd digital-clock-timezone

# Open in browser (Python 3)
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 3: Using Live Server
If you have VS Code:
1. Install the "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📖 Usage

### Adding a Timezone
1. Type the timezone name (e.g., "Tokyo", "New York") in the search box
2. Click on a suggestion or press Enter
3. Click the "+ Add Timezone" button
4. The clock will appear in the grid

### Removing a Timezone
1. Click the "🗑️ Remove" button on any clock card
2. The timezone will be removed from your view

### Copying Time Information
1. Click the "📋 Copy" button on any clock card
2. The time and date will be copied to your clipboard

### Toggling Time Format
1. Click "Toggle 24H/12H" button to switch between formats
2. All clocks update instantly

### Reset to Default
1. Click "Reset to Default" button
2. Confirm the action
3. Your clock selection will reset to the default timezones (New York, London, Tokyo, Sydney)

## 📋 Supported Timezones

The app includes 50+ major cities across:
- 🌍 **Africa**: Cairo, Lagos, Johannesburg, Nairobi, Casablanca, Accra
- 🌎 **Americas**: New York, Los Angeles, Chicago, Toronto, Vancouver, Mexico City, São Paulo, Buenos Aires, Santiago
- 🌏 **Asia**: Dubai, Bangkok, Singapore, Hong Kong, Shanghai, Tokyo, Seoul, Manila, Jakarta, Kolkata, Mumbai, Karachi, Tehran, Jerusalem, Istanbul, Moscow, Almaty, Baku
- 🇪🇺 **Europe**: London, Paris, Berlin, Madrid, Rome, Amsterdam, Brussels, Vienna, Prague, Warsaw, Athens, Helsinki, Stockholm, Oslo, Copenhagen, Lisbon, Zurich
- 🏝️ **Oceania**: Sydney, Melbourne, Brisbane, Perth, Adelaide, Auckland, Fiji, Honolulu

## 🎨 UI Features

- **Dark Theme**: Easy on the eyes with modern dark gradient background
- **Smooth Animations**: Slide and fade animations for smooth interactions
- **Responsive Grid**: Automatically adapts to screen size
- **Hover Effects**: Cards lift up and glow when hovered
- **Visual Feedback**: Button states and interactive elements

## 💾 Local Storage

Your selected timezones are automatically saved to browser's local storage:
- Persists across browser sessions
- No backend required
- Data stored locally (privacy-friendly)

## 📱 Responsive Breakpoints

- **Desktop**: Multi-column grid layout
- **Tablet**: 2-column grid
- **Mobile**: Single column layout
- **Small Phones**: Optimized spacing and font sizes

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, and grid
- **Vanilla JavaScript**: No dependencies, pure JS
- **LocalStorage API**: Client-side data persistence
- **Intl API**: Native timezone and locale support

## 📄 Project Structure

```
digital-clock-timezone/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── app.js              # Main application logic
├── README.md           # Documentation (this file)
└── LICENSE             # MIT License
```

## 🎯 Key Functions

### Core Functions
- `getTimeInTimezone(timezone)` - Get formatted time for timezone
- `getDateInTimezone(timezone)` - Get formatted date for timezone
- `getTimezoneOffset(timezone)` - Get UTC offset
- `addClock(timezone)` - Add new timezone to display
- `removeClock(timezone)` - Remove timezone from display
- `updateClocks()` - Update all clock displays

### UI Functions
- `renderClocks()` - Render clock cards to DOM
- `showSuggestions(query)` - Show timezone suggestions
- `setupEventListeners()` - Initialize event handlers

## 🔄 Update Cycle

- Clock updates every **1 second**
- All timezones update simultaneously
- Zero lag or delay
- Efficient DOM updates using data attributes

## 🌐 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

Requires ES6+ JavaScript support and Intl API.

## 🚀 Performance

- **Lightweight**: ~15KB total (HTML + CSS + JS)
- **No Dependencies**: Pure vanilla JavaScript
- **Efficient Updates**: Targeted DOM updates using selectors
- **Smooth Animations**: GPU-accelerated CSS transitions
- **Fast Load Time**: ~100ms initial load

## 🎓 Learning Resources

This project demonstrates:
- Modern JavaScript (ES6+)
- DOM manipulation and event handling
- CSS Grid and Flexbox layouts
- Local Storage API usage
- Intl DateTimeFormat API
- Responsive web design
- Animation and transitions

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

## 🙏 Acknowledgments

- Built with ❤️ using vanilla web technologies
- Inspired by the need for a simple, beautiful timezone clock
- Thanks to the web development community

---

**Enjoy tracking time across the globe! 🌎🕐**