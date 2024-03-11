# - Functions that take in a function as an argument (callback)
# - Functions that wrap an inner function (closure)
# - Dynamically modify behavior

def exponent_function_decorator(exponent_function_to_wrap):
    def wrapper_function(base_number, exponent):
        return base_number ** exponent_function_to_wrap(exponent)
    return wrapper_function
    

def exponent_function(exponent):
    return int(exponent)


print(exponent_function)
print(exponent_function(7.547))

exponent_function = exponent_function_decorator(exponent_function)
print(exponent_function(7, 9))