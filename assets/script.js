const printButton = document.getElementById('print-btn');

if (printButton) {
    printButton.addEventListener('click', () => {
        window.print();
    });
}

const themeSwitcherButton = document.getElementById("theme-switcher");

if (themeSwitcherButton) {
    const themes = ["light", "dark", "orange", "green"];
    const labels = {
        light: "Mode clair",
        dark: "Mode obscur",
        orange: "Mode orange",
        green: "Mode vert",
    };

    const icons = {
        light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                    <circle cx="64" cy="64" r="20" fill="currentColor"/>
                    <line x1="64" y1="4" x2="64" y2="20" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <line x1="64" y1="108" x2="64" y2="124" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <line x1="4" y1="64" x2="20" y2="64" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <line x1="108" y1="64" x2="124" y2="64" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <line x1="22" y1="22" x2="34" y2="34" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <line x1="94" y1="94" x2="106" y2="106" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <line x1="22" y1="106" x2="34" y2="94" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                    <line x1="94" y1="34" x2="106" y2="22" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
            </svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                    <path d="M64 12.8 C35.72 12.8 12.8 35.72 12.8 64 C12.8 92.28 35.72 115.2 64 115.2 C77.76 115.2 90.26 109.76 99.46 100.92 C100.92 99.52 101.34 97.34 100.52 95.5 C99.7 93.66 97.78 92.52 95.76 92.68 C94.78 92.76 93.8 92.8 92.8 92.8 C72.48 92.8 56 76.32 56 56 C56 41.58 64.3 29.08 76.42 23.04 C78.24 22.14 79.28 20.18 79.04 18.16 C78.8 16.14 77.32 14.5 75.34 14.06 C71.68 13.24 67.88 12.8 64 12.8 z"/>
            </svg>`,
        orange: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                    <path d="M90.6 5.5L88.2 7.9C81.9 14.1 81.9 24.3 88.2 30.5C91.3 33.6 94.4 36.7 97.6 39.9C103.8 46.1 113.9 46.1 120.2 39.9L122.6 37.5C123.8 36.2 123.8 34.2 122.6 32.9L120.2 30.5C113.9 24.3 103.8 24.3 97.6 30.5C103.8 24.3 103.8 14.1 97.6 7.9L95.1 5.5C93.9 4.2 91.9 4.2 90.6 5.5zM66.3 32C57.3 32 48.9 36.1 43.3 42.9L54.7 54.2C56.5 56.1 56.5 59.1 54.7 61C52.8 62.8 49.7 62.9 47.9 61L38.3 51.4L13.4 106.2C12.3 108.6 12.9 111.4 14.7 113.3C16.6 115.2 19.5 115.7 21.9 114.6L50.2 101.8L41.5 93C39.6 91.1 39.6 88.1 41.5 86.2C43.4 84.4 46.4 84.3 48.3 86.2L59.6 97.5L78.6 88.9C89.2 84 96.1 73.4 96.1 61.8C96.1 45.3 82.7 32 66.3 32z"/>
            </svg>`,
        green: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30" height="30" fill="currentColor" aria-hidden="true">
                    <path d="M18.74,101.766 c0.765-20.616,10.417-41.25,26.687-56.408 c9.794-9.127,21.183-15.737,33.849-19.642 c0.185-0.058,0.371-0.1,0.557-0.154 c-0.174-0.501-0.316-1.018-0.507-1.508 C75.278,13.514,67.709,5.346,58.302,0 c-10.431,3.237-20.001,8.953-28.059,16.907 c-8.04,7.949-14.525,18.106-18.297,29.958 c-3.765,11.847-4.258,23.709-1.901,34.546 C11.664,88.781,14.584,95.711,18.74,101.766z"/>
                    <path d="M115.126,28.562 c-11.258-1.436-22.875-0.386-34.038,3.03 c-11.166,3.447-21.956,9.404-31.468,18.269 c-17.475,16.283-26.098,38.36-24.62,59.09 c-2.468,1.875-4.961,3.729-7.529,5.56 c-2.594,1.821-5.154,3.654-8.348,5.46 L13.677,128 c3.784-2.151,6.429-4.068,9.149-5.973 c2.678-1.909,5.235-3.812,7.759-5.73 c19.775,6.834,45.448,1.46,65.187-16.93 c10.708-9.969,18.084-22.387,21.479-35.057 c3.425-12.769,2.746-25.622-2.125-35.858 z M101.694,46.972 c-4.994,7.292-12.548,15.993-20.68,24.582 c7.224-1.184,12.999-2.259,15.765-2.79 c1.164-0.222,1.793-0.349,1.794-0.349 c1.112-0.222,2.191,0.499,2.414,1.609 c0.222,1.112-0.499,2.191-1.609,2.414 c-0.02,0.004-9.997,1.997-23.075,4.024 c-1.442,1.478-2.89,2.944-4.334,4.388 c-4.403,4.4-8.753,8.597-12.773,12.366 c9.889-1.536,20.011-3.593,24.95-4.639 c1.963-0.415,3.101-0.667,3.104-0.669 c1.106-0.244,2.201,0.452,2.448,1.558 c0.244,1.106-0.452,2.201-1.558,2.448 c-0.03,0.004-18.503,4.114-34.015,6.183 l-0.242,0.032 c-4.058,3.695-7.531,6.722-10.011,8.751 v0.002 c-0.875,0.717-2.169,0.587-2.886-0.29 c-0.717-0.875-0.587-2.169,0.29-2.886 c2.586-2.115,6.367-5.422,10.796-9.48 c0.126-0.889,0.265-2.011,0.409-3.319 c0.242-2.196,0.5-4.863,0.755-7.665 c0.511-5.602,1.002-11.737,1.314-15.747 c0.208-2.672,0.337-4.394,0.337-4.398 c0.084-1.13,1.067-1.977,2.197-1.893 c1.13,0.082,1.977,1.067,1.893,2.197 c0,0.008-1.154,15.581-2.167,25.579 c-0.034,0.334-0.066,0.627-0.1,0.945 c3.9-3.663,8.114-7.729,12.36-11.975 c1.498-1.498,2.998-3.019,4.494-4.551 c0.613-2.452,1.062-6.361,1.33-10.279 c0.299-4.24,0.417-8.526,0.465-11.268 c0.032-1.827,0.032-2.958,0.032-2.96 c0-1.134,0.917-2.051,2.051-2.051
    s2.051,0.918,2.051,2.051 c-0.002,0.036,0.004,10.435-0.877,18.817 c-0.018,0.162-0.038,0.317-0.056,0.477 c7.853-8.328,15.084-16.7,19.751-23.528 c0.639-0.935,1.915-1.174,2.85-0.535 C102.095,44.761,102.334,46.037,101.694,46.972z"/>
                </svg>`,
    };

    let currentThemeIndex = 0; // Start with light theme
    const updateThemeSwitcherButton = (themeIndex) => {
        const currentTheme = themes[themeIndex];

        themeSwitcherButton.innerHTML = icons[currentTheme];
        themeSwitcherButton.setAttribute("aria-label", labels[currentTheme]);
        themeSwitcherButton.setAttribute("title", labels[currentTheme]);
        themeSwitcherButton.classList.remove(...themes);
        themeSwitcherButton.classList.add(currentTheme);
    };

    themeSwitcherButton.addEventListener("click", () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const newTheme = themes[currentThemeIndex];
        document.body.setAttribute("data-theme", newTheme);

        const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
        updateThemeSwitcherButton(nextThemeIndex);
    });
}
