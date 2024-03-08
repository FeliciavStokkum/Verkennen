lijst = [5, 5, 3, 2, 15]
tuple = (5, 3, 2, 15)
mijn_set = set(lijst) #set heeft geen gegarandeerde volgorde, unieke items #set is een build in function
getal = int(5) #int is een build in function
mijn_dict = {
        "naam": "Lithe",
        "leeftijd": 21,
        "kleur_ogen": "bruin"
}
# print(mijn_dict["naam"])

#print de completen persoon bijv:
# naam: Lithe
# Leeftijd: 21

for sleutel, waarde in mijn_dict.items():
    print(f"{sleutel} : {waarde}")

for sleutel in mijn_dict.keys():
    print(sleutel)

for sleutel in mijn_dict.values():
    print(sleutel)  

#controleer of een bepaalde sleutel in een dict zit
mijn_kleuren = {"rood": 3, "groen": 3, "blauw": 3}

if "blauw" in mijn_kleuren:
    print("blauw zit erin")
else:
    print("Blauw zit er niet in")

mijn_kleuren.update({"paars": 0})
print(mijn_kleuren)