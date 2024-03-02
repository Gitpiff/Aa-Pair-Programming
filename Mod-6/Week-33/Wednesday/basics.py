# Basics of Python
# - single, double and triple quotes
# - shortcut for code comment (Mac: command+/ or Windows: control+/)
# - printing variables
# - None

# print("Hello World")
# print("It's raining")
# print('''Welcome to Phyton
# Have a great day!!!''')

# None => Useful for delcaring a variable that we don't have content to put into that variable
# a = None
# print(a)

# Assignment Operators in Python
# - Increment (no postfix/prefix)
# - Powers and Integer division
# - Big Numbers
# - Stopping a runaway process (control + c)

# i = 1

# i = i + 5
# print(i)

# i **= 2
# print(i)
# # Integer Division
# i //= 10
# print(i)

# i *= 10**20
# print(i)
# # Scientific Notation
# print(float(i))


# Meaning of Truth in Python
# - numeric types equivalent, but no strings
# - conditionals (if, elif, else)
# - truth equivalence

# a = 1
# b = 1.0
# c = "1"

# print(a == b)
# print(a == c)
# print(b == c)

# if (a == c):
#     print("match")
# elif (a == b):
#     print("a matches b")
# else: 
#     print("Not a match")

# a = "dart"
# if (a):
#     print(f'{a} is true')
# else:
#     print(f'{a} is false')


# Identity vs Equality
# - is vs ==
# working with literals
# isinstance()

# a = 1
# b = 1.0
# c = "1"

# print(a == b)
# print(a is b)
# print(b == 1 and isinstance(b, int))
# print(a == 1 and isinstance(a, int))

# # change from a float to a boolean
# b = int(b)
# print(b == 1 and isinstance(b, int))
# print(b)

# print(a)
# print(float(a))
# print(str(a))

print(not 4 == 5)