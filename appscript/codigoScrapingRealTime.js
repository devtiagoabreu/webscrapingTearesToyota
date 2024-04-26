// link da planilha: https://docs.google.com/spreadsheets/d/1-Ec4nMNS9O4Xj-SHHIvZMhu5R2zR1SCnz0zLRo9T4-U/edit#gid=0


function Atualiza_IMPORTHTML_Com_Registro() {
  
  var Arg_URL = "http://94550ac37bb5.sn.mynetname.net:20249/tms/loom/opestate_all.cgi"; 
  var Arg_Consulta = "Table"; 
  var Arg_Indice = 0; 
  var Hora_Agora = new Date(); 
  var importHTML_Funcao = '=IMPORTHTML("' + Arg_URL + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
    
  SpreadsheetApp.getActiveSpreadsheet().getRange("A1").clearContent();
  SpreadsheetApp.flush(); // Atualiza a planilha
  SpreadsheetApp.getActiveSpreadsheet().getRange("A1").setValue(importHTML_Funcao);// Insere a função importHTML na célula A1
  SpreadsheetApp.getActiveSpreadsheet().getRange("N3").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString());

}

function AtualizaMetragemTeares() {
  
  var ss = SpreadsheetApp.getActive()
  var sheet = ss.getSheetByName("displayOperacao")
  var tearA3 = sheet.getRange(3, 1)
  var tearA4 = sheet.getRange(4, 1)
  //var tearA5 = sheet.getRange(5, 1)
  //var tearA6 = sheet.getRange(6, 1)
  //var tearA7 = sheet.getRange(7, 1)
  //var tearA8 = sheet.getRange(8, 1)
  //var tearA9 = sheet.getRange(9, 1)
  //var tearA10 = sheet.getRange(10, 1)
  //var tearA11 = sheet.getRange(11, 1)
  //var tearA12 = sheet.getRange(12, 1)
  //var tearA13 = sheet.getRange(13, 1)
  //var tearA14 = sheet.getRange(14, 1)
  //var tearA15 = sheet.getRange(15, 1)
  //var tearA16 = sheet.getRange(16, 1)
  
  var Arg_URL_tearA3 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA3.getValue()  + "/cgi-bin/main.cgi?294"; 
  var Arg_URL_tearA4 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA4.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA5 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA5.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA6 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA6.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA7 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA7.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA8 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA8.getValue()  + "/cgi-bin/main.cgi?294"; 
  //var Arg_URL_tearA9 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA9.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA10 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA10.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA11 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA11.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA12 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA12.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA13 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA13.getValue()  + "/cgi-bin/main.cgi?294"; 
  //var Arg_URL_tearA14 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA14.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA15 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA15.getValue()  + "/cgi-bin/main.cgi?294";
  //var Arg_URL_tearA16 = "http://94550ac37bb5.sn.mynetname.net:3000" + tearA16.getValue()  + "/cgi-bin/main.cgi?294";
  
  var Arg_Consulta = "Table";
  var Arg_Indice = 5;
  var Hora_Agora = new Date();

  var importHTML_FuncaoA3 = '=IMPORTHTML("' + Arg_URL_tearA3 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  var importHTML_FuncaoA4 = '=IMPORTHTML("' + Arg_URL_tearA4 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA5 = '=IMPORTHTML("' + Arg_URL_tearA5 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA6 = '=IMPORTHTML("' + Arg_URL_tearA6 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA7 = '=IMPORTHTML("' + Arg_URL_tearA7 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA8 = '=IMPORTHTML("' + Arg_URL_tearA8 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA9 = '=IMPORTHTML("' + Arg_URL_tearA9 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA10 = '=IMPORTHTML("' + Arg_URL_tearA10 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA11 = '=IMPORTHTML("' + Arg_URL_tearA11 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA12 = '=IMPORTHTML("' + Arg_URL_tearA12 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA13 = '=IMPORTHTML("' + Arg_URL_tearA13 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA14 = '=IMPORTHTML("' + Arg_URL_tearA14 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA15 = '=IMPORTHTML("' + Arg_URL_tearA15 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 
  //var importHTML_FuncaoA16 = '=IMPORTHTML("' + Arg_URL_tearA16 + '";"'+ Arg_Consulta + '";'+Arg_Indice + ')'; 


  //Logger.log(tearA3.getValue())
  
  SpreadsheetApp.getActiveSpreadsheet().getRange("L3").clearContent(); 
  SpreadsheetApp.flush(); // Atualiza a planilha
  SpreadsheetApp.getActiveSpreadsheet().getRange("L3").setValue(importHTML_FuncaoA3);
  SpreadsheetApp.getActiveSpreadsheet().getRange("M3").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  SpreadsheetApp.getActiveSpreadsheet().getRange("L4").clearContent(); 
  SpreadsheetApp.flush(); // Atualiza a planilha
  SpreadsheetApp.getActiveSpreadsheet().getRange("L4").setValue(importHTML_FuncaoA4);
  SpreadsheetApp.getActiveSpreadsheet().getRange("M4").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 
  
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L5").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L5").setValue(importHTML_FuncaoA5);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M5").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L6").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L6").setValue(importHTML_FuncaoA6);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M6").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L7").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L7").setValue(importHTML_FuncaoA7);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M7").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L8").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L8").setValue(importHTML_FuncaoA8);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M8").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L9").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L9").setValue(importHTML_FuncaoA9);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M9").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L10").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L10").setValue(importHTML_FuncaoA10);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M10").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L11").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L11").setValue(importHTML_FuncaoA11);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M11").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L12").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L12").setValue(importHTML_FuncaoA12);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M12").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L13").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L13").setValue(importHTML_FuncaoA13);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M13").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L14").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L14").setValue(importHTML_FuncaoA14);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M14").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 

  //SpreadsheetApp.getActiveSpreadsheet().getRange("L15").clearContent(); 
  //SpreadsheetApp.flush(); // Atualiza a planilha
  //SpreadsheetApp.getActiveSpreadsheet().getRange("L15").setValue(importHTML_FuncaoA15);
  //SpreadsheetApp.getActiveSpreadsheet().getRange("M15").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 
 

 //SpreadsheetApp.getActiveSpreadsheet().getRange("L16").clearContent(); 
 //SpreadsheetApp.flush(); // Atualiza a planilha
 //SpreadsheetApp.getActiveSpreadsheet().getRange("L16").setValue(importHTML_FuncaoA16);
 //SpreadsheetApp.getActiveSpreadsheet().getRange("M16").setValue(Hora_Agora.toLocaleDateString() + " " + Hora_Agora.toLocaleTimeString()); 
 
 
}