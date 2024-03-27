from dad_jokes import app
from dad_jokes.models import db, User, Model

with app.app_context():

    db.drop_all()
    print("All tables dropped!")

    db.create_all()
    print("All tables created!")


