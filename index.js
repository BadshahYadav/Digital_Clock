(function () {
    setInterval(() => {
        var time = new Date().toLocaleTimeString();
        var date = new Date().toLocaleDateString();
        var day = new Date().getDay();
        switch (day) {
            case 0:
                day = "Sunday,";
                break;
            case 1:
                day = "Monday,";
                break;
            case 2:
                day = "Tuseday,";
                break;
            case 3:
                day = "Wednesday,";
                break;
            case 4:
                day = "Thursday,";
                break;
            case 5:
                day = "Friday,";
                break;
            case 6:
                day = "Saturday,";
                break;
        }
        // time = "<span>"+time.split(":").join("</span>:<span>")+"</span>"
        document.getElementById("time").innerHTML = time;
        document.getElementById("date").innerHTML = date;
        document.getElementById("day").innerHTML = day;

    }, 1000)
})();

