const data = {
  "questions" : [
    {
      "question": "What is the time complexity of binary search?",
      "options": ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      "answer": "O(log n)"
    },
    {
      "question": "Which keyword is used to define a constant in C++?",
      "options": ["final", "const", "constant", "static"],
      "answer": "const"
    },
    {
      "question": "Which of the following data structures uses LIFO?",
      "options": ["Queue", "Stack", "Heap", "Linked List"],
      "answer": "Stack"
    },
    {
      "question": "What is the default return type of main() in C++?",
      "options": ["void", "char", "int", "double"],
      "answer": "int"
    },
    {
      "question": "Which operator is used to allocate memory dynamically in C++?",
      "options": ["malloc", "alloc", "new", "allocate"],
      "answer": "new"
    },
    {
      "question": "Which of the following is not a valid loop in C++?",
      "options": ["for", "while", "do-while", "repeat-until"],
      "answer": "repeat-until"
    },
    {
      "question": "What does STL stand for in C++?",
      "options": ["System Template Library", "Standard Template Library", "Structured Type Library", "Systematic Type Library"],
      "answer": "Standard Template Library"
    },
    {
      "question": "Which of the following is an example of a preprocessor directive?",
      "options": ["#define", "for", "return", "struct"],
      "answer": "#define"
    },
    {
      "question": "Which feature of OOP allows a function to behave differently based on the object?",
      "options": ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
      "answer": "Polymorphism"
    },
    {
      "question": "Which of the following is NOT a type of constructor in C++?",
      "options": ["Default Constructor", "Parameterized Constructor", "Destructor", "Copy Constructor"],
      "answer": "Destructor"
    },
    {
      "question": "Which of these access specifiers allows a derived class to access the base class members?",
      "options": ["Private", "Protected", "Public", "None"],
      "answer": "Protected"
    },
    {
      "question": "Which function is used to find the length of a string in C++?",
      "options": ["strlen()", "length()", "size()", "count()"],
      "answer": "length()"
    },
    {
      "question": "Which operator is used for dereferencing a pointer?",
      "options": ["&", "*", "->", "::"],
      "answer": "*"
    },
    {
      "question": "Which of the following is not an exception-handling keyword in C++?",
      "options": ["try", "catch", "throw", "finally"],
      "answer": "finally"
    },
    {
      "question": "Which of the following concepts allows code reusability?",
      "options": ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
      "answer": "Inheritance"
    },
    {
      "question": "Which container in STL stores elements in key-value pairs?",
      "options": ["vector", "set", "map", "list"],
      "answer": "map"
    },
    {
      "question": "Which function releases dynamically allocated memory?",
      "options": ["delete", "free", "release", "clear"],
      "answer": "delete"
    },
    {
      "question": "What does the keyword 'virtual' indicate in C++?",
      "options": ["It defines a function as abstract", "It allows function overriding", "It makes a function non-inheritable", "It prevents multiple inheritance"],
      "answer": "It allows function overriding"
    },
    {
      "question": "Which of these sorting algorithms has the worst-case complexity of O(n^2)?",
      "options": ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
      "answer": "Bubble Sort"
    },
    {
      "question": "Which keyword is used to prevent a class from being inherited?",
      "options": ["private", "final", "sealed", "static"],
      "answer": "final"
    },
    {
      "question": "What does `std::cin` do in C++?",
      "options": ["Outputs data to the console", "Reads input from the user", "Reads files", "Executes system commands"],
      "answer": "Reads input from the user"
    },
    {
      "question": "Which data structure is best for implementing recursion?",
      "options": ["Queue", "Stack", "Linked List", "Heap"],
      "answer": "Stack"
    },
    {
      "question": "Which of the following is true about pointers?",
      "options": ["They can store addresses of variables", "They occupy more memory than an integer", "They cannot be assigned NULL", "They are faster than arrays"],
      "answer": "They can store addresses of variables"
    },
    {
      "question": "Which function is used to read an entire line in C++?",
      "options": ["getline()", "readline()", "input()", "scan()"],
      "answer": "getline()"
    },
    {
      "question": "What does the `this` pointer refer to?",
      "options": ["The previous object", "The next object", "The current object", "A new object"],
      "answer": "The current object"
    }
  ]
}
let QNumber = 0;
let score = 0;
const q = document.querySelector(".q");
const options = document.querySelectorAll(".options button");
const next = document.querySelector("#next");

// 🎯 Function to load question
function loadQuestion() {
  if (QNumber >= data.questions.length) {
    return showResults(); // Show results if quiz is finished
  }

  q.innerText = data.questions[QNumber].question;
  options.forEach((button, index) => {
    button.innerText = data.questions[QNumber].options[index];
    button.classList.remove("correct", "wrong", "disabled");
    button.disabled = false;
  });
}

// ✅ Function to check answer
function checkAns(index) {
  let selectedButton = options[index];
  let correctAnswer = data.questions[QNumber].answer;

  options.forEach(button => button.disabled = true); // Disable all buttons after selection

  if (selectedButton.innerText === correctAnswer) {
    selectedButton.classList.add("correct"); // Green for correct
    score++;
  } else {
    selectedButton.classList.add("wrong"); // Red for wrong
    options.forEach(button => {
      if (button.innerText === correctAnswer) {
        button.classList.add("correct"); // Highlight correct answer
      }
    });
  }

  // Move to next question after 1.5 seconds
  setTimeout(() => {
    QNumber++;
    loadQuestion();
  }, 1500);
}

// 🎉 Show final results
function showResults() {
  document.querySelector(".container").innerHTML = `
    <div class="question"><p class="q">Quiz Completed!</p></div>
    <h2>Your Score: ${score} / ${data.questions.length}</h2>
    <button onclick="restartQuiz()">Restart</button>
  `;
}

// 🔄 Restart quiz
function restartQuiz() {
  QNumber = 0;
  score = 0;
  document.location.reload();
}

// Start quiz
loadQuestion();