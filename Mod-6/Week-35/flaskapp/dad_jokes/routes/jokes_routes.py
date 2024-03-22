from flask import Blueprint, render_template
from ..db_jokes import dad_jokes

# Whatever we name our router we have to continue using in the rest of our routes for this file
jokes_router = Blueprint('jokes', __name__, url_prefix="/jokes")

# / - Home
# /jokes/all -All Jokes

print("inside jokes blueprint", __name__)


@jokes_router.route("/all")
def all_jokes():
    return render_template("all_jokes.html", dad_jokes=dad_jokes)