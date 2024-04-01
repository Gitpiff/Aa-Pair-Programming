from flask import Flask, render_template
from .config import Configuration
from .forms import SimpleForm

app = Flask(__name__)
app.config.from_object(Configuration)


@app.route("/")
def home():
    return render_template("main_page.html")

@app.route("/simple-form")
def simpleForm():
    return render_template("simple_form.html", form = SimpleForm())