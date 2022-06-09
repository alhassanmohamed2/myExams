var subjects_dates = [
    new Date("may 31, 2022 13:00:00").getTime(),
    new Date("jun 05, 2022 13:00:00").getTime(),
    new Date("jun 07, 2022 13:00:00").getTime(),
    new Date("jun 16, 2022 13:00:00").getTime(),
    new Date("jun 19, 2022 13:00:00").getTime(),
    new Date("jun 21, 2022 13:00:00").getTime(),
    new Date("jun 28, 2022 13:00:00").getTime(),
]

var subjects_ara = ["مفاعلات ومعجلات", "تحليل نظم", "إلكترونيات 2", "شبكات عصبية", "ذكاء اصطناعى متقدم", "فيزياء الليزر", "مشروع التخرج"];
var subjects_eng = ["Reactors and Accelerators", "Systems Analysis", "Electronics 2", "Neural Networks", "Advanced Artificial Intelligence", "Laser Physics", "Graduation Project"]

var div_dates = document.querySelectorAll(".date");
var d = document.querySelectorAll(".unit .days");
var h = document.querySelectorAll(".unit .hours");
var m = document.querySelectorAll(".unit .minutes");
var s = document.querySelectorAll(".unit .seconds");
var subjects_p_ara = document.querySelectorAll(".arabic");
var subjects_h2_eng = document.querySelectorAll("h2");

for (let i = 0; i < subjects_p_ara.length; i++) {
    subjects_p_ara[i].innerHTML = subjects_ara[i];
    subjects_h2_eng[i].innerHTML = subjects_eng[i];
    div_dates[i].innerHTML = new Date(subjects_dates[i]).toLocaleString('en-GB');
}


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