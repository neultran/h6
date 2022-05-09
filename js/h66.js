$(document).ready(function () {
     const questions = [
       {
         q: "What's Ponyo's favorite food?",
         all: ["Ham", "Corn","Ramen","Eggs"],
         a: "Ham"
       },
       {
         q: "Kiki's Delivery Service was Studio Ghilbi's first hit. True or False?",
         all: ["True", "False"],
         a: "True"
       },
       {
         q: "What is the name of the little boy that saves Ponyo and befriends her?",
         all: ["Hisako", "Moro","Sosuke","Ashitaka"],
         a: "Sosuke"
       },
       {
         q: "What name did Yubabba give to Chihiro?",
         all: ["Haku","Bon","Lin","Sen"],
         a: "Sen"
       },
       {
         q: "What is the name of the female lead role in Howl's Moving Castle?",
         all: ["Sophie", "Kamaji","San","Lana"],
         a: "Sophie"
       },
       {
         q: "What's the name of this cat from Kiki's Delivery Service?",
         all: ["Felix","Jiji","Luna","Salem"],
         a: "Jiji"
       },
       {
         q: "What does No-Face give to people in the bath house?",
         all: ["Money","A Feast","Gold","Electricity"],
         a: "Gold"
       },
       {
         q: "What is Ponyo's birthname?",
         all: ["Lisa","Tomoura","Nozomi","Brunhilde"],
         a: "Brunhilde"
       },
       {
         q: "What is the name of the name of the demon that powers and moves Howl's Castle?",
         all: ["Pyro","Alumo","Calcifer","Coal"],
         a: "Calcifer"
       },
       {
         q: "What kind of spirit is Haku?",
         all: ["Kohaku Land Spirit","Kohaku Tree Spirit","Kohaku River Spirit","Kohaku Wind Spirit"],
         a: "Kohaku River Spirit"
       },
     ]
     const quiz = $('#quiz')
     let curr = 0
     let score = 0

     const makeCard = answer => {
       quiz.empty()
       if (curr !== 0 && answer === questions[curr - 1].a) score += 1
       if (curr >= questions.length) {
         quiz.append(`<h3>You scored ${score} / 4</h3><button id="again" class="btn btn-lg btn-block">Start Over</button>`)
         curr = 0
         score = 0
         return $('#again').click(function() {
           return makeCard(0)
         })
       }
       quiz.append(`<p>${questions[curr].q}</p>${questions[curr].all.reduce((a, v) => a.concat(`<button class="btn btn-lg btn-block">${v}</button>`), "")}`)
       curr += 1
       return $('button.btn').click(function() {
         return makeCard($(this).text())
       })
     }
     $('button.btn').click(makeCard)
   })
