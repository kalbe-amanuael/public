class account :
    def __init__(self, owner, bal):
        self.owner =owner
        self.bal = bal
    def deposit(self, amount) :
        self.bal +=amount
    def withdrawal(self, amount) :
        self.bal -=amount
    def statement(self) :
        print(f"(self.owner): {self.bal} ETB")
KALEB = account('KALBE',9000)
KALEB.deposit(700)
KALEB.withdrawal(7682)
KALEB.statement()
print(KALEB.withdrawal)
      

            