# -*- coding: utf-8 -*-
import logging

from odoo import models, fields, api, _
from odoo.exceptions import UserError, ValidationError

_logger = logging.getLogger(__name__)


class IrUiView(models.Model):
    _inherit = "ir.ui.view"
    type = fields.Selection(
        selection_add=[("lmap", "Leaflet Map")],
        ondelete={"lmap": "cascade"},
    )
