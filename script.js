// Update the clock every second
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock.textContent = time;
}

// Initialize the clock
setInterval(updateClock, 1000);
updateClock();
