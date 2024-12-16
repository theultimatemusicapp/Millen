// Toggle Hamburger Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Toggle Resource Content Visibility
function toggleContent(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
    element.classList.toggle('active');
}

// Handle Template Download
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const templateName = event.target.dataset.template;
        downloadTemplate(templateName);
    });
});

function downloadTemplate(templateName) {
    const templates = {
        optimise_spotify_profile: `
Optimise Your Spotify Profile:
- Use high-quality images, a compelling bio, and links to your socials.
- Highlight your best or newest track with "Artist Pick."
- Feature playlists mixing your songs with others in your genre.`,
        spotify_for_artists: `
Leverage Spotify for Artists:
- Claim your profile to access analytics and submission tools.
- Pitch unreleased tracks to Spotify's editorial team with detailed descriptions.`,
    };

    const content = templates[templateName] || "Template not found.";
    const filename = `${templateName.replace(/_/g, " ")}.txt`;

    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
