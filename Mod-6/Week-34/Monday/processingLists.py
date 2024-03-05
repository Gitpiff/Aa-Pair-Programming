# Procession Lists
#  -any, all
# - filter
# - map
# - zip
# - custom sort

# users = [
#     {'id': 12323, 'displayName': 'Jose Smith', 'email': 'joe.smith@here.com'},
#     {'id': 12324, 'displayName': 'andres perez', 'email': 'andres.perez@here.com'},
# ]

# print(users)

# def sorter(user):
#     return item['displayName'].lower()

# users.sort(key=sorter)
# print(users)

# reversedUsers = sorted(users, key=sorter, reverse=True)
# print(reversedUsers)

# ALL AND ANY

# print("all() - any item that is false") #> if any list has an empty item returns False
# titles1 = ['Mr', 'Mrs', 'Ms']
# titles2 = ['Mr', 'Mrs', 'Ms', '']
# titles3 = []
# print(all(titles1)) #>Checks if every item has value, returns True or False
# print(all(titles2))
# print(all(titles3))


# print("any()") #> if all items empty/not content return False
# feedback1 = ['', '', '']
# feedback2 = ['Fun!', '', 'Clean!']
# feedback3 = []
# print(any(feedback1), feedback1)
# print(any(feedback2), feedback2)
# print(any(feedback3), feedback3)

# Adopted Cats
# Given a list of Cat objects (dictionaries representing cats), write a function
# cat_verify that uses the all() built-in function to determine if all cats
# are the same breed. Then use any() to determine if any of them are up for
# adoption. Return the result as a tuple.


# The breed represents the cat's breed, and adopted represents whether the
# cat bas been adopted already or not.

# Write your code here.

# FILTER AND MAP

scores = [90, 86, 75, 91, 62, 99, 54, 70]

def isA(num):
    return num >= 90

aScores = filter(isA, scores)
print(scores)
print(list(aScores))

def getGrade(num):
    if num >= 90:
        return 'A'
    elif num < 90 and num >= 80:
        return 'B'
    elif num < 80 and num >= 70:
        return 'C'
    elif num < 70 and num >= 60:
        return 'D'
    else: 
        return 'F'

grades = list(map(getGrade, scores))
print(grades)

print('ZIPPED GRADES AND SCORES')
combined = list(zip(scores, grades))
print(combined)