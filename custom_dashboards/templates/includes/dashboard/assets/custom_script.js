
$(document).ready(function(){

// $('.span8 #calendar_content #calendar').fullCalendar({
//   events: [
//     {
//       title  : 'event1',
//       start  : '2018-08-01'
//     },
//     {
//       title  : 'event2',
//       start  : '2018-08-05',
//       end    : '2018-08-07'
//     },
//     {
//       title  : 'event3',
//       start  : '2018-08-09T12:30:00',
//       allDay : false // will make the time show
//     }
//   ],
//   eventColor: 'rgb(224, 241, 216)'
// });


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


frappe.call({
    method: "custom_dashboards.templates.pages.manufacturing_dash.get_stock_data",
    args: {   

    },
    callback: function (r) {
        console.log(r.message)

        var warelabels = [];
        for (var i = 0; i < r.message.war.length; i++) {
            warelabels.push(r.message.war[i].name)
        }

        var wardata = [];
        for (var i = 0; i < r.message.fun.length; i++) {
            wardata.push({"label": r.message.fun[i].label, "data": r.message.fun[i].data, "backgroundColor": getRandomColor()})
        }
        var ctx = document.getElementById("stock").getContext('2d');
        var chart = new Chart(ctx, {
           type: 'bar',
           data: {
              labels: warelabels, 
              // responsible for how many bars are gonna show on the chart
              // create 12 datasets, since we have 12 items
              // data[0] = labels[0] (data for first bar - 'Standing costs') | data[1] = labels[1] (data for second bar - 'Running costs')
              // put 0, if there is no data for the particular bar
              datasets: wardata
              // datasets: [{
              //    label: 'Washing and cleaning',
              //    data: [0, 8, 5],
              //    backgroundColor: '#22aa99'
              // }, {
              //    label: 'Traffic tickets',
              //    data: [0, 2, 5],
              //    backgroundColor: '#994499'
              // }, {
              //    label: 'Tolls',
              //    data: [0, 1, 5],
              //    backgroundColor: '#316395'
              // }, {
              //    label: 'Parking',
              //    data: [5, 2, 5],
              //    backgroundColor: '#b82e2e'
              // }, {
              //    label: 'Car tax',
              //    data: [0, 1, 5],
              //    backgroundColor: '#66aa00'
              // }, {
              //    label: 'Repairs and improvements',
              //    data: [0, 2, 5],
              //    backgroundColor: '#dd4477'
              // }, {
              //    label: 'Maintenance',
              //    data: [6, 1, 5],
              //    backgroundColor: '#0099c6'
              // }, {
              //    label: 'Inspection',
              //    data: [0, 2, 5],
              //    backgroundColor: '#990099'
              // }, {
              //    label: 'Loan interest',
              //    data: [0, 3, 5],
              //    backgroundColor: '#109618'
              // }, {
              //    label: 'Depreciation of the vehicle',
              //    data: [0, 2, 5],
              //    backgroundColor: '#109618'
              // }, {
              //    label: 'Fuel',
              //    data: [0, 1, 5],
              //    backgroundColor: '#dc3912'
              // }, {
              //    label: 'Insurance and Breakdown cover',
              //    data: [4, 0, 5],
              //    backgroundColor: '#3366cc'
              // }]
           },
           options: {
              responsive: false,
              legend: {
                 position: 'bottom',
                 boxWidth: '30'
                  // place legend on the right side of chart
              },
              scales: {
                 xAxes: [{
                    stacked: false // this should be set to make the bars stacked
                 }],
                 yAxes: [{
                    stacked: false // this also..
                 }]
              }
           }
        });

        
    }
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








