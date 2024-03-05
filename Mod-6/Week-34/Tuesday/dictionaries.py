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

print(book)

# Delete an item from the dictionary
del book['stars']

print(book)

# Add item to the dictionary
book['stars'] = 4.9

print(book)

# Go through every item
for i in book:
    print(i, book[i])