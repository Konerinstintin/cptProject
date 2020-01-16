function play_single_sound() {
		document.getElementById('audiotag1').play();
	}

function play_single_sound() {
		document.getElementById('audiotag2').play();
	}

var score = 0
         var i = 1
         var ans = 1
        

         function submitAnswer(){
             y = document.getElementById("qans").value
             var yy=y.toUpperCase();
             x = document.getElementById("question").value
                          
           if (ans===1){
             y = document.getElementById("qans").value
             if(yy==="C"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                 score++
                 
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
               document.getElementById("qscore").innerHTML = score;

         }
         else if (ans===2){ 
         	y = document.getElementById("qans").value
             if(yy==="A"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
         else if (ans===3){ 
         	y = document.getElementById("qans").value
             if(yy==="C"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
         else if (ans===4){ 
         	y = document.getElementById("qans").value
             if(yy==="B"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
         else if (ans===5){ 
         	y = document.getElementById("qans").value
             if(yy==="D"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
         else if (ans===6){ 
         	y = document.getElementById("qans").value
             if(yy==="A"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
         else if (ans===7){ 
         	y = document.getElementById("qans").value
             if(yy==="B"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
         else if (ans===8){ 
         	y = document.getElementById("qans").value
             if(yy==="D"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
          else if (ans===9){ 
         	y = document.getElementById("qans").value
             if(yy==="C"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
              document.getElementById("qscore").innerHTML = score;
         }
         else if (ans===10){ 
         	y = document.getElementById("qans").value
             if(yy==="C"){
                 document.getElementById("question").value="You are right"
                 document.getElementById('audiotag2').play();
                  score++
             }
             else {
                 document.getElementById("question").value="You are wrong"
                 document.getElementById('audiotag1').play();
                 
             }
             document.view.qscore.value=score
             document.getElementById("qscore").innerHTML = score;
         }
             
         
         
         	ans++; 
         }

         document.getElementById("qscore").innerHTML = score;
                 
         
         function main(){ 
         if (i===1){ 
         	document.view.qnum.value=i;
            	document.view.question.value ="What year did World War 2 start? \na)1933 \nb)1914 \nc)1939 \nd)1945";
             document.view.qans.value=""
         }
         else if (i===2){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="What year did The Great War start? \na)1914 \nb)1918 \nc)1910 \nd)1965";
             document.view.qans.value=""
         }
         else if (i===3){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="Who killed Archduke Franz Ferdinand in 1914? \na)Franz Joseph \nb)Adolf Hitler \nc)Gavrilo Princip \nd)Kaiser Wilhelm II";
             document.view.qans.value=""
         }
         else if (i===4){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="What battle in The Great War introduced tanks for the first time ever? \na)Verdun \nb)Somme \nc)Passchendaele \nd)Ypres";
             document.view.qans.value=""
         }
         else if (i===5){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="Why was the 30s referred to as the dirty 30s? \na)World War 2 \nb)Large world tension \nc)Korean War \nd)Great Depression";
             document.view.qans.value=""
         }
         else if (i===6){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="What day was the armistice signed in 1918 \na)November 11th \nb)September 10th \nc)April 30th \nd)March 29th";
             document.view.qans.value=""
         }
         else if (i===7){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="What year was the United States formed? \na)1867 \nb)1776 \nc)1899 \nd)1527";
             document.view.qans.value=""
         }
         else if (i===8){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="What year was Canada formed? \na)1758 \nb)1860 \nc)1950 \nd)1867";
             document.view.qans.value=""
         }
         else if (i===9){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="What year did the Berlin Wall fall? \na)1967 \nb)1954 \nc)1989 \nd)1991";
             document.view.qans.value=""
         }
         else if (i===10){ 
         	document.view.qnum.value=i;	
         	document.view.question.value ="What cities were nuked in WW2? \na)Yokohama, Nagoya \nb)Tokyo,Osaka \nc)Hiroshima, Nagasaki \nd)Berlin, Tokyo";
             document.view.qans.value=""
         }
         
         
         	i++; 
         }

