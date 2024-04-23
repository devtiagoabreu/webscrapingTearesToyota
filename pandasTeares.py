import pandas as pd

#from requisicoes import Tear001ManCounter

url = 'https://promocliques.com.br/dev/teares'

url2 = 'http://94550ac37bb5.sn.mynetname.net:20249/tms/loom/opestate_all.cgi'

tear00002_eficiencia_turno_paradas = 'http://94550ac37bb5.sn.mynetname.net:30002/cgi-bin/main.cgi?304?0?0'

#df = pd.read_html(tear00002_eficiencia_turno_paradas,  header=0)[1]  
df = pd.read_html(url2, header=0)

print(df)


#print(df[['TEAR']])