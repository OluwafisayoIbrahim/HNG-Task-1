document.addEventListener('DOMContentLoaded', function() {
    function updateUTCTime() {
        const timeElement = document.getElementById('utc-time');
        const now = new Date();
        timeElement.textContent = now.toUTCString();
    }

    updateUTCTime();
    setInterval(updateUTCTime, 1000);
});