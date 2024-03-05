# Sets
# - Unordered
# - Group of elements where every element is unique
# - declare
# - union, intersection, symmetric_difference, difference
# - Examples
# -- unique tags
# -- users taking two actions

# a = {1, 2, 3}
# b = {3, 4, 5}
# print(a)
# print(b)


# Combine sets 
# print(a | b) #> using union combine both sets
# print(a & b ) #> gives the item where both sets intersect 
# print(a - b) #> gives us what's different about the sets, what's in a that is not in b
# print(b - a) #> gives us what's different about the sets, what's in b that is not in a
# print(a ^ b) #> symetric difference, returns unique values in both sets

# a = set('banana')
# b = set('scarab')
# print(a)
# print(b)

# print(a | b)
# print(a.union(b))
# print(a.intersection(b))
# print(a.symmetric_difference(b))
# print(b.symmetric_difference(a))
# print(a.difference(b))
# print(b.difference(a))

# Convert a list into a set -useful to get rid of duplicates-
basket = ['apple', 'banana', 'apple', 'orange', 'pear', 'apple']
print(basket)
print(set(basket))

# Use Cases for Sets
#> Return everybody that both did a purchase and also called help desk
purchasingEmails = ('bob@gmail.com', 'sam@yahoo.com', 'riley@rileymail.org')
helpEmails = ('jo@josbilling.com', 'bob@gmail.com', 'sam@yahoo.com')

print('Users making a purchase and also calling help desk ')
print(set(purchasingEmails) & set(helpEmails)) #> Return everybody that both did a purchase and also called help desk

posts = [
    {'title': 'All About lists', 'tags': ('fun', 'informative', 'lists')},
    {'title': 'Tuple Trouble', 'tags': ('fun', 'tuples')},
]

allTags = []
for i in range(len(posts)):
    print(posts[i]['tags'])
    allTags.extend(posts[i]['tags']) #> combines all tags

print(allTags)
print(set(allTags)) #> Prints ONLY the UNIQUE values
allTags = list(set(allTags)) #> Must turn into a list to be able to sort
allTags.sort()
print(allTags)
