$(function() {
    let input = $('#city'),
        inpVal = input.val();

    $('.select').on('change', function() {
        input.val(inpVal + $(this).val());
    });
});

$('#cityB').on('click', function() {
    $('#tablo').css('display', 'flex');

    var city = $('#city').val();
    var apiURI2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9e0a358471279c0a50bdf4d741edf121`;
    console.log("success getWeather2");
    console.log(apiURI2);
    $.ajax({
        url: apiURI2,
        dataType: "jsonp",
        type: "GET",
        async: "true",
        timeout: 500,
        success: function(data) {
            console.log("Success");
        },
        error: function(e) {
            console.log("Error");
            $('#cityC').html('<p style="color:red";>ERROR</p><p style="color:#bef7f1";>Проверьте корректность названия</p>');
            $('#tablo').css('display', 'none');
        },
        done: function(e) {
            console.log("DONE");
        },
    }).done(dataHandler3);

    $('#cityC').text('в' + ' ' + city);

    function dataHandler3(data) {
        dataString = JSON.stringify(data);
        var newDate = new Date();
        let hoursTime = newDate.getHours();
        var num = 8 - (Math.floor(hoursTime / 3));
        //завтра
        document.getElementById("demo6").innerHTML = data.list[num + 3].dt_txt;
        document.getElementById("demo4").innerHTML = "Макс." + " " + Math.floor((data.list[num + 3].main["temp"]) - 273, 15) + "°C";
        document.getElementById("demo7").innerHTML = data.list[num].dt_txt;
        document.getElementById("demo5").innerHTML = "Мин." + " " + Math.floor((data.list[num].main["temp"]) - 273, 15) + "°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num + 3].weather[0].icon + ".png";
        $("#tmp4").attr("src", imgURL);
    }

});
//Показ дни недели 
function showDateTime() {


    var d = new Date();
    var n1
    var weekday = new Array(7);
    weekday[0] = "Воскресенье";
    weekday[1] = "Понедельник";
    weekday[2] = "Вторник";
    weekday[3] = "Среда";
    weekday[4] = "Четверг";
    weekday[5] = "Пятница";
    weekday[6] = "Суббота";
    n1 = weekday[(d.getDay() + 1)];
    document.getElementById("day1").innerHTML = n1;
}
showDateTime();