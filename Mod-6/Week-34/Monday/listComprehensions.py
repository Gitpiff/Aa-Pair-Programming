# -Handle Iterables
# -Similar to JS arrow functions map/filter
# -Two components at a minimum [value that we want to add to the list, for-loop]
# -Can do more than one loop at the time

lst = [1, '2', 'three', True, None]
# TRADITIONAL FOR LOOP
new_lst = []
for item in lst:
    new_lst.append(item)


# LIST COMPREHENSION
lst_cmpre = [item for item in lst]
# print(lst_cmpre)

# EXAMPLE, TITLE CASE THE FOLLOWING LIST
list2 = ['jerry', 'MARY', 'carrIE', 'larry']

# WITH A TRADITIONAL FOR LOOP
title_list = []
for name in list2:
    title_list.append(name.title())

# print(title_list)

# LIST COMPREHENSION
title_lst_cmpre = [name.title() for name in list2]

# print(title_lst_cmpre)



# **************** FILTER *******************
# list comprehensive => [value, for-loop, condition]

num_list = [1, 20, 38, 7, 9, 65, 35, 17, 33]

# FOR LOOP
new_num_list = []
for num in num_list:
    if num % 3 == 0:
        new_num_list.append(num)

# print(new_num_list)

# LIST COMPREHENSIVE
compre_num_list = [num for num in num_list if num % 5 ==0]
# print(compre_num_list)



# **************** TUPLES *******************
# Get the following tuples (1, 'a'), (1, 'b'), (1, 'c'), etc.
letters = ['a', 'b', 'c']
nums = [1, 2, 3]

# FOR LOOP
new_tuple_list = []
for letter in letters:
    for num in nums:
        new_tuple_list.append((num, letter))

# print(new_tuple_list)

# LIST COMPREHENSIVE
# [value, outer-for-loop, inner-for-loop]
compre_tuple_list = [(num, letter) for num in nums for letter in letters]

# print(compre_tuple_list)



# 
# **************** DICTIONARY COMPREHENSION *******************
# - just stores values
# - can't have any methods

keys = ['age', 'name', 'height']
values = [32, 'Corina', 1.4]

# FOR LOOP
d = dict()
for i in range(len(keys)):
    d[keys[i].title()] = values[i]

print(d)

# DICTIONARY COMPREHENSIVE
# { key: value for-loop }

compre_d = { keys[i].title(): values[i] for i in range(len(keys))}

print(compre_d)


# USING ZIP -PREFERED WAY-
# { key: value, for-loop }
zip_d = { key.title(): value for key, value in zip(keys, values)}

print(zip_d)
