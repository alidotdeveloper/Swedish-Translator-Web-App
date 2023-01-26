// Declaring Variables

var input= document.querySelector(".text_field");
var output = document.querySelector(".output-result");
var btn = document.querySelector("button");
var input_text = input.value;

// Api Configuraion

var url = "https://api.funtranslations.com/translate/chef.json";
function translateText(input_text){
    return url + "?" + "text=" + input_text; 
}
function errorhandle(error){
    console.log("Error : " + error);
}

// calling event Listener 
btn.addEventListener("click",function(){
    var input_text = input.value;
   
    fetch(translateText(input_text))
    .then(response=> response.json())
    .then(json=>output.innerHTML = json.contents.translated)
    .catch(errorhandle);
    
    
    
    
})

