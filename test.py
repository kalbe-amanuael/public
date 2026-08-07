from abc import ABC
from email import message


class Account :
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. New balance is {self.balance}.")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds.")
        else:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance is {self.balance}.")

    def get_balance(self):
        return self.balance


class SavingAccount(Account):
    def __init__(self, name, balance, interest_rate):
        super().__init__(name, balance)
        self.interest_rate = interest_rate

    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        print(f"Added interest of {interest}. New balance is {self.balance}.")


class CurrentAccount(Account):
    def __init__(self, name, balance, overdraft_limit):
        super().__init__(name, balance)
        self.overdraft_limit = overdraft_limit

    def withdraw(self, amount):
        if amount > self.balance + self.overdraft_limit:
            print("Exceeded overdraft limit.")
        else:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance is {self.balance}.")

Account1 = SavingAccount("sami", 1000, 0.05)
Account2 = CurrentAccount("mame", 500, 1000)

for account in [Account1, Account2]:
    account.deposit(200)
    account.withdraw(150)
    print(f"{account.name}'s balance: {account.get_balance()}")
