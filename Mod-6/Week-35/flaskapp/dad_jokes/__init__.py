from flask import Flask, render_template, redirect
from .config import Config
from .db_jokes import dad_jokes
from random import choice
from .routes.jokes_routes import jokes_router #import blueprint
from .routes.user_routes import user_routes
from .forms.login import LoginForm
from .forms.joke_form import JokeForm
from .models import db


app = Flask(__name__)
#print("dunder name", __name__)
app.config.from_object(Config)
db.int_app(app) #makes a connection between db and app

app.register_blueprint(jokes_router) #after importing blueprint we register it
app.register_blueprint(user_routes, url_prefix="/users")

# Defaults to a GET route, if we want to add a different method - @app.route("/", methods=["POST"]) 
@app.route("/")
def index():
    # this is where you ad DB functionality
    joke = choice(dad_jokes)
    print(joke)
    return render_template("index.html", joke = joke)
    # return redirect("/jokes/all", 302)


@app.route("/login", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        return redirect("/")
    return render_template("login.html", form = form)


@app.route("/new", methods = ["POST"])
def new():
    form = JokeForm()
    return render_template("add_joke.html", form = form)
