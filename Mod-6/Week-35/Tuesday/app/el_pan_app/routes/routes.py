from flask import Blueprint

user_routes = Blueprint("user_routes", __name__)

@user_routes.route("/")
def home():
    return render_template('page.html', page = "-Home", title = 'Welcome')