"use strict"

let xhttp = new XMLHttpRequest();
let allImg = document.getElementById('imagesAll');


function loadCharacters() {
  xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj.results);
            for(let i = 0; i < 20; i ++){
              allImg.innerHTML += '<div class="outer"><img id="imgHov" src="'
              + obj.results[i].image + '"><div class="inner"><h4>Name: '
              + obj.results[i].name + '</h4><p>Status: '
              + obj.results[i].status + '</p><p>Species: '
              + obj.results[i].species + '</p><p>Gender:'
              + obj.results[i].gender + '</p><p>Location: '
              + obj.results[i].location.name + '</p></div></div>' ;
            }
       }
    };
  xhttp.open("GET", "https://rickandmortyapi.com/api/character", true);
  xhttp.send();
}

loadCharacters();
