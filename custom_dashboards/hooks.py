# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "custom_dashboards"
app_title = "Custom Dashboards"
app_publisher = "Crisco Consulting"
app_description = "App for dashboards"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "vignesh@criscoconsulting.in"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/custom_dashboards/css/custom_dashboards.css"
app_include_js = "assets/js/flow.min.js"

# include js, css files in header of web template
# web_include_css = "/assets/custom_dashboards/css/custom_dashboards.css"
# web_include_js = [
# 	"assets/js/libs.min.js"
# ]



# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "custom_dashboards.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "custom_dashboards.install.before_install"
# after_install = "custom_dashboards.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "custom_dashboards.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"custom_dashboards.tasks.all"
# 	],
# 	"daily": [
# 		"custom_dashboards.tasks.daily"
# 	],
# 	"hourly": [
# 		"custom_dashboards.tasks.hourly"
# 	],
# 	"weekly": [
# 		"custom_dashboards.tasks.weekly"
# 	]
# 	"monthly": [
# 		"custom_dashboards.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "custom_dashboards.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "custom_dashboards.event.get_events"
# }

