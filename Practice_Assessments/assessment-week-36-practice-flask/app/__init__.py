from flask import Flask, render_template, redirect
from .config import Configuration
from .forms import SimpleForm
from .models import db, SimplePerson

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)


@app.route("/")
def home():
    return render_template("main_page.html")

@app.route("/simple-form")
def simpleForm():
    return render_template("simple_form.html", form = SimpleForm())

@app.route("/simple-form", methods=["POST"])
def post():
    form = SimpleForm()
    if form.validate_on_submit(): #validates
        new_person = SimplePerson(name = form.data["name"], age = form.data["age"], bio = form.data["bio"]) #collects/passes data from form
        db.session.add(new_person) #adds new data to db
        db.session.commit() #commit the add
        return redirect("/") #if the validation passes, redirect to home page
    return "Bad Data" #if it did not pass the validation 

# Create a route have it query all of the records, using the SimplePerson, for names that begin with "M".
@app.route("/simple-form-data")
def simpleFormData():
    persons = SimplePerson.query.filter(SimplePerson.name.like("M%"))
    return render_template("simple_form_data.html", persons = persons)
