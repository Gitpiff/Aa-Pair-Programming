from flask import Flask
from routes.user_routes import user_routes
from flask import render_template


app = Flask(__name__)

app.register_blueprint(user_routes, url_prefix = "/users")

@app.route("/")
def home():
    return render_template('page.html', page = "-Home", title = 'Welcome')

# @app.route("/login")
# def login():
#     return render_template('page.html')
    