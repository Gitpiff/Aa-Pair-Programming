from flask import Blueprint

jokes_router = Blueprint('jokes', __name__)



print("inside jokes blueprint", __name__)