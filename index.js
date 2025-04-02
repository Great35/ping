import fetch from "node-fetch";
import express from "express";

// Create an Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000; // Use Render's port or fallback to 3000 for local development

// Endpoint to test the bot is working
app.get("/", (req, res) => {
    res.send("Bot is live and working!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Ping URLs
const PING_URLS = [
    "https://lemon-16bot.onrender.com", // Your main bot URL
    "https://your-second-bot.onrender.com" // Your second bot URL
];

const INTERVAL = 3 * 60 * 1000; // Ping every 3 minutes

// Function to ping each bot URL
async function pingBots() {
    for (const url of PING_URLS) {
        try {
            const response = await fetch(url);
            console.log(`Pinged ${url} at ${new Date().toLocaleTimeString()} - Status: ${response.status}`);
        } catch (error) {
            console.log(`Ping failed for ${url}:`, error.message);
        }
    }
}

// Set interval to ping the bots periodically
setInterval(pingBots, INTERVAL);

// Start pinging bot
console.log("Ping bot started...");
