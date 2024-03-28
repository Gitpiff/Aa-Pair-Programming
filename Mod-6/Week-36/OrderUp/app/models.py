from flask_login import UserMixin      
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class Employee(db.Model, UserMixin):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = True)
    employee_number = db.Column(db.Integer, nullable = True, unique = True)
    hashed_passowrd = db.Column(db.String(255), nullable = True)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)