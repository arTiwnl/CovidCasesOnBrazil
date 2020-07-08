$.getJSON ('https://coronavirus-19-api.herokuapp.com/countries/brazil', function (data){
    console.log(data);
    var totaly = data.cases;
    var recovery = data.recovered;
    var deaths = data.deaths;

    $(".totaly").append(totaly);
    $(".recovery").append(recovery);
    $(".deaths").append(deaths);
  

});


