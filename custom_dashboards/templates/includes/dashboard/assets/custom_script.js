$(document).ready(function(){

    // var sales_order;
    // var production_order_inprogress;
    // var production_order_completed;
    // var production_order_sumbited;

    // frappe.call({
    //     method: "frappe.client.get_list",
    //     args: {
    //         doctype: "Sales Order",
    //         order_by: "name",
    //         fields: ["name"],
    //         filters: [{"status": "To Deliver and Bill"}] 

    //     },
    //     async: false,
    //     callback: function (r) {
    //         // body...
    //         sales_order = r.message;
    //     }
    // });
    
    // frappe.call({
    //     method: "frappe.client.get_list",
    //     args: {
    //         doctype: "Production Order",
    //         order_by: "name",
    //         fields: ["name"],
    //         filters: [{"status": "In Process"}] 

    //     },
    //     async: false,
    //     callback: function (r) {
    //         // body...
    //         production_order_inprogress = r.message;
    //     }
    // });

    // frappe.call({
    //     method: "frappe.client.get_list",
    //     args: {
    //         doctype: "Production Order",
    //         order_by: "name",
    //         fields: ["name"],
    //         filters: [{"status": "Completed"}] 

    //     },
    //     async: false,
    //     callback: function (r) {
    //         // body...
    //         production_order_completed = r.message;
    //     }
    // });

    // frappe.call({
    //     method: "frappe.client.get_list",
    //     args: {
    //         doctype: "Production Order",
    //         order_by: "name",
    //         fields: ["name"],
    //         filters: [{"status": "Submitted"}] 

    //     },
    //     async: false,
    //     callback: function (r) {
    //         // body...
    //         production_order_sumbited = r.message;
    //     }
    // });


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

const data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Dataset 1",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Dataset 2",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
}
 
const chart = new frappe.Chart("#trigo", { // or a DOM element
    // title: "My Awesome Chart",
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#7cd6fd', '#743ee2']
})

const data1 = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm"],
    datasets: [
        {
            title: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8]
        },
        {
            title: "Another Set", type: "line",
            values: [25, 50, -10, 15, 18]
        }
    ]
}
 
const chart1 = new frappe.Chart("#trigo1", { // or a DOM element
    // title: "My Awesome Chart",
    data: data1,
    type: 'pie', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#7cd6fd', '#743ee2']
})
});

$(".quick-btn").click(function () {
    var a = $("#dyna").css("display");
    
    if (a == "block") {
        $("#dyna").slideUp();
        // $(this).removeClass("intro");
    }
    else if(a == "none"){
        // $(this).addClass("intro");
        $("#dyna").slideDown();
        var b = $(this).find(".namer").text();

        $("#dynachart").html(b);
        const data2 = {
            labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
                "12pm-3pm"],
            datasets: [
                {
                    title: "Some Data", type: "bar",
                    values: [25, 40, 30, 35, 8]
                },
                {
                    title: "Another Set", type: "line",
                    values: [25, 50, -10, 15, 18]
                }
            ]
        }

        if (b = "Sales Order") {
            frappe.call({
                method: "frappe.client.get_list",
                args: {
                    doctype: "Production Order",
                    order_by: "name",
                    fields: ["name"],
                    filters: [{"status": "In Process"}] 

                },
                async: false,
                callback: function (r) {
                    // body...
                    production_order_inprogress = r.message;
                }
            });
        }
        if (b = "Sales Invoice") {
            
        }
        if (b = "Production Order") {
            
        }
        if (b = "Material Request") {
            
        }
        if (b = "Purchase Order") {
            
        }
         
        const chart2 = new frappe.Chart("#trigo2", { // or a DOM element
            // title: "My Awesome Chart",
            data: data2,
            type: 'pie', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            colors: ['#7cd6fd', '#743ee2']
        })

    }
    
});








