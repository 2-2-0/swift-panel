// swift-panel, by 220 (2-2-0.online) check README.md for details

// --- CONFIGURATION ---
// Variable for easy background image change in the future
const BACKGROUND_IMAGE_URL = '220.jpg'; 
const CONFIG_FILE = 'config.json';
const HEADER_TEXT = 'swift-panel'; // Header text for the application
// --- END CONFIGURATION ---


document.addEventListener('DOMContentLoaded', () => {
    const mainPanel = document.getElementById('main-panel');
    const body = document.body;
    const appHeader = document.getElementById('app-header'); // Get the new header element

    // Set the header text from the constant
    if (appHeader) {
        appHeader.textContent = HEADER_TEXT;
    }

    // 1. Apply Full-Screen Background Image with Dark Overlay for readability
    body.style.backgroundImage = 
        `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${BACKGROUND_IMAGE_URL}')`;


    /**
     * Renders the link pills based on the provided data array.
     * @param {Array} pillsData - Array of link objects.
     */
    function renderPills(pillsData) {
        if (!pillsData || pillsData.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'No links configured.';
            mainPanel.appendChild(message);
            return;
        }

        pillsData.forEach(item => {
            const pillLink = document.createElement('a');
            
            // Set necessary attributes and classes
            pillLink.href = item.url;
            pillLink.target = '_blank'; // Opens in a new tab
            pillLink.classList.add('pill'); 

            // LOGIC: Check for image field and set it as background
            if (item.image) {
                // Set the image as a background and re-apply the pill background color
                pillLink.style.backgroundImage = 
                    `url('${item.image}'), linear-gradient(to right, #0933a1, #0933a1)`;

                // Add extra padding-left to shift the text right 
                // This ensures the text doesn't overlap the background image icon
                pillLink.style.paddingLeft = '55px'; 
            }
            
            // Create span for text content 
            const labelSpan = document.createElement('span');
            labelSpan.textContent = item.label;

            // Append text content
            pillLink.appendChild(labelSpan);
            
            // Append the new pill element to the main-panel
            mainPanel.appendChild(pillLink);
        });
    }

    /**
     * Fetches the configuration data and initiates rendering.
     */
    async function loadAndRender() {
        try {
            const response = await fetch(CONFIG_FILE);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${CONFIG_FILE}: ${response.statusText}`);
            }
            const data = await response.json();
            renderPills(data);
        } catch (error) {
            console.error('Error loading configuration data:', error);
            mainPanel.innerHTML = '<p style="color: red; padding: 20px;">Error loading links. Please ensure "config.json" is available.</p>';
        }
    }

    loadAndRender();
});
