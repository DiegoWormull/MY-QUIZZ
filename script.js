let questions = [
    {
      question: "Which movie made the most money ever ?",
      option1: "Minions",
      option2: "Fast and Furious 7",
      option3: "Star wars: Force awakens",
      option4: "Avatar",
      answer: "4",
    },
    {
      question: "Which male/female actor got the most awards in his/her carrer?",
      option1: "Meryl Streep",
      option2: "Jack NIcholson",
      option3: "Katharine Hepburn",
      option4: "Tom Hanks",
      answer: "3",
    },
    {
      question: "Who directed the movie INCEPTION ?",
      option1: "Christopher Nolan",
      option2: "Jerry Brookmayer",
      option3: "M.Night Samalan",
      option4: "Micheal Bay",
      answer: "1",
    },
    {
      question: "How many movies Quentin Tarantino plan to make in total in his career ?",
      option1: "12",
      option2: "10",
      option3: "15",
      option4: "8",
      answer: "2",
    },
    {
      question: "The Movie GANGS OF NEW-YORK was realise by",
      option1: "Jhon Carpenter",
      option2: "Pedro Almodovar",
      option3: "Stanley Cubrick",
      option4: "Martin Scorsese",
      answer: "4",
    },
    {
      question: "In Home Alone 2 witch future president of the U.S.A give the hero directions ?",
      option1: "Barack Obama",
      option2: "Donald Trump",
      option3: "George Bush",
      option4: "George W Bush(Junior)",
      answer: "2",
    },
    {
      question: "What job Indianna Jhones do?",
      option1: "Archeological professor",
      option2: "Painter",
      option3: "Cook",
      option4: "Social influencer",
      answer: "1",
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let totalQuestions = questions.length;
  
  let container = document.getElementById("quizzContainer");
  let questionElement = document.getElementById("question");
  let opt1 = document.getElementById("opt1");
  let opt2 = document.getElementById("opt2");
  let opt3 = document.getElementById("opt3");
  let opt4 = document.getElementById("opt4");
  let nextButton = document.getElementById("nextButton");
  let resultContainer = document.getElementById("result");
  
  function loadQuestions(questionsIndex) {
    let q = questions[questionsIndex];
    questionElement.textContent = q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
  }
  
  function loadNextQuestion() {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
      alert("Please select your answer");
      return;
    }
    let answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
      score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
      nextButton.textContent = "Finish";
    }
    if (currentQuestion == totalQuestions) {
      container.style.display = "none";
      resultContainer.style.display = "";
      resultContainer.textContent = "Your score : " + score;
      return;
    }
    loadQuestions(currentQuestion);
  }
  nextButton.onclick = loadNextQuestion;
  loadQuestions(currentQuestion);