# Try/Except
# In Python, error handling can be done using a try/except block. Implement except blocks to handle the exceptions that will be raised for the following try blocks:

# Example 1
try:
    str = 'hello'
    str[0] = 'm'
    print(str)
except TypeError as e:
    print(e, "... because strings are immutable!")
finally:
    print('I happen regardless of any exceptions.')

# Example 2
try:
    print(x)
except NameError as e:
    print(e)
finally:
    print('I happen regardless of any exceptions.')



# Print List
# Given a list of elements, write a function, print_list that prints each
# element of the list out.
    
    # Write your solution here.
def print_list(list):
    ind = 0
    while(ind < len(list)):
      print(list[ind])
      ind += 1


lst1 = [1, 2, 5, 1429]
lst2 = ['this', 'list', 'is', 'being', 'printed']
lst3 = ['there', 'are', 2, 'data', 'types', 'being', 'printed']
lst4 = [[1, 2], ['hello', 'from', 'within']]
print_list(lst1)        # 1 2 5 1429
print_list(lst2)        # this list is being printed
print_list(lst3)        # there are 2 data types being printed
print_list(lst4)        # [1, 2] ['hello', 'from', 'within']


# Check Membership
# You are a bouncer at a club and you have a list of approved guests. Write a
# function check_membership that accepts the approved guests list guest_list
# and a name guest_name as arguments, and checks if the guest_name is on the
# list.

# Write your solution here.
def check_membership(guest_name, guest_list):
    return guest_name in guest_list



guest_list = ["George", "Anthony", "Susan", "Tiffany"]
print(check_membership("Sally", guest_list))        # False
print(check_membership("Anthony", guest_list))      # True



# Double That Penny
# It's time to practice writing a while loop in Python. As you've seen, the syntax is similar to JavaScript, except using : at the end of the loop definition and indentation for the block of code to run with that loop.

# Write a while loop to calculate the total number of pennies resulting from each doubling. End the loop when the value is over a million dollars.

print("** Doubling Penny **")

# How many times would a penny need to double to generate a million dollars?
count = 0
total = 0

# STEP 2: Write the while loop
while total < 1000000:
  if total == 0:
  	total = 0.01
else:
    total *= 2
    count += 1


print('Double', count, 'times')

# How much money has been generated at that point?
print('${:,}'.format(total))




# Valid Hex Code
# Profile
# Search
# Valid Hex Code
# Create a function that determines whether a string is a valid hex code.

# A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.

# Write your function, here.
def is_valid_hex_code(code):
    if code[0] != "#" or len(code) != 7:
       return False

    i = 1
    while i < len(code):
        c = code[i].lower()
        if not c.isdigit():
            if c != 'a' and c != 'b' and c != 'c' and c != 'd' and c != 'e' and c != 'f':
               return False
        i += 1
    return True

## Here's another variant, with the for loop.
## You'll learn more about this tomorrow.
def is_valid_hex_code_with_for(color):
  if color[0] != '#' or len(color) != 7:
    return False
  
  color_chars = list('abcdef0123456789')
  for char in color[1:].lower():
    if char not in color_chars:
      return False
  return True

print(is_valid_hex_code("#CD5C5C"))  #> True
print(is_valid_hex_code("#EAECEE"))  #> True
print(is_valid_hex_code("#eaecee"))  #> True

print(is_valid_hex_code("#CD5C58C"))
# Prints False
# Length exceeds 6

print(is_valid_hex_code("#CD5C5Z"))
# Prints False
# Not all alphabetic characters in A-F

print(is_valid_hex_code("#CD5C&C"))
# Prints false
# Contains unacceptable character

print(is_valid_hex_code("CD5C5C"))
# Prints False
# Missing #