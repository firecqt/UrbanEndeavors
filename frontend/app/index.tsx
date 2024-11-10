import { AppRegistry } from 'react-native';
import App from '../App';  // Import the App component
import { expo } from '../app.json'; // Import expo object from app.json
const appName = expo.name; // Access the name property

// Register the App component to start the app
AppRegistry.registerComponent(appName, () => App);