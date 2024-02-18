

var i = 0;


var txt = `
Happy Birthday to you, Happiness 🤭🤭🤭.......



I wish you long life and prosperity,🥰🥰🥰


Success in all your endeavor,


Amen to all you silent prayers 🙏🙏🙏....

Best friend forever and ever............



Will you be mine forever?!!!!!👩‍❤️‍👨👩‍❤️‍👨👩‍❤️‍👨
`

var speed = 70;

function typewriter(){
  if( i < txt.length){
    document.querySelector("h1").innerHTML += txt.charAt(i);
    i++;
  }
  
}


setInterval(typewriter, speed);