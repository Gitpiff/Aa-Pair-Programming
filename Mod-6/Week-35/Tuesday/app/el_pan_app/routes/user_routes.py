from flask import Blueprint
from flask import render_template

user_routes = Blueprint("user_routes", __name__)

@user_routes.route("/")

def home():
    return render_template('page.html', page = "-User", title = 'Welcome User')