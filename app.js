
let button      = document.querySelector('#button')
let nome        = document.querySelector('#nome')
let gender      = document.querySelector('#gender')
let height      = document.querySelector('#height')
let hair_color  = document.querySelector('#hair_color')
let Abirth_year = document.querySelector('#birth_year')
let mass        = document.querySelector('#mass')
let image       = document.querySelector('#imagemYoda')
let button2     = document.querySelector('#button2')
let especie     = document.querySelector('#species') 
let origem      = document.querySelector('#homeworld')
let fundo       = document.querySelector('.body')



function getInfo(){
    let randomNumber = Math.floor((Math.random() * 88) + 1)
    //var rand = randomNumber.length;
    let apiUrl = 'https://swapi.dev/api/people/' +  randomNumber
   // let apiUrl = 'https://swapi.dev/api/planets/' +  randomNumber
     // let cont = randomNumber.length 
    axios.get(apiUrl).then(function(response){
        updateInfo(response.data)
        //updateInfo(response.homeworld)
        //updateInfo(response.species)
        //updateImage(response.data.name)
        console.log(randomNumber)
    })
   
}

function updateInfo(data){
    nome.innerText = data.name  
    gender.innerText     = 'SEXO: ' +  data.gender
    height.innerText     = 'ALTURA : ' + data.height
    hair_color.innerText = 'COR DE CABELO: ' + data.hair_color
    birth_year.innerText = 'IDADE: ' + data.birth_year
    mass.innerText       = 'PESO: ' + data.mass
    especie.innerText    = 'ESPÉCIE: ' + data.species
    origem.innerText     = 'ORIGEM: ' + data.homeworld 
     //(result.name)     //[0][data.name] //[1].name
    
       
    if(data.name == 'Yoda'){
        image.src = 'img/Yodar.png'
    }
    if(data.name == 'Luke Skywalker'){
        image.src = 'img/Luke-Skywalker.png'
    }
        if(data.name == "Darth Vader"){ //apiUrl == 'https://swapi.dev/api/people/4/'
        image.src = 'img/dart-vader.png'
    }
    if(data.name == "Grievous"){ //apiUrl == 'https://swapi.dev/api/people/4/'
        image.src = 'img/grievous.png'
    }
    if(data.name == "C-3PO"){ 
        image.src = 'img/C-3PO_SoH.png'
    }
    if(data.name == "IG-88"){ 
        image.src = 'img/IG-88.png'
    }
    if(data.name == "Dud Bolt"){ 
        image.src = 'img/Dud_Bolt.png'
    }
    if(data.name == "Palpatine"){ 
        image.src = 'img/palpatine-v2.png'
    }
    if(data.name == "Anakin Skywalker"){ 
        image.src = 'img/Anakin_Skywalker_v2.png'
    }
    if(data.name == "Dooku"){
        image.src = 'img/Count_Dooku.png'
    }
    if(data.name == "Darth Maul"){ 
        image.src = 'img/dart_maul.png'
    }
    if(data.name == "Shmi Skywalker"){ 
        image.src = 'img/Shmi_Skywalker.png'
    }
    if(data.name == "R2-D2"){ 
        image.src = 'img/R2-D2_Droid.png'
    }
    if(data.name == "Leia Organa"){ 
        image.src = 'img/Leia-Organa-Star-Wars-PNG.png'
    }
    if(data.name == "Boba Fett"){ 
        image.src = 'img/Boba-Fett.png'
    }
    if(data.name == "Qui-Gon Jinn"){ 
        image.src = 'img/Quigon.png'
    }
    if(data.name == "Obi-Wan Kenobi"){ 
        image.src = 'img/obi-wan-Kenobi.png'
    }
    if(data.name == "Padmé Amidala"){ 
        image.src = 'img/Padmeamidala.png'
    }
    if(data.name == "Lando Calrissian"){ 
        image.src = 'img/lando.png'
    }
    if(data.name == "Mas Amedda"){ 
        image.src = 'img/mas-amedda.png'
    }
    if(data.name == "Jar Jar Binks"){ 
        image.src = 'img/jar_jar_binks.png'
    }
    if(data.name == "Mace Windu"){ 
        image.src = 'img/Mace_Windu.png'
    }
    if(data.name == "Chewbacca"){ 
        image.src = 'img/Chewbacca.png'
    }
    if(data.name == "Han Solo"){ 
        image.src = 'img/Han-Solo.png'
    }
    if(data.name == "Jango Fett"){ 
        image.src = 'img/Jango-Fett.png'
    }
    if(data.name == "R4-P17"){ 
        image.src = 'img/R4-P17-red.png'
    }
    //if(randomNumber === [1]){
     //   especie.innerText = 'ESPÉCIE: Humano' 
    // }
   getPlanet() 
  
   
}
function updateImage(){  
 if(data.name == 'Luke Skywalker'){
 image.src = 'img/luke-skywalker-v1.png'
}
    if(data.name == "Darth Vader"){ 
    image.src = 'img/dart-vader.png'
}
}
function trocaImg(){
    //$('.body').css({'background-image':'url(img/star_war_intro.jpg)'});
    //body.src = 'img/star_war_intro.jpg'
    document.body.style.backgroundImage = "URL('img/dart_back.png')";    
}
function getPlanet(){
    let randomNum = Math.floor((Math.random() * 88) + 1)
    //let apiUrl = 'https://swapi.dev/api/people/' +  randomNumber
    //getInfo()
    
    let apiUrl = 'https://swapi.dev/api/planets/' + randomNum// + cont
        axios.get(apiUrl).then(function(response){
        updateInfor(response.dados)
       // data.homeworld     =    dados.name
       console.log(randomNum);
    })
   
}
function updateInfor(dados){
  //if(getInfo().homeworld == getPlanet().homeworld){
          // origem.innerText     = 'ORIGEM: ' + dados.name 
      
} //}
button.addEventListener('click',getInfo,updateImage,getPlanet)
//document.getElementById("button").addEventListener("click", getInfo)

