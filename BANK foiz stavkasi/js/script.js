function hisobla() {
    
    var input1 = document.getElementById('inputs1').value;
    var input2 = document.getElementById('inputs2').value;
    var input3 = document.getElementById('inputs3').value;
    var input4 = document.getElementById('inputs4').value;
    
    document.getElementById('mytBody').innerHTML='';
    document.getElementById('malumot1').innerHTML = input1 + "so'm";
    document.getElementById('malumot2').innerHTML = input2 + "oy";
    document.getElementById('malumot3').innerHTML = input3 + "%";
    document.getElementById('malumot4').innerHTML = input4 + "%";

    document.getElementById('resul_pagee').style.opacity = "1";
    document.getElementById('resul_page_two').style.display = "block";

    var thead = document.getElementsByTagName('thead');
    var tr = document.getElementsByTagName('tr');
    var tbody = document.getElementsByTagName('tbody');
    var td = document.getElementsByTagName('td');
    var kreditbalansi = input1 - ((input1 / 100) * input3)
    var asosiyqarz = kreditbalansi / input2;
    

    var s = 0
    var d = 0
    var MoreS = 0
    var MoreD = 0
    var MoreF=0
    var MoreJ=asosiyqarz*input2;
  
    for (let i = 0; i < input2; i++) {
    
        MoreD += ((s / 12) / 100 * input4)

        MoreS += kreditbalansi - (i * asosiyqarz);
        MoreF+=d + asosiyqarz
       
        s = kreditbalansi - (i * asosiyqarz);

        var myTAbles = document.getElementById('mytBody');
        var row = myTAbles.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();

        // var myTAbles = document.getElementById('myTable');
        // var row = myTAbles.insertRow();
        // var cell1 = row.insertCell();
        // var cell2 = row.insertCell();
        // var cell3 = row.insertCell();
        // var cell4 = row.insertCell();
        // var cell5 = row.insertCell();
        
        d = ((s / 12) / 100 * input4)
        f = d + parseFloat(asosiyqarz)

        cell1.innerHTML = (i + 1);
        cell2.innerHTML = s.toFixed(2);
        cell3.innerHTML = asosiyqarz.toFixed(2);
        cell4.innerHTML = d.toFixed(2);
        cell5.innerHTML = f.toFixed(2);

    } 
  document.getElementById('td1').innerHTML=MoreS.toFixed(2)
  document.getElementById('td2').innerHTML=MoreJ.toFixed(2)
  document.getElementById('td3').innerHTML=MoreD.toFixed(2)
  document.getElementById('td4').innerHTML=MoreF.toFixed(2)
  window.scrollTo(0, 350)
  
}


