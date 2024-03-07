
a=int(input("entrer le valeur de a:"))
b=int(input("entrer le valeur de b:"))
if a > b:
    a, b = b, a
    somme=0
    for i in range(a, b+1):
        if i > 0:
            somme += i
            print("la somme des entiers positifs entre", a,"et", b,"est :", somme)