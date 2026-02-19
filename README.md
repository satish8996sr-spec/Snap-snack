## Setup and Build Instructions for APK using Expo and EAS

1. **Install Node.js and Expo CLI:**
   Make sure you have Node.js installed. Then, install Expo CLI by running:
   ```bash
   npm install -g expo-cli
   ```

2. **Create a New Expo Project:**
   To create a new project, run:
   ```bash
   expo init my-project
   ```

3. **Navigate to Your Project:**
   Move into your project directory:
   ```bash
   cd my-project
   ```

4. **Install EAS CLI:**
   To install EAS CLI, run:
   ```bash
   npm install -g eas-cli
   ```

5. **Configure EAS:**
   Initialize EAS in your project with the following command:
   ```bash
   eas build:configure
   ```

6. **Build APK:**
   To build an APK, run:
   ```bash
   eas build --platform android
   ```

7. **Download the APK:**
   Once the build is complete, you will receive a link to download your APK file.

