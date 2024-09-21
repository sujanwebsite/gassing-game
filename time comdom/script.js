const countdownDate = new Date("2024-09-29T00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        clearInterval(timer);
        document.body.innerHTML = `
            <div style="text-align: center; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #ff69b4;">সুজন হালদার হ্যাপি বার্থডে!</h1>
                <img src="birthday.png" alt="Birthday celebration image with balloons" style="max-width: 300px; border-radius: 10px;" />
            </div>`;
        return;
    }

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);
