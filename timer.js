const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10);

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement =document.getElementById('minutes');
const secondsElement =document.getElementById('seconds');




function updateTimer(){
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    function formatTime(time) {
        if (time < 10) {
            return '0' + time;
        } else {
            return time;
        }
    }
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
}

setInterval(updateTimer, 1000);

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const formattedEndDate = targetDate.toLocaleDateString('en-US', options);

giveaway_message.textContent = `Giveaway Ends On ${formattedEndDate} by 11:59pm.`



