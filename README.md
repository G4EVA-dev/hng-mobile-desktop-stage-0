# HNG Task 0 - Mobile App

## Overview
This is a mobile application developed using [Expo](https://expo.dev) and React Native. The application serves as a task submission for the HNG internship program. It includes navigation to relevant links such as the GitHub repository and HNG hire page. The app features a simple UI with a responsive design and an animated fade-in effect.

## Features
- **Expo-based React Native App**: Built with `create-expo-app` for ease of development and deployment.
- **Professional UI**: Styled with the HNG brand colors (`#00aeff` and white) for consistency and aesthetic appeal.
- **Smooth Animations**: Uses `Animated` API for a fade-in effect on app launch.
- **Navigation Links**: Provides direct access to the GitHub repository and HNG hire page.
- **Mobile Optimization**: Designed to be fully responsive and work seamlessly across different screen sizes.

## Project Links
- **GitHub Repository:** [Click here](https://github.com/G4EVA-dev/hng-mobile-desktop-stage-0.git)
- **HNG Hire Page:** [Click here](https://hng.tech/hire)

## Installation and Setup
To run this project locally, follow the steps below:

### 1. Clone the Repository
```bash
git clone https://github.com/G4EVA-dev/hng-mobile-desktop-stage-0.git
cd app
```

### 2. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Run the Application
Start the Expo development server:
```bash
npx expo start
```
This command will provide options to open the app in:
- An Android emulator ([setup guide](https://docs.expo.dev/workflow/android-studio-emulator/))
- An iOS simulator ([setup guide](https://docs.expo.dev/workflow/ios-simulator/))
- The Expo Go app ([download here](https://expo.dev/go))

## Development Guidelines
### File Structure
The project follows a modular file structure:
```
├── assets/          # Static assets (logo, images, etc.)
├── app/             # Main application source code
├── components/      # Reusable UI components
├── styles/          # Global styles and themes
├── package.json     # Dependencies and scripts
├── Index.tsxx        # Root component
```
### Code Style
- Use **TypeScript** for type safety.
- Follow **React Native best practices**.
- Maintain **consistent styling** with `StyleSheet.create()`.

### Play with the app here
([appetize.io](https://appetize.io/app/b_7gdb7ybx6mazzjfgoyddhctdi4))

## Contribution Guidelines
### How to Contribute
We welcome contributions! Follow these steps:
1. **Fork the Repository**
   - Click the **Fork** button on GitHub.
2. **Clone Your Fork**
   ```bash
   git clone https://github.com/G4EVA-dev/hng-mobile-desktop-stage-0.git
   cd app
   ```
3. **Create a New Branch**
   ```bash
   git checkout -b feature-your-feature-name
   ```
4. **Make Changes and Commit**
   ```bash
   git add .
   git commit -m "Added new feature"
   ```
5. **Push to Your Fork and Create a Pull Request**
   ```bash
   git push origin feature-your-feature-name
   ```
   - Open a **Pull Request** on the main repository.

### Contribution Guidelines
- Ensure code quality and follow project conventions.
- Submit clear, descriptive pull requests.
- Keep commits **atomic** (one feature per commit).

## License
This project is open-source and licensed under the **MIT License**.

## Contact
For any issues or suggestions, feel free to reach out via [GitHub Issues](https://github.com/G4EVA-dev/hng-mobile-desktop-stage-0/issues).

---

Thank you for contributing to the HNG Task 0 Mobile App! 🚀

