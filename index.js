import fetch from "node-fetch";

const PING_URLS = [
    "https://lemon-16bot.onrender.com",
    "https://your-second-bot.onrender.com"
];

const INTERVAL = 60 * 1000; // 1 minute

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

setInterval(pingBots, INTERVAL);
console.log("Ping bot started...");
