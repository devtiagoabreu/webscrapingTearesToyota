import requests
from bs4 import BeautifulSoup

responseTear001ManCounter = requests.get('http://172.17.1.1/cgi-bin/main.cgi?294')

contentTear001ManCounter = responseTear001ManCounter.content

Tear001ManCounter = BeautifulSoup(contentTear001ManCounter, 'html.parser')

#print(Tear001ManCounter.prettify())

table = (
  contentTear001ManCounter.find("table")
)