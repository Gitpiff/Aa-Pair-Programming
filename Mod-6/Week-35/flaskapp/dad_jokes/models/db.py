from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

likes = db.Table(
    'likes',
    db.Model.metadata,
    db.Column('users', db.Integer, db.ForeignKey('users.id'), primary_key = True),
    db.Column('jokes', db.Integer, db.ForeignKey('jokes.id', primary_key = True))
)

#Define a Model
class User(db.Model):
    __tablename__ = "users" #tablename must be plural
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(50), nullable = False, unique = True)
    password = db.Column(db.String(50), nullable = False)

    #Relationships
        #what other model are we connecting to & back_populates has to match the variable at the other side of the relationship
    jokes = db.relationship('Joke', back_populates = 'user')
    author_likes = db.relationship(
        "Joke",
        secondary = likes,
        back_populates = 'joke_likes',
        cascade = "all, delete"
    )


class Joke(db.Model):
    __tablename__ = "jokes"
    id = db.Column(db.Integer, primary_key =  True)
    joke_body = db.Column(db.String(255), nullable = False)
    puncline = db.Column(db.String(150), nullable = False)
    rating = db.Column(db.String(10), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    #Relationships
    user = db.relationship("User", back_populates = "jokes")
    jokes = db.relationship(
        "User",
        secondary = likes,
        back_populates = "author_likes",
        cascade = "all, delete"
    )

    #Creating new items workflow
    #new joke info
    # joke_body, punchline, rating -> form/user
    # user id -> logged in user, or a select from a selectfield
    # query for the full user based on id
    # user = User instance result from our query
    # make new resource