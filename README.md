# swift-panel

## 1. Purpose of this Application
**swift-panel** is a lightweight, single-page application designed to serve as a centralized, customizable dashboard for accessing your most important links and resources quickly. It features a modern, eye-friendly theme and a responsive layout that works well on all devices, from mobile phones to desktop screens.


## 2. How to Install
This application is built using standard HTML5, CSS3, and JavaScript, and requires four files to be present in the same directory:

`index.html`: The main structure.
`style.css`: All styling for the dark theme and layout.
`script.js`: The logic for setting the background and loading the links.
`config.json`: The file containing all your links (pills).

### To Run Locally:
Because the `script.js` file uses the fetch API to load `config.json`, simply opening `index.html` directly in a browser MAY result in a CORS error (Cross-Origin Resource Sharing).

To avoid this, you must run the application using a local web server. A simple method is using Python:

```
# In the directory containing all the project files
python3 -m http.server
```

Then, open your browser and navigate to `http://localhost:8000`


## 3. Instructions for Configuration
All primary configuration happens within two files: `script.js` for global settings and `config.json` for the links.

### A. Global Settings (`script.js`)
Edit the constants at the top of the file within the `// --- CONFIGURATION ---` section:

```
ConstantPurpose
`HEADER_TEXT`
Sets the main title displayed at the top of the panel (currently `'swift-panel'`).

`BACKGROUND_IMAGE_URL`
Defines the filename for the full-screen background image (currently `'swift-panel.jpg'`). Ensure the file is in the same directory.

`CONFIG_FILE`
The name of the JSON file containing the links (default is `'config.json'`).
```

### B. Configuring Links (`config.json`)
This JSON file holds an array of objects, where each object defines a link "pill."

Each link object supports the following fields:

```
`label` The text displayed on the button (e.g., "Google Search").

`url` The destination URL when the pill is clicked.

`image` (optional) If provided, this URL (e.g., a path to an icon file) is used as a small background image/icon on the left side of the pill.
```

Example of `config.json` structure:
```
[
  {
    "id": 1,
    "label": "GitHub Profile",
    "url": "[https://github.com](https://github.com)",
    "image": "images/github-icon.svg" 
  },
  {
    "id": 2,
    "label": "Documentation",
    "url": "[https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)"
    // Note: This pill will not have an icon
  }
]
```

## 4. Credits and Attribution
If you redistribute this work, please provide credit to the original author:
**220 (E Castañeda) [2-2-0.online](2-2-0.online)**

## 5. License (GNU General Public License v3.0)
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see [](https://www.gnu.org/licenses/).



