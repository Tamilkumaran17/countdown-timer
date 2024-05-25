document.addEventListener('DOMContentLoaded', () => {
    const countdown = () => {
        const endDate = new Date('2024-12-31T23:59:59').getTime();
        const now = new Date().getTime();
        const currentDate = new Date();
        const timeRemaining = endDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
        
        var dayInMonth = ('0' + currentDate.getDate()).slice(-2);
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var year = currentDate.getFullYear();

        var dateString =  dayInMonth + " : " + month + " : " + year;

        document.getElementById('today').innerText= dateString;

        if (timeRemaining < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "Event has started!";
        }
    };

    const interval = setInterval(countdown, 1000);
    countdown(); 
});
