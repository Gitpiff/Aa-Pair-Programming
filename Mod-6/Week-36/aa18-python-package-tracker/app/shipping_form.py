from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from map.map import map

class ShippingForm(FlaskForm):
    sender_name = StringField("Sender Name", validators=[DataRequired()])
    recipient_name = StringField("Recipient Name", validators=[DataRequired()])
    origin_list = list(map.keys())
    destination_list = list(map.values())
    # print(origin_list)
    # print(destination_list)
    origin = SelectField("Origin", choices=origin_list, validators=[DataRequired()])
    destination = SelectField("Destination", choices=destination_list, validators=[DataRequired()])
    is_express_shippind_desired = BooleanField('Express Shipping?', validators=[DataRequired()])
    submit = SubmitField("Submit")
    