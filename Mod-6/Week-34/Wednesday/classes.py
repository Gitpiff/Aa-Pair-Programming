# - Leave two lines between classes
# - By using @property no parentheses are needed when calling the method
# - Dundr methods have double underscores __init__

class Invoice:
    def __init__(self, number):
        self._number = number
        self._items = []
        #> Add method to add invoices to the item
    def add_item(self, item):
        self._items.append(item)

    @property
    def number(self):
        return self._number
    
    @number.setter
    def number(self, value):
        if value is not None:
            self._number = value
    #> Method to get the total
    @property
    def total(self):
        # t = 0
        # for item in self._items:
        #     t += item.total()

        # Change the list of items to a list of totals (map)
        # Add up all the items (totals)
        # Return value
        # totals = [item.total() for item in self._items]

        return sum([item.total for item in self._items])
    
    def __repr__(self):
        return f"<Invoice {self._number} ${self.total}>"
    

class LineItem:
    def __init__(self, amount, description):
        self._amount = amount
        self._description = description


class FeeItem(LineItem):
    def __init__(self, rate, amount, description):
       super().__init__(amount, description)
       self._rate = rate
    #> Method to ge the total
    @property 
    def total(self):
        return self._rate * self._amount


class ExpenseItem:
    def __init__(self, amount, description):
        self._amount = amount
        self._description = description
    #> Method to ge the total
    @property
    def total(self):
        return self._amount


invoice = Invoice('A12345')
fee = FeeItem(100, 1.7, 'Phone Conversation')
expense = ExpenseItem(200, 'Copies')

invoice.add_item(fee)
invoice.add_item(expense)

print(invoice.number)
invoice.number = 'B2345567'
print(invoice)

# print(invoice)
# print(fee.total())
# print(expense.total())