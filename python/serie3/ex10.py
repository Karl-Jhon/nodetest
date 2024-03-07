nembere=int(input("entrer un nembere:"))
somme_diviseurs=0
for i in range(1, nembere):
    if nembere % i == 0:
        somme_diviseurs += i
        if somme_diviseurs == nembere:
            print("le nembere est parfait")
        else:
            print("le nembere n'est pas parfait")
