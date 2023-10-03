function calculateDayOfWeek(year, month, day) {
    if (month < 3) {
        month += 12;
        year--;
    }
    const k = year % 100;
    const j = Math.floor(year / 100);
    const dayOfWeek = (day + Math.floor(13 * (month + 1)) / 5 + k + Math.floor(k / 4) + Math.floor(j / 4) + 5 * j) % 7;
    const dayNames = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return dayNames[Math.floor(dayOfWeek)];
}
function Enter() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const date = parseInt(document.getElementById('date').value);
    const ansBox = document.querySelector('.FinalAns');

    let output, err;
    if (isNaN(year) || isNaN(month) || isNaN(date)) {
        output = "Enter values properly."
        err = true;
    }
    else {
        if ((month < 1 || month > 12) || (date < 1 || date > 31)) {
            if (month < 1 || month > 12) 
                output = "Enter month between 1 to 12"
            if (date < 1 || date > 31) 
                output = "Enter day between 1 to 31"
            err = true;
        }
        else {
            output = calculateDayOfWeek(year, month, date);
            err = false;
        }
    }
    if (err == true) {
        ansBox.style.color = "rgb(255, 0, 111)";
        setTimeout(() => {
            ansBox.style.color = "white";
        }, 1700);
    }
    ansBox.innerHTML = output;
}
const refresh = document.getElementById('refresh');
refresh.addEventListener("click", () => {
    document.getElementById('year').value = ""
    document.getElementById('month').value = ""
    document.getElementById('date').value = ""
    document.querySelector('.FinalAns').innerHTML = "Day name."
})

