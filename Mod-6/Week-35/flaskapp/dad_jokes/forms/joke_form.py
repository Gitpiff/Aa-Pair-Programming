from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField
from wtforms.validators import DataRequired

class JokeForm(FlaskForm):
    joke = StringField("Joke", validators=[DataRequired()])
    punchline = StringField("Punchline", validators=[DataRequired()])
    rating = SelectField("Rating", choices=["G", "R", "PG"])
    submit = SubmitField("Add Joke")