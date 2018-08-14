
$(document).ready(function(){

$("#dynachart").html("Sales Order");
var ok;
var labs = [];
var dats = [];

frappe.call({
    method: "custom_dashboards.templates.pages.manufacturing_dash.get_chart_data",
    async: false,
    args: {
        doctype: "Sales Order",
    },
    callback: function (r) {
        ok = r.message;
        console.log(ok)
        
        for (var i = 0; i < ok.length; i++) {
            labs.push(ok[i].status);
            dats.push(ok[i].valu);

        }

    }
});
console.log(labs)
console.log(dats)

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {

        labels: labs,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


$('.span8 #calendar_content #calendar').fullCalendar({
  events: [
    {
      title  : 'event1',
      start  : '2018-08-01'
    },
    {
      title  : 'event2',
      start  : '2018-08-05',
      end    : '2018-08-07'
    },
    {
      title  : 'event3',
      start  : '2018-08-09T12:30:00',
      allDay : false // will make the time show
    }
  ],
  eventColor: 'rgb(224, 241, 216)'
});

});

$(".quick-btn").click(function () {

        var b = $(this).find(".namer").text();

        $("#dynachart").html(b);


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


    
});








