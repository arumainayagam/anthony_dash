# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals
import frappe
import frappe.utils
import json
from frappe import _





def get_context(context):
	pro = frappe.db.get_list("Project", 
		fields= ["percent_complete", "project_name"])

	osalesorder = frappe.db.get_list("Sales Order", 
		fields= ["name"],
		filters={"status": "To Deliver and Bill"})

	if len(osalesorder) > 0:
		context.osalesorder = len(osalesorder)
	else: 
		context.osalesorder = 0


	oporder = frappe.db.get_list("Production Order", 
		fields= ["name"],
		filters={"status": "Submitted"})

	if len(oporder) > 0:
		context.oporder = len(oporder)
	else: 
		context.oporder = 0

	inpropo = frappe.db.get_list("Production Order", 
		fields= ["name"],
		filters={"status": "In Process"})

	if len(inpropo) > 0:
		context.inpropo = len(inpropo)
	else: 
		context.inpropo = 0


	clopropo = frappe.db.get_list("Production Order", 
		fields= ["name"],
		filters={"status": "Completed"})

	if len(clopropo) > 0:
		context.clopropo = len(clopropo)
	else: 
		context.clopropo = 0


	salesorder = frappe.db.get_list("Sales Order", 
		fields= ["name"])

	if len(salesorder) > 0:
		context.salesorder = len(salesorder)
	else: 
		context.salesorder = 0


	salesinvo = frappe.db.get_list("Sales Invoice", 
		fields= ["name"])

	if len(salesinvo) > 0:
		context.salesinvo = len(salesinvo)
	else: 
		context.salesinvo = 0

	productionorder = frappe.db.get_list("Production Order", 
		fields= ["name"])

	if len(productionorder) > 0:
		context.productionorder = len(productionorder)
	else: 
		context.productionorder = 0


	materialreq = frappe.db.get_list("Material Request", 
		fields= ["name"])

	if len(materialreq) > 0:
		context.materialreq = len(materialreq)
	else: 
		context.materialreq = 0


	purchaseorder = frappe.db.get_list("Purchase Order", 
		fields= ["name"])

	if len(purchaseorder) > 0:
		context.purchaseorder = len(purchaseorder)
	else: 
		context.purchaseorder = 0


	return context

@frappe.whitelist()
def get_chart_data(doctype):
	status = frappe.db.get_list("DocField",fields= ["options"],filters={"parent": doctype, "fieldname": "status"})[0].options
	status = [s.strip() for s in status.splitlines()]
	status.remove(status[0])
	array = []
	for x in status:
		array.append({"status": x, "valu": len(frappe.db.get_list(doctype,fields= ["name"],filters={"status": x}))}) 


	return array










