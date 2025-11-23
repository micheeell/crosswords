const printButton = document.getElementById('print-btn');

if (printButton) {
    printButton.addEventListener('click', () => {
        window.print();
    });
}

// Initialize mode based on system preference if not set
if (!document.body.hasAttribute('data-mode')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.setAttribute('data-mode', prefersDark ? 'dark' : 'light');
}

const toggleMode = document.getElementById('mode-toggle');
const themeSwitcherButton = document.getElementById('theme-switcher');
let updateDefaultIcon;
let icons = {};

if (themeSwitcherButton) {
    // Theme list (rotates with the theme switcher button)
    const themes = ["default", "orange", "green", "red", "blue"];
    const labels = {
        default: "Défaut",
        orange: "Mode orange",
        green: "Mode vert",
        red: "Mode rouge",
        blue: "Mode bleu",
    };

    icons = {
        default: `<svg>💡</svg>`,   // will be overwritten by updateDefaultIcon()
        orange: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                    <path d="M90.6 5.5L88.2 7.9C81.9 14.1 81.9 24.3 88.2 30.5C91.3 33.6 94.4 36.7 97.6 39.9C103.8 46.1 113.9 46.1 120.2 39.9L122.6 37.5C123.8 36.2 123.8 34.2 122.6 32.9L120.2 30.5C113.9 24.3 103.8 24.3 97.6 30.5C103.8 24.3 103.8 14.1 97.6 7.9L95.1 5.5C93.9 4.2 91.9 4.2 90.6 5.5zM66.3 32C57.3 32 48.9 36.1 43.3 42.9L54.7 54.2C56.5 56.1 56.5 59.1 54.7 61C52.8 62.8 49.7 62.9 47.9 61L38.3 51.4L13.4 106.2C12.3 108.6 12.9 111.4 14.7 113.3C16.6 115.2 19.5 115.7 21.9 114.6L50.2 101.8L41.5 93C39.6 91.1 39.6 88.1 41.5 86.2C43.4 84.4 46.4 84.3 48.3 86.2L59.6 97.5L78.6 88.9C89.2 84 96.1 73.4 96.1 61.8C96.1 45.3 82.7 32 66.3 32z"/>
            </svg>`,
        green: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                    <path d="M18.74,101.766 c0.765-20.616,10.417-41.25,26.687-56.408 c9.794-9.127,21.183-15.737,33.849-19.642 c0.185-0.058,0.371-0.1,0.557-0.154 c-0.174-0.501-0.316-1.018-0.507-1.508 C75.278,13.514,67.709,5.346,58.302,0 c-10.431,3.237-20.001,8.953-28.059,16.907 c-8.04,7.949-14.525,18.106-18.297,29.958 c-3.765,11.847-4.258,23.709-1.901,34.546 C11.664,88.781,14.584,95.711,18.74,101.766z"/>
                    <path d="M115.126,28.562 c-11.258-1.436-22.875-0.386-34.038,3.03 c-11.166,3.447-21.956,9.404-31.468,18.269 c-17.475,16.283-26.098,38.36-24.62,59.09 c-2.468,1.875-4.961,3.729-7.529,5.56 c-2.594,1.821-5.154,3.654-8.348,5.46 L13.677,128 c3.784-2.151,6.429-4.068,9.149-5.973 c2.678-1.909,5.235-3.812,7.759-5.73 c19.775,6.834,45.448,1.46,65.187-16.93 c10.708-9.969,18.084-22.387,21.479-35.057 c3.425-12.769,2.746-25.622-2.125-35.858 z M101.694,46.972 c-4.994,7.292-12.548,15.993-20.68,24.582 c7.224-1.184,12.999-2.259,15.765-2.79 c1.164-0.222,1.793-0.349,1.794-0.349 c1.112-0.222,2.191,0.499,2.414,1.609 c0.222,1.112-0.499,2.191-1.609,2.414 c-0.02,0.004-9.997,1.997-23.075,4.024 c-1.442,1.478-2.89,2.944-4.334,4.388 c-4.403,4.4-8.753,8.597-12.773,12.366 c9.889-1.536,20.011-3.593,24.95-4.639 c1.963-0.415,3.101-0.667,3.104-0.669 c1.106-0.244,2.201,0.452,2.448,1.558 c0.244,1.106-0.452,2.201-1.558,2.448 c-0.03,0.004-18.503,4.114-34.015,6.183 l-0.242,0.032 c-4.058,3.695-7.531,6.722-10.011,8.751 v0.002 c-0.875,0.717-2.169,0.587-2.886-0.29 c-0.717-0.875-0.587-2.169,0.29-2.886 c2.586-2.115,6.367-5.422,10.796-9.48 c0.126-0.889,0.265-2.011,0.409-3.319 c0.242-2.196,0.5-4.863,0.755-7.665 c0.511-5.602,1.002-11.737,1.314-15.747 c0.208-2.672,0.337-4.394,0.337-4.398 c0.084-1.13,1.067-1.977,2.197-1.893 c1.13,0.082,1.977,1.067,1.893,2.197 c0,0.008-1.154,15.581-2.167,25.579 c-0.034,0.334-0.066,0.627-0.1,0.945 c3.9-3.663,8.114-7.729,12.36-11.975 c1.498-1.498,2.998-3.019,4.494-4.551 c0.613-2.452,1.062-6.361,1.33-10.279 c0.299-4.24,0.417-8.526,0.465-11.268 c0.032-1.827,0.032-2.958,0.032-2.96 c0-1.134,0.917-2.051,2.051-2.051
    s2.051,0.918,2.051,2.051 c-0.002,0.036,0.004,10.435-0.877,18.817 c-0.018,0.162-0.038,0.317-0.056,0.477 c7.853-8.328,15.084-16.7,19.751-23.528 c0.639-0.935,1.915-1.174,2.85-0.535 C102.095,44.761,102.334,46.037,101.694,46.972z"/>
                </svg>`,
        red: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" height="30" width="30">
                        <path d="M28.062 126.942c5.157 1.157 24.046 4.211 32.092-10.763 1.029-1.912 1.862-3.692 2.587-5.393-2.924-5.411-3.614-9.936-3.51-13.709-1.3.469-2.811.167-3.64-1.435-1.938-3.744-4.742-6.21-8.599-7.877-1.63-.703-1.982-3.065-1.168-4.454.977-1.667 2.826-1.871 4.454-1.168 4.054 1.749 7.388 4.584 9.765 8.228l.004-.026c.33-1.969 1.192-4.065 2.42-6.066-.039-.08-.08-.165-.119-.245-2.83-5.904-11.783-10.97-17.937-9.363-.567.148-1.048.26-1.532.375 4.102-24.164 14.72-44.505 32.878-59.277-8.293 17.837-4.226 40.038 2.846 58.711 1.446-.078 2.481-.187 3.191-.293.608-.649 1.513-1.721 2.739-3.362-7.916-21.199-11.701-47.644 6.475-64.193.128-.117.223-.243.328-.365 3.173-1.159-3.69-6.7-4.532-6.24C57.865 15.848 41.183 42.071 36 74.294c-.721-.499-1.532-1.083-2.529-1.854-5.033-3.887-15.256-2.728-20.17 1.595-4.903 4.313-12.422 10.023-10.559 30.438C4.285 121.408 22.869 125.987 28.062 126.942z"/>
                        <path d="M125.136 93.771c-3.885-20.131-12.695-23.524-18.603-26.306-1.904-.896-4.243-1.326-6.666-1.326-5.116 0-10.605 1.917-13.153 5.398-.458.625-.877 1.179-1.261 1.671-1.176 1.508-2.019 2.433-2.598 2.998-.721.141-1.819.291-3.44.399-.749.05-1.6.091-2.594.117-5.042.132-10.601 4.79-13.224 9.932-.684 1.339-1.181 2.711-1.402 4.046-.719 4.302-1.921 9.834 1.613 17.392 1.758 3.759 4.666 8.009 9.431 12.877 4.779 4.881 10.431 6.481 15.784 6.481 7.968 0 15.269-3.54 18.039-5.062 6.12-3.181 22.694-12.746 19.471-29.437zM109.133 85.15c-3.086-4.382-7.718-6.475-12.964-5.016-4.052 1.129-5.771-5.155-1.732-6.279 8.206-2.283 15.551 1.239 20.318 8.007 2.424 3.444-3.226 6.692-5.622 3.288z"/>
                    </svg>`,
        blue: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                        <path d="M68.82 11.2C68.82 8.54 66.68 6.4 64.02 6.4C61.36 6.4 59.22 8.54 59.22 11.2L59.22 26.82L54.62 22.22C52.74 20.34 49.7 20.34 47.84 22.22C45.98 24.1 45.96 27.14 47.84 29.0L59.24 40.4L59.24 55.7L46.0 48.06L41.82 32.5C41.14 29.94 38.5 28.42 35.94 29.1C33.38 29.78 31.84 32.4 32.54 34.96L34.22 41.26L20.7 33.46C18.4 32.12 15.46 32.9 14.14 35.2C12.82 37.5 13.6 40.44 15.9 41.76L29.42 49.56L23.12 51.24C20.56 51.92 19.04 54.56 19.72 57.12C20.4 59.68 23.04 61.2 25.6 60.52L41.16 56.34L54.4 63.98L41.16 71.62L25.6 67.44C23.04 66.76 20.4 68.28 19.72 70.84C19.04 73.4 20.56 76.04 23.12 76.72L29.42 78.4L15.9 86.2C13.6 87.56 12.82 90.5 14.14 92.8C15.46 95.1 18.4 95.88 20.7 94.56L34.22 86.76L32.54 93.06C31.86 95.62 33.38 98.26 35.94 98.94C38.5 99.62 41.14 98.1 41.82 95.54L46.0 79.98L59.24 72.34L59.24 87.64L47.84 99.04C45.96 100.92 45.96 103.96 47.84 105.82C49.72 107.68 52.76 107.7 54.62 105.82L59.22 101.22L59.22 116.84C59.22 119.5 61.36 121.64 64.02 121.64C66.68 121.64 68.82 119.5 68.82 116.84L68.82 101.22L73.42 105.82C75.3 107.7 78.34 107.7 80.2 105.82C82.06 103.94 82.08 100.9 80.2 99.04L68.8 87.64L68.8 72.34L82.04 79.98L86.22 95.54C86.9 98.1 89.54 99.62 92.1 98.94C94.66 98.26 96.18 95.62 95.5 93.06L93.82 86.76L107.34 94.56C109.64 95.88 112.58 95.1 113.9 92.8C115.22 90.5 114.44 87.56 112.14 86.24L98.62 78.44L104.92 76.76C107.48 76.08 109.0 73.44 108.32 70.88C107.64 68.32 105.0 66.8 102.44 67.48L86.88 71.66L73.64 64.02L86.88 56.38L102.44 60.56C105.0 61.24 107.64 59.72 108.32 57.16C109.0 54.6 107.48 51.96 104.92 51.28L98.62 49.6L112.14 41.8C114.44 40.48 115.22 37.54 113.9 35.24C112.58 32.94 109.64 32.16 107.34 33.48L93.82 41.28L95.5 34.98C96.18 32.42 94.66 29.78 92.1 29.1C89.54 28.42 86.9 29.94 86.22 32.5L82.04 48.06L68.8 55.7L68.8 40.4L80.2 29.0C82.08 27.12 82.08 24.08 80.2 22.22C78.32 20.36 75.28 20.34 73.42 22.22L68.82 26.82L68.82 11.2z" />
                    </svg>`,
    };

    updateDefaultIcon = () => {
        const currentMode = document.body.getAttribute('data-mode') || 'light';
        icons.default = (currentMode === 'light')
            ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                        <circle cx="64" cy="64" r="20" fill="currentColor"/>
                        <line x1="64" y1="4" x2="64" y2="20" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <line x1="64" y1="108" x2="64" y2="124" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <line x1="4" y1="64" x2="20" y2="64" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <line x1="108" y1="64" x2="124" y2="64" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <line x1="22" y1="22" x2="34" y2="34" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <line x1="94" y1="94" x2="106" y2="106" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <line x1="22" y1="106" x2="34" y2="94" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                        <line x1="94" y1="34" x2="106" y2="22" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                </svg>`
            : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                        <path d="M64 12.8 C35.72 12.8 12.8 35.72 12.8 64 C12.8 92.28 35.72 115.2 64 115.2 C77.76 115.2 90.26 109.76 99.46 100.92 C100.92 99.52 101.34 97.34 100.52 95.5 C99.7 93.66 97.78 92.52 95.76 92.68 C94.78 92.76 93.8 92.8 92.8 92.8 C72.48 92.8 56 76.32 56 56 C56 41.58 64.3 29.08 76.42 23.04 C78.24 22.14 79.28 20.18 79.04 18.16 C78.8 16.14 77.32 14.5 75.34 14.06 C71.68 13.24 67.88 12.8 64 12.8 z"/>
                    </svg>`;
    };

    let currentThemeIndex = 0;

    const updateThemeSwitcherButton = (nextThemeIndex) => {
        const nextTheme = themes[nextThemeIndex];
        themeSwitcherButton.innerHTML = icons[nextTheme];
        themeSwitcherButton.setAttribute("aria-label", labels[nextTheme]);
        themeSwitcherButton.setAttribute("title", labels[nextTheme]);
        themeSwitcherButton.classList.remove(...themes);
        themeSwitcherButton.classList.add(nextTheme);
    };

    // Initialize light icon and theme switcher preview on load
    updateDefaultIcon();

    // If body already has a data-theme set, start from it:
    const initialTheme = document.body.getAttribute('data-theme');
    if (initialTheme) {
        const idx = themes.indexOf(initialTheme);
        currentThemeIndex = idx >= 0 ? idx : 0;
    }

    // Render the *next* theme icon as your original code intended
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    updateThemeSwitcherButton(nextThemeIndex);

    // Rotate theme on click
    themeSwitcherButton.addEventListener("click", () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        document.body.setAttribute("data-theme", newTheme);

        // Update the preview for the next theme after the newly applied theme
        const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
        updateDefaultIcon(); // ensure light icon matches current mode
        updateThemeSwitcherButton(nextThemeIndex);
    });
}

// Toggle mode on click and refresh light icon + button preview
if (toggleMode) {
    toggleMode.addEventListener('click', () => {
        const currentMode = document.body.getAttribute('data-mode') || 'light';
        const newMode = currentMode === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-mode', newMode);

        // When mode changes, recompute the light icon and refresh the preview
        if (themeSwitcherButton) {
            updateDefaultIcon();
            const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
            updateThemeSwitcherButton(nextThemeIndex);
        }
    });
}
