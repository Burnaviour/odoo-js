# -*- coding: utf-8 -*-
{
    "name": "Awesome Dashboard",
    "summary": """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,
    "description": """
        Starting module for "Discover the JS framework, chapter 2: Build a dashboard"
    """,
    "author": "Odoo",
    "website": "https://www.odoo.com/",
    "category": "Tutorials/AwesomeDashboard",
    "version": "0.1",
    "application": True,
    "installable": True,
    "depends": ["base", "web", "mail", "crm"],
    "data": [
        "views/views.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "awesome_dashboard/static/src/**/*",
        ],
        "web.assets_frontend": [
            # TODO the 'assets_frontend' bundle now includes 'assets_common'
            # files directly. That work was however a good opportunity to start
            # removing the files that are not needed anymore in frontend layouts
            # but it was not done: all common files were simply put in this
            # bundle. We'll have to optimize that.
            "awesome_dashboard/static/src/**/*",
        ],
    },
    "license": "AGPL-3",
}
