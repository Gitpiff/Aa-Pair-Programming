from flask import Flask, render_template, redirect
from flask_migrate import Migrate
from .config import Configuration
from .shipping_form import ShippingForm
from .models import db
app = Flask(__name__)

app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)

@app.route("/")
def index():
    return "<h1>Package Tracker</h1>"


@app.route("/new_package", methods=["GET", "POST"])
def new_package():
    form = ShippingForm()
    if form.validate_on_submit():
        data = form.data
        new_package = Package(sender=data["sender_name"],
                              recipient=data["recipient_name"],
                              origin=data["origin"],
                              destination=data["destination"],
                              location=data["origin"])
        
        db.session.add(new_package)
        db.session.commit()
    return redirect('/')

    if form.validate_on_submit():
        print(dir(form))
        return redirect('/')
    return render_template("shipping_request.html", form=ShippingForm())







# @app.route('/register', methods=['GET', 'POST'])
# def register():
#     form = RegistrationForm(request.form)
#     if request.method == 'POST' and form.validate():
#         user = User(form.username.data, form.email.data,
#                     form.password.data)
#         db_session.add(user)
#         flash('Thanks for registering')
#         return redirect(url_for('login'))
#     return render_template('register.html', form=form)