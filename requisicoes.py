import requests
from bs4 import BeautifulSoup
import re

#responseTear001ManCounter = requests.get('http://172.17.1.1/cgi-bin/main.cgi?294') http://94550ac37bb5.sn.mynetname.net:30002/cgi-bin/main.cgi?298
#responseTear001ManCounter = requests.get('https://promocliques.com.br/dev/teares')
responseTear001ManCounter = requests.get('http://94550ac37bb5.sn.mynetname.net:30002/cgi-bin/main.cgi?304?0?0')

contentTear001ManCounter = responseTear001ManCounter.content

Tear001ManCounter = BeautifulSoup(contentTear001ManCounter, 'html.parser')

#print(Tear001ManCounter.find_all("table"))

tabelas = Tear001ManCounter.find_all("table")
cabecalhos = Tear001ManCounter.find_all("th")
dados = Tear001ManCounter.find_all("td")

print(tabelas)

# print(len(tabelas))

# for tabela in tabelas:

#  print(tabela.find_all('th'))

# for tabela in tabelas:

#  print(tabela.find('th').text)

# print(tabelas[0].text)

# print(tabelas[1].text)

#ths = []

#for linha in tabelas:
#  if linha.content == 'th':
#    print(linha)

#print(dados)

#dado = [] 
#count = 0
#for linha in dados:
#  dado.append(linha.text)
#  count = count + 1
#  print(count)
#for linha in dado:
#    print(linha)
#print("wow", dado[2])


