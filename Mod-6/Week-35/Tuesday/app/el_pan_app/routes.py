from flask import render_template
from el_pan_app import el_pan_app
from el_pan_app.forms.login import LoginForm

@el_pan_app.route('/')
def home():
    return render_template('page.html', page = "-User", title = 'Welcome User')

@el_pan_app.route('/login')
def login():
    form = LoginForm()
    return render_template('login.html', form = form)  