# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals
import frappe
import frappe.utils
from frappe.utils.oauth import get_oauth2_authorize_url, get_oauth_keys, login_via_oauth2, login_via_oauth2_id_token, login_oauth_user as _login_oauth_user, redirect_post_login
import json
from frappe import _
from frappe.auth import LoginManager
from frappe.integrations.doctype.ldap_settings.ldap_settings import get_ldap_settings
from frappe.utils.password import get_decrypted_password
from frappe.utils.html_utils import get_icon_html
	
def get_context(context):
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