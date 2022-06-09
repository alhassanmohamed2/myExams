var subjects_dates = [new Date("Jun 4, 2022 10:00:00").getTime(),
    new Date("Jun 8, 2022 10:00:00").getTime(),
    new Date("Jun 11, 2022 10:00:00").getTime(),
    new Date("Jun 15, 2022 10:00:00").getTime(),
    new Date("Jun 18, 2022 10:00:00").getTime(),
    new Date("Jun 22, 2022 10:00:00").getTime(),
    new Date("Jun 25, 2022 10:00:00").getTime(),
    new Date("Jun 29, 2022 10:00:00").getTime(),
]

var d = document.querySelectorAll(".unit .days");
var h = document.querySelectorAll(".unit .hours");
var m = document.querySelectorAll(".unit .minutes");
var s = document.querySelectorAll(".unit .seconds");

(function() {

    let counter = setInterval(() => {
        for (var i = 0; i < subjects_dates.length; i++) {
            let dateNow = new Date().getTime();
            let dateDiff = subjects_dates[i] - dateNow;

            let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
            let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
            let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

            d[i].innerHTML = days;
            h[i].innerHTML = hours;
            m[i].innerHTML = minutes;
            s[i].innerHTML = seconds < 10 ? `0${seconds}` : seconds;

            if (dateDiff < 0) {
                d[i].innerHTML = 00;
                h[i].innerHTML = 00;
                m[i].innerHTML = 00;
                s[i].innerHTML = 00;
                document.querySelectorAll(".done")[i].style.display = "flex"
            }
        }

    }, 1000);
})();