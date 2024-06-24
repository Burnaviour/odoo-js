from odoo import models, fields


class CarDamageReturnWizard(models.TransientModel):
    _name = "car.damage.return.wizard"
    _description = "Car Damage Return Wizard"

    car = fields.Char(string="Damaged part", required=True, readonly=True)
    damage_description = fields.Text(string="Damage Description")
    vehicle_id = fields.Many2one("fleet.vehicle", string="Vehicle", required=True)

    def action_return(self):
        # Your code to handle the car return...
        return {
            "type": "ir.actions.client",
            "tag": "owl_dashboard.owl_action_todo_list",
        }
