# Dictionaries
# - mapping iterable, mutable
# - declare
# - add/remove items
# - loop through all items
# - dict()
# - zip()
# - dir()
# - duck typing revisited

book = {
    'title': 'Goodnight Trains', 
    'ratings': 8976, 
    'stars': 4.9,
    'author': {
        'firstName': 'Margaret',
        'lastName': 'Wise Brown'
    },
    'images': [
        'goodnight1.png',
        'goodnight2.png'
    ]
}

# print(book)

# Delete an item from the dictionary
del book['stars']

# print(book)

# Add item to the dictionary
book['stars'] = 4.9

# print(book)

# Go through every item
# for i in book:
    # print(i, book[i])

# ********************** dic() **********************
pond = dict(depth = 10, area = '210 sqft')
print(pond)

alligator = dict(
    [
        ('lifespan', 50),
        ('length', 3.4),
        ('lengthUnits', 'meters')
    ]
)

print(alligator)



# ********************** zip() **********************
keys = ['name', 'home runs', 'strikeouts', 'rbi']
values = ['Babe Ruth', 7214, 1330, 2214]
player = dict(zip(keys, values))
print(player)