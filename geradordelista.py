#!usr/bin/env phython3
import random
from datetime import datetime

nomes = [
    "João Silva", "Maria Santos", "Carlos Alberto", "Ana Luísa", "Fernando Costa",
    "Patrícia Oliveira", "Miguel Pinto", "Helena Fernandes", "Rui Figueiredo",
    "Beatriz Rocha", "Tomás Sousa","António Kalenga" , "Laura Ramos", "Pedro Lima",
	 "Inês Correia", "Vítor Matos", "Catarina Lopes", "André Pires", "Sofia Nogueira",
    "Daniel Tavares", "Mariana Duarte"
]

with open("pessoas.txt", "w", encoding="utf-8") as f:
    for nome in nomes:
        idade = random.randint(10, 80)
        debil = random.choice(["Sim", "Não"])
        crianca = random.choice(["Sim", "Não"])
        f.write(f"{nome}; {idade}; {debil}; {crianca};\n")

print("Arquivo 'pessoas.txt' gerado com sucesso.")
