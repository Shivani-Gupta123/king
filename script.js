function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const countdownInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// Start a 1-minute countdown
window.onload = function () {
    const oneMinute = 60;
    startCountdown(oneMinute);
};
