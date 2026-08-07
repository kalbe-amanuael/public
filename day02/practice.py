temp = float(input("enter the temperature in C: "))

if temp <15 :
    print("cold")
elif 15 <= temp <= 28 :
    print("warm")
else :
    print("hot")

for n in range(1, 11) :
        print(f"Receipt #{n}")

for num in range(1, 21) :
    if num % 2 == 0 :
       print(num)   

def apply_discount(price, percent=10) :
        discount = price * (percent / 100)
        return price - discount
print("price with 10% default discount:", apply_discount(100))
print("price with 25% custom discount:", apply_discount(100, 25))

count = 5

while count >= 1:
        print(count)
        count -= 1
print("liftoff!")   
    

          