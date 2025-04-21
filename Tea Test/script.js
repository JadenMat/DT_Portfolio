const form = document.getElementById('quizForm');

const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event)=> {
//stops page from refreshing
event.preventDefault();

console.log("button submitted")

let englishbreakfastCount = 0;

let senchaCount = 0;

let jasmineCount = 0;

let chamomilleCount = 0;

const questionNames = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];

// const question = document.querySelector('input[name="q1"]')

for(let i=0; i < questionNames.length; i++){

    const selected = document.querySelector(`input[name="${questionNames[i]}"]:checked`)

if(selected){

    if(selected.value == 'English Breakfast'){
        englishbreakfastCount ++
    }

    if(selected.value == 'Sencha'){
        senchaCount ++
    }

    if(selected.value == 'Jasmine'){
        jasmineCount ++
    }

    if(selected.value == 'Chamomille'){
        chamomilleCount ++
    }
}

}


let resultText = "";
let results = [
    {
      text: "Ahhh, so you're an English Breakfast sorta weirdo. Nah I'm playing, just trynna get some caffeine, I get it!☕️",
      image: "EnglishBreakfast.jpg"
    },
    {
      text: "You are a sencha tea person! (Have you had a Gyokuro?)🍵",
      image: "Sencha.jpg"
    },
    {
      text: "You are a Jasmine person! I get it, trust me.🫖",
      image: "Jasmine.jpg"
    },
    {
      text: "You are no tea drinker...IMPOSTER! Nah, you're chamomile, cool.🌿",
      image: "Chamomile.jpeg"
    }
  ];
  

let resultImage = "";
if(englishbreakfastCount > senchaCount && englishbreakfastCount > jasmineCount && englishbreakfastCount > chamomilleCount){
    resultText = results[0]
    resultImage = results[0].image;
}

else if(senchaCount > englishbreakfastCount && senchaCount > jasmineCount && senchaCount > chamomilleCount){
   resultText = results[1]
   resultImage = results[1].image;
}

else if(jasmineCount > englishbreakfastCount && jasmineCount > senchaCount && jasmineCount > chamomilleCount){
    resultText = results[2]
    resultImage = results[2].image;
}

else if(chamomilleCount > englishbreakfastCount && chamomilleCount > jasmineCount && chamomilleCount > senchaCount){
    resultText = results[3]
    resultImage = results[3].image;
}

else if(englishbreakfastCount == senchaCount && englishbreakfastCount == jasmineCount && englishbreakfastCount == chamomilleCount){
    resultText = {
        text: "You seem to be a bit all over the place, please try again!",
        image: "default.jpg" // Replace this with an actual image or handle it gracefully on the results page
    };
}


console.log(`English Breakfast: ${englishbreakfastCount}`)
console.log(`Sencha: ${senchaCount}`)
console.log(`Jasmine: ${jasmineCount}`)
console.log(`Chamomille: ${chamomilleCount}`)


window.location.href = `results/results.html?text=${encodeURIComponent(resultText.text)}&image=${encodeURIComponent(resultText.image)}`;
})