# YouTube Clone

A modern React-based YouTube clone application that allows users to search and watch videos in a clean, responsive interface. This project demonstrates the implementation of a real-world video streaming platform using React.js and the YouTube Data API.

## Features

- 🔍 **Video Search**: Search for any video content using the YouTube Data API
- 📺 **Video Playback**: Watch videos directly in the application
- 📱 **Responsive Design**: Clean and modern UI that works across different screen sizes
- 🎯 **Related Videos**: Browse through related video suggestions
- ⚡ **Real-time Updates**: Instant search results and video loading

## Technical Stack

- **Frontend Framework**: React.js
- **API Integration**: YouTube Data API v3
- **HTTP Client**: Axios
- **Styling**: Semantic UI for responsive and modern design
- **State Management**: React's built-in state management

## Project Structure

```
src/
├── APIs/
│   └── Youtube.js        # YouTube API configuration
├── Components/
│   ├── App.js           # Main application component
│   ├── SearchBar.js     # Search functionality
│   ├── VideoDetail.js   # Video player component
│   ├── VideoItem.js     # Individual video item
│   └── VideoList.js     # List of video results
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3002](http://localhost:3002) to view it in the browser

## API Configuration

To use this application, you'll need to:

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the YouTube Data API v3
3. Create an API key
4. Replace the `KEY` constant in `App.js` with your API key

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
