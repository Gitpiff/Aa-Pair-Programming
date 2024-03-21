from flask import Flask, render_template
from .config import Config
from .db_jokes import dad_jokes
from random import choice

app = Flask(__name__)
#print("dunder name", __name__)
app.config.from_object(Config)

# Defaults to a GET route, if we want to add a different method - @app.route("/", methods=["POST"]) 
@app.route("/")
def index():
    # this is where you ad DB functionality
    joke = choice(dad_jokes)
    print(joke)
    return render_template("index.html", joke=joke)