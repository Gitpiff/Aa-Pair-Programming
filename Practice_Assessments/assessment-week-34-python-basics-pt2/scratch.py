def func(a, b, *args, **kwargs):
    print(a, b, args, kwargs)

func(True, False, 1, 2, c=3)