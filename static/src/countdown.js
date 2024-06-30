function startCountdown(element, targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const targetTime = new Date(targetDate).getTime();
        const distance = targetTime - now;

        let displayText;

        if (distance < 0) {
            const pastTime = Math.abs(distance);
            const days = Math.floor(pastTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((pastTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((pastTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((pastTime % (1000 * 60)) / 1000);
            displayText = `+${days}D ${hours}H ${minutes}M ${seconds}S`;
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            displayText = `${days}D ${hours}H ${minutes}M ${seconds}S`;
        }

        element.textContent = displayText;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

document.querySelectorAll('.countdown').forEach(function(element) {
    const targetDate = element.getAttribute('data-target');
    startCountdown(element, targetDate);
});