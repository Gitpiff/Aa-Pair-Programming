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

# Insertion Sort 
# Create a function that uses the insertion sort algorithm to sort the list.

# Write your function, here.
def insertion_sort(lst):
  for i in range(1, len(lst)):
    ele = lst[i]
    j = i - 1
    while lst[j] > ele and j >= 0:
      lst[j+1] = lst[j]
      j -= 1
    lst[j+1] = ele
  return lst


print(insertion_sort([55, 21, 5, 3, 6, 95])) #> [3, 5, 6, 21, 55, 95]
print(insertion_sort([4, 1, 0, 3, 8, 9])) #> [0, 1, 3, 4, 8, 9]
print(insertion_sort([1, 4, 3, 0, 3, 0, 2, 8])) #> [0, 0, 1, 2, 3, 3, 4, 8]


# All Occurrences Of A Value In A List
# Create a function that returns the indices of all occurrences of an item in the list.

# Write your function, here.
def get_indices(lst, val):
  indices = []
  for i in range(0, len(lst)):
    if val == lst[i]:
      indices.append(i)
  return indices


print(get_indices(["a", "a", "b", "a", "b", "a"], "a"))
# Prints [0, 1, 3, 5]

print(get_indices([1, 5, 5, 2, 7], 7))
# Prints [4]

print(get_indices([1, 5, 5, 2, 7], 5))
# Prints [1, 2]

print(get_indices([1, 5, 5, 2, 7], 8))
# Prints []