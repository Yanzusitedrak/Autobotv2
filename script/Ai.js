const axios = require('axios');

module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Kyle", // Changed the credits to "Kyle"
    description: "EDUCATIONAL",
    hasPrefix: false,
    commandCategory: "AI",
    usages: "[question]",
    cooldowns: 10
};

module.exports.run = async function ({ api, event, args }) {
    const question = args.join(' ');
    const apiUrl = `https://markdevsapi-2014427ac33a.herokuapp.com/gpt4?ask=${encodeURIComponent(question)}`;

    if (!question) return api.sendMessage("Please provide a question first.", event.threadID, event.messageID);

    try {
        api.sendMessage("Please bear with me while I ponder your request...", event.threadID, event.messageID);

        const response = await axios.get(apiUrl);
        const answer = response.data.answer;

        api.sendMessage(`❖𝗔𝗨𝗧𝗢 𝗕𝗢𝗧 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗘❏\n━━━━━━━━━━━━━━━━━━━\n𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: ${question}\n━━━━━━━━━━━━━━━━━━━\n𝗔𝗻𝘀𝘄𝗲𝗿: ${answer}\n\nthis bot was create by Kyle Bait-it\n\n𝘊𝘳𝘦𝘥𝘪𝘵𝘴: https://www.facebook.com/kyleyukaro\n\n`, event.threadID, event.messageID); // Added the FB link
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while processing your request.", event.threadID);
    }
};
