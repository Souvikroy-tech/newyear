function wishUser() {
    const name = document.getElementById('nameInput').value.trim();
    const messageDiv = document.getElementById('message');

    if (name) {
        messageDiv.innerHTML = `🎉 Happy New Year, <strong>${name}</strong>! 🎆`;
    } else {
        messageDiv.innerHTML = '🎉 Happy New Year to Everyone! 🎆';
    }
    createFireworks();
}

function createFireworks() {
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1500);
    }
}
