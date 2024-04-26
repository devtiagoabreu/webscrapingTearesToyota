// URL: https://script.google.com/macros/s/AKfycbxkwqMxBESJFmSUIsOV6WcbTvNHeZ3_5ttfkdWDHPyk7aLGHPOwxon676UMG1sFMvbvtg/exec
// link da planilha: https://docs.google.com/spreadsheets/d/1wo9UL2ADbTOQBvnHjHM6uG7kKT_nt2jyJEgInyqdDkw/edit#gid=0

function doGet(req) {
  var tear = req.parameter.tear;
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('displayOperacional');
  var values =sheet.getDataRange().getValues();
  var date;

  var teares = [];
  for(i = 1 ; i < values.length; i++) {
    var row = {};
    row['tear'] = values[i][0].toString();
    row['artigo'] = values[i][1].toString();
    row['status'] = values[i][2];
    row['duracao'] = (parseFloat(values[i][3].toString()) * 24)*60;
    row['paradaTurnoAtual'] = parseFloat(values[i][4].toString());
    row['eficienciaTurnoAtual'] = parseFloat(values[i][5].toString());
    row['parada24h'] = parseFloat(values[i][6].toString());
    row['eficiencia24h'] = parseFloat(values[i][7].toString());
    row['rpm'] = parseFloat(values[i][8].toString());
    row['previsaoTrocaRoloTecido'] = (parseFloat(values[i][9].toString())* 24)*60;
    row['previsaoTrocaRoloUrdume'] = (parseFloat(values[i][10].toString())* 24)*60;
    row['metrosTotais'] = parseFloat(values[i][11].toString().replace("m",""));
    row['atualizacaoMetros'] = values[i][12].toString();
    row['atualizacaoMonitoramento'] = values[i][13].toString();

    teares.push(row);
  }

  if (tear != null){
    var consultaTeares = saida.filter(obj => obj.tear.toLowerCase().includes(tear.toLowerCase()));
    return ContentService.createTextOutput(JSON.stringify({consultaTeares})).setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput(JSON.stringify({teares})).setMimeType(ContentService.MimeType.JSON);
}
