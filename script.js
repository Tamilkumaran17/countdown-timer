function startCountdown() {
    const input = document.getElementById('datetime-input').value;
    const countdownElement = document.getElementById('countdown');
    const isClicked = false;

    // if(!isClicked){
    //     countdownElement = 0;
    // }
    
    if (!input) {
        countdownElement.textContent = 'Please enter a valid date and time.';
        return;
    }
    
    const targetDate = new Date(input).getTime();
    
    if (isNaN(targetDate)) {
        countdownElement.textContent = 'Invalid date. Please enter a valid date and time.';
        return;
    }
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.textContent = 'Countdown ended!';
            return;
        }
        // isClicked = true;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
    
}
