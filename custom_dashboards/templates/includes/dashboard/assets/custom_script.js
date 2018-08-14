
$(document).ready(function(){

$("#dynachart").html("Sales Order");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
         

frappe.call({
    method: "custom_dashboards.templates.pages.manufacturing_dash.get_chart_data",
    async: false,
    args: {
        doctype: "Sales Order",
    },
    callback: function (r) {
        var ok;
        var labs = [];
        var dats = [];
        var bgcol = [];
        var borcol = [];


               
        ok = r.message;
        console.log(ok)
        
        console.log(labs)
        console.log(dats)


        for (var i = 0; i < ok.length; i++) {
            labs.push(ok[i].status);
            dats.push(ok[i].valu);
            bgcol.push(getRandomColor());
            borcol.push(getRandomColor());


        }
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {

                labels: labs,
                datasets: [{
                    label: '# of Votes',
                    data: dats,
                    backgroundColor: bgcol,
                    borderColor: borcol,
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
    $("#trigo2").html('');
    $("#trigo2").html('<canvas id="myChart" style="width: 100%; height: 100%;"> </canvas>');

        var b = $(this).find(".namer").text();

        $("#dynachart").html(b);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

frappe.call({
    method: "custom_dashboards.templates.pages.manufacturing_dash.get_chart_data",
    async: false,
    args: {
        doctype: b,
    },
    callback: function (r) {
        var ok;
        var labs = [];
        var dats = [];
        var bgcol = [];
        var borcol = [];


               
        ok = r.message;
        console.log(ok)
        
        console.log(labs)
        console.log(dats)


        for (var i = 0; i < ok.length; i++) {
            labs.push(ok[i].status);
            dats.push(ok[i].valu);
            bgcol.push(getRandomColor());
            borcol.push(getRandomColor());


        }
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {

                labels: labs,
                datasets: [{
                    label: '# of Votes',
                    data: dats,
                    backgroundColor: bgcol,
                    borderColor: borcol,
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


    }
});

    
});








