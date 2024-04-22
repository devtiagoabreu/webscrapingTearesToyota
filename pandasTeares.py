import pandas as pd

from requisicoes import Tear001ManCounter

url = 'https://promocliques.com.br/dev/teares'

df = pd.read_html(url, header=0)[1]  

print(df)


print(df[['Tear']])