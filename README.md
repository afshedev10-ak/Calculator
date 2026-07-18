# Calculator Web App

A modern, responsive calculator built with semantic HTML5, CSS3, and JavaScript. The project features a polished glassmorphism-style interface, light/dark theme switching, keyboard support, and basic arithmetic operations.

## Overview

This repository contains a single-page calculator website designed for quick and intuitive arithmetic calculations. It is a front-end-only project with no backend or database dependencies.

## Live Demo

View the project live on Netlify:

- https://afshedev10-calculator.netlify.app/

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Decimal input support
- Delete and clear functions
- Error handling for invalid operations such as division by zero
- Light/Dark theme toggle with saved preference using local storage
- Keyboard support for numbers, operators, Enter, Backspace, and Escape
- Responsive and visually polished user interface
- Accessibility-friendly buttons and live feedback regions

## Project Structure

```text
CALCULATOR/
├── index.html          # Main HTML structure for the calculator UI
├── style.css           # Styling, layout, theme colors, and animations
├── script.js           # Calculator logic, keyboard handling, and theme toggle
├── _headers/           # Optional header-related files or configuration
├── assets/             # Project assets (if any additional files are added)
└── README.md           # Project documentation
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap CDN for utility styling support
- Local Storage for theme persistence

## How It Works

The calculator interface is defined in index.html, styled in style.css, and controlled by script.js.

### Main Functionalities

- Clicking number buttons appends values to the current input
- Choosing an operator sets the arithmetic mode
- Pressing equals evaluates the expression
- AC clears the entire calculator state
- DEL removes the last entered character or resets the operator state
- Theme toggle switches between light and dark visual modes

## Usage

### Open in a browser

You can run the app by opening index.html directly in your browser.

### Optional local preview

If you prefer to preview it through a local web server, you can run a simple server from the project folder, for example:

```bash
npx serve .
```

Then open the local address shown in the terminal, usually:

```text
http://localhost:3000 (or whichever port your server prints)
```

## Keyboard Shortcuts

- Number keys: enter digits
- Operators: +, -, *, /
- Enter or =: calculate
- Backspace: delete last input
- Escape or Delete: clear the calculator
- . : add a decimal point

## Design Notes

The UI uses a glassmorphism-inspired design with:

- soft blurred backgrounds
- rounded buttons and display panel
- animated theme transitions
- color variations for light and dark themes

## Accessibility

The calculator includes:

- ARIA labels for interactive elements
- A live region for error messages
- Keyboard-accessible controls

## Future Improvements

Possible enhancements for this project include:

- Support for more advanced mathematical functions
- History of previous calculations
- Scientific calculator mode
- Better input validation and formatting
- Mobile-first refinements and animation polish

## License

No explicit license has been provided for this repository.

## Author

This project appears to be a personal frontend project for building a calculator web app.
