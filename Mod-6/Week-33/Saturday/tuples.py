# Tuples
# - Immutable
# - Iterable
# - declare -can be delcared without parentheses as long as they contain multiple elements separated by a comma
# - cannot append, remove or sort in place
# - sorted()
# - min, max, sum, len
# - empty and single item tuples
# - returning tuples from functions

# a = (1, 2, 3, 4, 5, 6, 7)
# b = ('a', 'b', 'c')
# c = 10, 20, 30

# shopping = ('pan','apples', 'leche')
# alphaShopping = sorted(shopping)
# print(alphaShopping)

# shoppingStops = (
#     ['pan', 'leche', 'juevos'], 
#     ['futbol'],
# )

# print(shoppingStops)
# shoppingStops[0].append('butter')
# print(shoppingStops)

# users = [
#     (1, 'user_a'),
#     (2, 'user_b'),    
# ]

# print(users)

# scores = (15, 66, 34, 39, 54, 12)
# print(max(scores))
# print(min(scores))
# print(sum(scores) / len(scores))
# print(sorted(scores))

# def minmax(numbers):
#     return min(numbers), max(numbers)

# myNums = (7, 35, 25, 9, 11)
# print(minmax(myNums))

# (lowest, highest) = minmax(myNums)
# print(lowest)
# print(highest)