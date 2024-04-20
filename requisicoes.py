import requests
from bs4 import BeautifulSoup

#responseTear001ManCounter = requests.get('http://172.17.1.1/cgi-bin/main.cgi?294') http://94550ac37bb5.sn.mynetname.net:30002/cgi-bin/main.cgi?298
responseTear001ManCounter = requests.get('http://94550ac37bb5.sn.mynetname.net:30002/cgi-bin/main.cgi?294')

contentTear001ManCounter = responseTear001ManCounter.content

Tear001ManCounter = BeautifulSoup(contentTear001ManCounter, 'html.parser')

#print(Tear001ManCounter.find_all("table"))

print(Tear001ManCounter.find("table", attrs={}))



