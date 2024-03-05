# Procession Lists
#  -any, all
# - filter
# - map
# - zip
# - custom sort

users = [
    {'id': 12323, 'displayName': 'Jose Smith', 'email': 'joe.smith@here.com'},
    {'id': 12324, 'displayName': 'andres perez', 'email': 'andres.perez@here.com'},
]

print(users)

def sorter(user):
    return item['displayName']