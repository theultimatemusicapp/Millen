// Predefined chatbot responses
const chatbotResponses = {
    default: "I'm sorry, I didn't quite understand that. Could you clarify your question?",
    initial: "Welcome! Are you a band or a venue?",
    band: {
        intro: "What advice are you looking for? Legal, contracts, management, booking gigs, recording, or promotion?",
        legal: "Are you looking for help with copyright, licensing, royalties, or disputes?",
        contracts: "Do you need assistance with performance contracts, management agreements, or collaboration agreements?",
        management: "Are you seeking advice on finding a manager, DIY management, or managing your band's finances?",
        booking: "Would you like tips on contacting venues, promoting your gigs, or creating a press kit?",
        recording: "Are you looking for recording studio recommendations, home studio setup advice, or tips for working with producers?",
        promotion: "Are you interested in social media marketing, creating an EPK (Electronic Press Kit), or advertising your music?",
        networking: "Would you like advice on connecting with other bands, industry professionals, or fans?",
    },
    venue: {
        intro: "What do you need help with? Finding bands, event management, contracts, marketing, logistics, or promotions?",
        band: "Are you looking for specific genres, local bands, or help reaching out to artists?",
        management: "Do you need advice on organizing events, handling staff, or managing finances?",
        contracts: "Do you need assistance with artist contracts, vendor agreements, or liability waivers?",
        marketing: "Are you interested in promoting your venue online, creating flyers, or using social media effectively?",
        logistics: "Would you like tips on event setup, equipment rentals, or dealing with technical issues?",
        promotions: "Are you looking for help with ticketing, partnerships, or creating a loyalty program for attendees?",
    },
    followUps: {
        copyright: "Would you like guidance on protecting your music, registering your work, or licensing it for commercial use?",
        licensing: "Do you want advice on how to license your music for films, ads, or streaming services?",
        royalties: "Would you like help understanding how royalties work and how to ensure you're paid fairly?",
        pressKit: "Do you need tips on creating an Electronic Press Kit (EPK) or updating your existing one?",
        socialMedia: "Would you like advice on creating content for Instagram, TikTok, or other platforms?",
        networking: "Are you interested in connecting with local musicians, event organizers, or industry professionals?",
    },
};

// Handle responses based on user input
let currentContext = "initial";

function getChatbotResponse(userMessage) {
    const message = userMessage.toLowerCase();

    // Initial question
    if (currentContext === "initial") {
        if (message.includes("band")) {
            currentContext = "band";
            return chatbotResponses.band.intro;
        } else if (message.includes("venue")) {
            currentContext = "venue";
            return chatbotResponses.venue.intro;
        }
    }

    // Band-specific flow
    if (currentContext === "band") {
        if (message.includes("legal")) {
            currentContext = "band-legal";
            return chatbotResponses.band.legal;
        } else if (message.includes("contracts")) {
            currentContext = "band-contracts";
            return chatbotResponses.band.contracts;
        } else if (message.includes("management")) {
            currentContext = "band-management";
            return chatbotResponses.band.management;
        } else if (message.includes("booking")) {
            currentContext = "band-booking";
            return chatbotResponses.band.booking;
        } else if (message.includes("recording")) {
            currentContext = "band-recording";
            return chatbotResponses.band.recording;
        } else if (message.includes("promotion")) {
            currentContext = "band-promotion";
            return chatbotResponses.band.promotion;
        } else if (message.includes("networking")) {
            currentContext = "band-networking";
            return chatbotResponses.band.networking;
        }
    }

    // Venue-specific flow
    if (currentContext === "venue") {
        if (message.includes("band")) {
            currentContext = "venue-band";
            return chatbotResponses.venue.band;
        } else if (message.includes("management")) {
            currentContext = "venue-management";
            return chatbotResponses.venue.management;
        } else if (message.includes("contracts")) {
            currentContext = "venue-contracts";
            return chatbotResponses.venue.contracts;
        } else if (message.includes("marketing")) {
            currentContext = "venue-marketing";
            return chatbotResponses.venue.marketing;
        } else if (message.includes("logistics")) {
            currentContext = "venue-logistics";
            return chatbotResponses.venue.logistics;
        } else if (message.includes("promotions")) {
            currentContext = "venue-promotions";
            return chatbotResponses.venue.promotions;
        }
    }

    // Follow-up questions
    if (message.includes("copyright")) {
        return chatbotResponses.followUps.copyright;
    } else if (message.includes("licensing")) {
        return chatbotResponses.followUps.licensing;
    } else if (message.includes("royalties")) {
        return chatbotResponses.followUps.royalties;
    } else if (message.includes("press kit")) {
        return chatbotResponses.followUps.pressKit;
    } else if (message.includes("social media")) {
        return chatbotResponses.followUps.socialMedia;
    } else if (message.includes("networking")) {
        return chatbotResponses.followUps.networking;
    }

    // Default response
    return chatbotResponses.default;
}

// Chatbot interaction
const chatbotToggler = document.querySelector("#chatbot-toggler");
const chatbotContainer = document.querySelector("#chatbot-container");
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");

chatbotToggler.addEventListener("click", () => {
    chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
});

sendMessage.addEventListener("click", () => {
    const userMessage = messageInput.value.trim();
    if (!userMessage) return;

    const userMessageElement = document.createElement("div");
    userMessageElement.className = "message user-message";
    userMessageElement.innerText = userMessage;
    chatBody.appendChild(userMessageElement);

    messageInput.value = "";
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    setTimeout(() => {
        const botResponse = getChatbotResponse(userMessage);
        const botMessageElement = document.createElement("div");
        botMessageElement.className = "message bot-message";
        botMessageElement.innerText = botResponse;
        chatBody.appendChild(botMessageElement);
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    }, 1000);
});
