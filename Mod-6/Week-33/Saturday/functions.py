# Next create a couple simple functions in Python to practice your skills. Follow the 3 steps in the code to complete this exercise.

# STEP 1 - Write a function named `welcome` that prints a welcome message
def welcome():
  return print('welcome')

# Step 2 - Write a function named `calc_sum` that
#   - takes in two numbers and
#   - returns their sum
def calc_sum(num1, num2):
  return num1 + num2 


# DO NOT EDIT - The guts of the program
welcome()
print(calc_sum(1,2), 'is 3?', calc_sum(1,2) == 3)
print(calc_sum(-10,-2), 'is -12?', calc_sum(-10,-2) == -12)
print(calc_sum(1.1,-2.2), 'is -1.1?', calc_sum(1.1,-2.2) == -1.1)
print(calc_sum('a','b'), 'is ab?', calc_sum('a','b') == 'ab')
print(calc_sum([1,2],[3,4]), 'is [1,2,3,4]?',
      calc_sum([1,2],[3,4]) == [1,2,3,4])


# Using Lambdas
# In Python, lambda functions work as anonymous functions that
# evaluates to a single expression. You could say it's a little more petite than
# its JavaScript counterpart.

# Write a function string_multi_print that
# accepts a string, str, and returns a lambda that prints str i
# times.

# Write your code here.
def string_multi_print(str):
    return lambda i : print(str*i)



string_multi_print('hello ')(2)  # Prints "hello hello "
string_multi_print('wahoo ')(3)  # Prints "wahoo wahoo wahoo "

# Merge Helper - Challenge
# Recall the merge sort algorithm:


# Find midpoint to
# divide list in half
# Call merge_sort recursively on the first
# half
# Call merge_sort recursively on the second half
# Merge the
# two sorted halves with merge


# Implement the merge_sort
# function with the merge helper function.

# This is an out-of-place solution, see if you can do this in-place if you
# hadn't previously done so!

# def merge_sort(list):
#     if len(list) > 1:
#         mid = len(list)//2
#         lower_half = merge_sort(list[:mid])
#         upper_half = merge_sort(list[mid:])
#         return merge(lower_half, upper_half)
#     return list

# def merge(lower, upper):
#     i = j = 0
#     temp = []
#     while i < len(lower) or j < len(upper):
#         if i == len(lower):
#             temp.append(upper[j])
#             j+=1
#         elif j == len(upper):
#             temp.append(lower[i])
#             i+=1
#         elif lower[i] < upper[j]:
#             temp.append(lower[i])
#             i+=1
#         else
#             temp.append(upper[j])
#             j+=1
#     return temp


