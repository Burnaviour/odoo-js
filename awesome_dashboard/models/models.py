from odoo import models, api


class MailChannel(models.Model):
    _inherit = "discuss.channel"

    def message_post(self, *, message_type="notification", **kwargs):
        print("message_post")
        return super().message_post(message_type=message_type, **kwargs)
