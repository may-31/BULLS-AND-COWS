var inp,but,greet,Bulls,Cows,Cw,Pw,y=70
var Rand
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  inp=createInput().position(200,200);
  but=createButton("Check").position(200,250);
  greet=createElement("h1").html("Words").position(600,30);
  Bulls=createElement("h1").html("Bulls").position(800,30);
  Bulls=createElement("h1").html("Cows").position(1000,30);
  Rand=Math.round(random(0,s.length-1))
  Cw=s[Rand]
  console.log(Cw)
  but.mousePressed(Result)
}

function draw() {
  background(255,255,255);  
 
}
function Result(){
 var bn=0,cn=0
  if (inp.value().length!=4){
    alert("PLEASE ENTER 4 WORDS ONLY")
  }
  Pw=inp.value().toLowerCase()
  console.log(Pw)
  // Condition for Bulls
  if(Cw.charAt(0)===Pw.charAt(0)){
    bn=bn+1
  }
 
  if(Cw.charAt(1)===Pw.charAt(1)){
    bn=bn+1 
  }

  if(Cw.charAt(2)===Pw.charAt(2)){
    bn=bn+1 
  }
   
  if(Cw.charAt(3)===Pw.charAt(3)){
    bn=bn+1 
  }
  
  // Condition for Cows
  if(Cw.charAt(0)===Pw.charAt(1)||Cw.charAt(0)===Pw.charAt(2)||Cw.charAt(0)===Pw.charAt(3)){
    cn=cn+1
  }
   
  if(Cw.charAt(1)===Pw.charAt(0)||Cw.charAt(1)===Pw.charAt(2)||Cw.charAt(1)===Pw.charAt(3)){
    cn=cn+1
  }

  if(Cw.charAt(2)===Pw.charAt(1)||Cw.charAt(2)===Pw.charAt(0)||Cw.charAt(2)===Pw.charAt(3)){
    cn=cn+1
  }

  if(Cw.charAt(3)===Pw.charAt(1)||Cw.charAt(3)===Pw.charAt(2)||Cw.charAt(3)===Pw.charAt(0)){
    cn=cn+1
  }

  if(inp.value().length===4){
    for (var i = 0; i < s.length;i++) {
      if(s[i].includes(Pw)){
     break
      }
    }
    if(i<s.length){
    var wr=createElement("h2").html(Pw).position(600,y)
    var br=createElement("h2").html(bn).position(800,y)
    var cr=createElement("h2").html(cn).position(1000,y)
     y=y+50
     }
     else{
      alert("Enter a valid Word")
     }
  }
}
