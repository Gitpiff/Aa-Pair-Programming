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

@jokes_router.route("/new", methods=["POST"])
def create_new_joke():
    new_joke = create_joke(
    "Why did the scarecrow get a promotion?", 
    "He was outstanding in his field", 
    "G"
    )
    return render_template("jokeform.html", new_joke=new_joke)


@jokes_router.route("/<int:id>") #route parameters
def one_joke(id):
    print(id)
    one_joke = dad_jokes[id]
    # one_joke = Joke.query.get(id)
    return render_template("all_jokes.html", dad_jokes = [one_joke])

