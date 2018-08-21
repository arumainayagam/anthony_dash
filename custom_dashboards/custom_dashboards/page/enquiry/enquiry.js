frappe.pages['enquiry'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Dashboard',
		single_column: true
	});

	frappe.breadcrumbs.add("Desk");

	page.main.html(frappe.render_template("enquiry", {}));
	var patient = frappe.ui.form.make_control({
		parent: page.main.find("#vicky"),
		df: {
			fieldtype: "Link",
			options: "Customer",
			fieldname: "customer",
			change: function(){
				alert('');
				// page.main.find(".frappe-list").html("");
				// draw_page(patient.get_value(), me);
			}
		},
		only_input: true,
	});
	patient.refresh();
	var patient1 = frappe.ui.form.make_control({
		parent: page.main.find("#vicky1"),
		df: {
			fieldtype: "Link",
			options: "DocType",
			fieldname: "doctype",
			change: function(){
				page.main.find("#vicky2").html(' ');
				var patient2 = frappe.ui.form.make_control({
					parent: page.main.find("#vicky2"),
					df: {
						fieldtype: "Link",
						options: patient1.get_value(),
						fieldname: "customer",
						change: function(){
				
						}
					},
					only_input: true,
				});
				patient2.refresh();			
			}
		},
		only_input: true,
	});
	patient1.refresh();

}