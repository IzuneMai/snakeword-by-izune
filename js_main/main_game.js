var edge = 9;
var letters = [];

const gameplace = document.getElementById('gameplace');

function genArea(){

      for (var L= 0; L < letters.length; L++){
	var divbtn = document.createElement("DIV");        
        divbtn.className= "cell";
        divbtn.id= "C"+L;
        divbtn.style.zIndex = '10';
        divbtn.Letter = letters[L]
        divbtn.LetterCount=L;		
        divbtn.onclick = function (){ collectWord(this.Letter,this.LetterCount); this.className += "activeCell";}
	var t = document.createTextNode(letters[L]);       
    divbtn.appendChild(t)
	gameplace.appendChild(divbtn);               
     }
}

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }



function generator(){
    for (var i= 0; i< (edge*edge); i++){
      var letter = Math.floor(Math.random() * (letters- 0 + 1)) + 0 ;
      var Alphabetcount = 0
      for (var j =0; j<Rangs.length;j++){
        console.log(j)
        letters.push(generateRandomLetter())
        //   if (letter-Rangs[j]>=0){  letter = letter-Rangs[j]; Alphabetcount++;}
        //   else  {letters.push(Alphabet[Alphabetcount]); break; }
      }
    }
  genArea();
  }

generator();