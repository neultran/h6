var trivia =
{
  "GhilbiQuiz": [
    {
      "question": "What's Ponyo's favorite food?",
      "image": "img/ponyo.jpg",
      "correct": 1,
      "options": [
        {
          "text":"Ham",
          "value":1
        },
        {
          "text":"Corn",
          "value":0
        },
        {
          "text":"Ramen",
          "value":0
        },
        {
          "text":"Eggs",
          "value":0
        }
      ]
    },
    {
      "question": "What is the name of the little boy that saves Ponyo and befriends her?",
      "image": "img/soske.jpg",
      "correct": 2,
      "options": [
        {
          "text":"Hisako",
          "value":0
        },
        {
          "text":"Moro",
          "value":0
        },
        {
          "text":"Sosuke",
          "value":1
        },
        {
          "text":"Ashitaka",
          "value":0
        }
      ]
    },
    {
      "question": "Kiki's Delivery Service was Studio Ghilbi's first hit. True or False?",
      "image": "img/kiki.png",
      "correct": 3,
      "options": [
        {
          "text":"True",
          "value":1
        },
        {
          "text":"False",
          "value":0
        }
      ]
    },
    {
      "question": "What name did Yubabba give to Chihiro?",
      "image": "img/chihiro.jpg",
      "correct": 4,
      "options": [
        {
          "text":"Haku",
          "value":0
        },
        {
          "text":"Bon",
          "value":0
        },
        {
          "text":"Lin",
          "value":0
        },
        {
          "text":"Sen",
          "value":1
        }
      ]
    },
    {
      "question": "What is the name of this character from Howl's Moving Castle?",
      "image": "img/sophie.jpg",
      "correct": 5,
      "options": [
        {
          "text":"Sophie",
          "value":1
        },
        {
          "text":"Kamaji",
          "value":0
        },
        {
          "text":"San",
          "value":0
        },
        {
          "text":"Lana",
          "value":0
        }
      ]
    },
    {
      "question": "What's the name of this cat from Kiki's Delivery Service?",
      "image": "img/jiji.jpg",
      "correct": 6,
      "options": [
        {
          "text":"Felix",
          "value":0
        },
        {
          "text":"Jiji",
          "value":1
        },
        {
          "text":"Luna",
          "value":0
        },
        {
          "text":"Salem",
          "value":0
        }
      ]
    },
    {
      "question": "Who is the antagonist version of this character?",
      "image": "img/spirited.jpg",
      "correct":7 ,
      "options": [
        {
          "text":"Zeniba",
          "value":0
        },
        {
          "text":"Yubabba",
          "value":1
        }
      ]
    },
    {
      "question": "What is Ponyo's birthname?",
      "image": "img/brunhilde.jpg",
      "correct": 8,
      "options": [
        {
          "text":"Lisa",
          "value":0
        },
        {
          "text":"Tomoura",
          "value":0
        },
        {
          "text":"Nozomi",
          "value":0
        },
        {
          "text":"Brunhilde",
          "value":1
        }
      ]
    },
    {
      "question": "What is the name of this character from Howl's Moving Castle?",
      "image": "img/calcifer.jpg",
      "correct": 9,
      "options": [
        {
          "text":"Pyro",
          "value":0
        },
        {
          "text":"Alumo",
          "value":0
        },
        {
          "text":"Calcifer",
          "value":1
        },
        {
          "text":"Coal",
          "value":0
        }
      ]
    },
    {
      "question": "What kind of spirit is Haku?",
      "image": "img/haku.jpg",
      "correct":10 ,
      "options": [
        {
          "text":"Kohaku Land Spirit",
          "value":0
        },
        {
          "text":"Kohaku Tree Spirit",
          "value":0
        },
        {
          "text":"Kohaku River Spirit",
          "value":1
        },
        {
          "text":"Kohaku Wind Spirit",
          "value":0
        }
      ]
    }
  ]
};

var score = 0;
var currentQuestion = 0;

function continueQuiz(currentQuestion, addToScore)
{
    score += parseInt(addToScore);
    if (currentQuestion >= data.MusicQuiz.length)
    {
        displayResults();
        return;
    }

    imgString = "";
    img = data.MusicQuiz[currentQuestion].image;
    if (img !== "")
    {
        if (img.substring(img.length - 3, img.length) === "mp3")
        {
            imgString = "<div class=\"text-center\"><audio controls><source src=\"img/" + img 
                    + "\" type=\"audio/mpeg\">Sorry, your browser doesn't support MP3 files.</audio></div>";
        }
        else
        {
            imgString = "<div class=\"text-center\"><img class=\"img-fluid\" src=\"img/"
                    + img + "\" style=\"max-height: 240px;\"></div>";
        }
    }

    htmlText = "<form><h4 class=\"question-text text-center\">" + data.MusicQuiz[currentQuestion].question + "</h4>";
    if (data.MusicQuiz[currentQuestion].instructions !== "")
    {
        htmlText += "<h5 class=\"text-center\">" + data.MusicQuiz[currentQuestion].instructions + "</h5>";
    }
    htmlText += imgString + "<div class=\"options\">";

    for (i = 0; i < data.MusicQuiz[currentQuestion].options.length; i++)
    {
        htmlText += "<div class=\"form-check\"><input type=\"radio\" class=\"form-check-input\" name=\"group\" id=\"" + currentQuestion + "-" + i + "\" value=\""
                + data.MusicQuiz[currentQuestion].options[i].value + "\" onchange=\"continueQuiz(" + (currentQuestion + 1) + ", this.value)\">"
                + "<label class=\"form-check-label\" for=\"" + currentQuestion + "-" + i + "\">" + data.MusicQuiz[currentQuestion].options[i].text
                + "</label></div>";
    }
    htmlText += "</div></form>"

    $("#main").html(htmlText);
}

function displayResults()
{
    htmlText = "<h3 class=\"results\">Failproof Quiz 2.0 Results:</h3>";
    if (score >= 128)
    {
        htmlText += "<h4 class=\"results\">Wow! Looks like you did a great job! Your final score was: <strong>" + score + "</strong>";
    }
    else
    {
        htmlText += "<h4 class=\"results\">Darn! Looks like you didn't do so hot. Your final score was: <strong>" + score + "</strong>";
    }

    bit = 1;
    for (i = 0; i < data.MusicQuiz.length; i++)
    {
        htmlText += "<h5 class=\"results\">Question " + (i + 1) + ": <em>" + data.MusicQuiz[i].question
                + "</em></h5><ul class=\"browser-default\">";
        if ((score & bit) === bit)
        {
            htmlText += "<li>Great Job! You <strong>correctly</strong> answered: "
                    + data.MusicQuiz[i].options[data.MusicQuiz[i].correct].text + "</li>";
        }
        else
        {
            htmlText += "<li>Sorry, you answered <strong>incorrectly</strong>!</li>"
                    + "<li>The correct answer was: " + data.MusicQuiz[i].options[data.MusicQuiz[i].correct].text + "</li>";
        }
        htmlText += "<li><em>Did you know...</em> " + data.MusicQuiz[i].facts + "</li></ul>";
        bit *= 2;
    }
    htmlText += "<h4 class=\"results\">Thanks for Playing!</h4>";

    $("#main").html(htmlText);
}
