    // Set the starting time
    let seconds = 20;

    // Select both seconds elements
    const secondsElement1 = document.getElementById('seconds1');
    const secondsElement2 = document.getElementById('seconds2');

    // Update the timer every second
    const countdown = setInterval(() => {
        // Decrease seconds and update the display for both elements
        seconds -= 1;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        secondsElement1.textContent = formattedSeconds;
        secondsElement2.textContent = formattedSeconds;

        // Stop countdown at 0
        if (seconds <= 0) {
            clearInterval(countdown);
            secondsElement1.textContent = "00";
            secondsElement2.textContent = "00";
        }
    }, 1000);


    const targetCount = 500000; // Target subscriber count
  const duration = 7000; // Duration of the counting effect in milliseconds (e.g., 3 seconds)
  const displayElement = document.getElementById('subscriber-count');
  
  let startTimestamp = null;
  
  function countUp(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;
    const currentCount = Math.min(Math.floor((progress / duration) * targetCount), targetCount);
    
    // Format the count with a comma for thousands and display it
    displayElement.textContent = `${currentCount.toLocaleString()} Subscribers`;
  
    if (currentCount < targetCount) {
      requestAnimationFrame(countUp);
    }
  }
  
  // Start the animation
  requestAnimationFrame(countUp);