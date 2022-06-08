function dateOne(d) {
    let countDownDate = new Date(d).getTime();

    let counter = setInterval(() => {

        let dateNow = new Date().getTime();

        let dateDiff = countDownDate - dateNow;

        // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        if (dateDiff < 0) {
            days = 00;
            hours = 00;
            minutes = 00;
            seconds = 00;
        }
        document.querySelector(".unit .days").innerHTML = days;
        document.querySelector(".unit .hours").innerHTML = hours;
        document.querySelector(".unit .minutes").innerHTML = minutes;
        document.querySelector(".unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        // document.querySelector(".two .unit .days").innerHTML = days;
        // document.querySelector(".two .unit .hours").innerHTML = hours;
        // document.querySelector(".two .unit .minutes").innerHTML = minutes;
        // document.querySelector(".two .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(counter);
            document.querySelector(".done").style.display = "flex"
        }

    }, 1000);
};

function dateTwo(d) {
    let countDownDate = new Date(d).getTime();

    let counter = setInterval(() => {

        let dateNow = new Date().getTime();

        let dateDiff = countDownDate - dateNow;

        // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        if (dateDiff < 0) {
            days = 00;
            hours = 00;
            minutes = 00;
            seconds = 00;
        }
        document.querySelector(".two .unit .days").innerHTML = days;
        document.querySelector(".two .unit .hours").innerHTML = hours;
        document.querySelector(".two .unit .minutes").innerHTML = minutes;
        document.querySelector(".two .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(counter);
            document.querySelector(".two .done").style.display = "flex"
        }

    }, 1000);
};
function dateThree(d) {
    let countDownDate = new Date(d).getTime();

    let counter = setInterval(() => {

        let dateNow = new Date().getTime();

        let dateDiff = countDownDate - dateNow;

        // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        if (dateDiff < 0) {
            days = 00;
            hours = 00;
            minutes = 00;
            seconds = 00;
        }
        document.querySelector(".three .unit .days").innerHTML = days;
        document.querySelector(".three .unit .hours").innerHTML = hours;
        document.querySelector(".three .unit .minutes").innerHTML = minutes;
        document.querySelector(".three .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(counter);
            document.querySelector(".three .done").style.display = "flex"
        }

    }, 1000);
};
function dateFour(d) {
    let countDownDate = new Date(d).getTime();

    let counter = setInterval(() => {

        let dateNow = new Date().getTime();

        let dateDiff = countDownDate - dateNow;

        // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
        let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
        let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60);
        let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

        if (dateDiff < 0) {
            days = 00;
            hours = 00;
            minutes = 00;
            seconds = 00;
        }
        document.querySelector(".four .unit .days").innerHTML = days;
        document.querySelector(".four .unit .hours").innerHTML = hours;
        document.querySelector(".four .unit .minutes").innerHTML = minutes;
        document.querySelector(".four .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        if (dateDiff < 0) {
            clearInterval(counter);
            document.querySelector(".four .done").style.display = "flex"
        }

    }, 1000);
};





dateOne("Jun 4, 2022 10:00:00");
dateTwo("Jun 8, 2022 10:00:00");
dateThree("Jun 11, 2022 10:00:00");
dateFour("Jun 15, 2022 10:00:00");