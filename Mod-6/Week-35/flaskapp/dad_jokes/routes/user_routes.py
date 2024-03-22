from flask import Blueprint

user_routes = Blueprint("users", __name__)

@user_routes.route("/")
def get_user():
    return "<h2>Insert User Info Here</h2>"