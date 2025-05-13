function Tableprint()
      {
        let a=parseInt(documentgetElementById("Tb1").value );
        let i;
        for(i=1;i<=10;i++){
          documentgetElementById("Para").innerHTML+='${i*a}';
        }
      }