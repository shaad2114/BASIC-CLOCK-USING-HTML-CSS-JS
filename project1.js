setInterval(function () {
    let a = new Date();
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('4545').innerHTML = time;
}, 1000);

