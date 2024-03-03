# Lists
# - delcaration & length
# - accessing items
# - sorting
# - sum, min, max

# empty = []
# print(empty)

# friends = ["Whale", "Oreja", "Tweet", "Piglet"]
# print(friends)

# print(friends[0])
# # print(friends[10])
# print(friends[-1])
# print(friends[1:-1])
# print(friends[1::2]) 
# print(friends[::2])

# print(len(friends))

# scores = [233, 555, 432, 90]
# print(scores)

# teamScore = sum(scores)
# print(teamScore)

# highestScore = max(scores)
# print(highestScore)

# lowestScore = min(scores)
# print(lowestScore)

# avergageScore = sum(scores) / len(scores)
# print(avergageScore)

# rankedScores = sorted(scores, reverse=True)
# print(rankedScores)

# supplies = ['pan', 'bread', 'conchas', 'cuernos']
# print(supplies)

# # add new item to list
# supplies.append('donas')
# print(supplies)

# # remove item
# supplies.remove('donas')
# print(supplies)

# # to sort
# supplies.sort()
# print(supplies)

# # capital letter will be sorted before lowercase letters, to avoid we must convert them all to lowecase
# # this modifies the original array
# supplies.sort(key=str.lower)
# print(supplies)


colors = ['red', 'black', 'blue', 'red', 'orange']
print(colors)

## creates a new copy of the original array
alphabetical = sorted(colors)
print(colors)
print(alphabetical)
## reverse order
alphabetical = sorted(colors, reverse=True)
print(alphabetical)

reverseColors = reversed(colors)
reverseAlpha = reversed(alphabetical)
print(list(reverseColors))
print(list(reverseAlpha))