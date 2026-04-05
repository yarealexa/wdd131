// 1. Data: The Array of 20 Objects you just got
const securityQuestions = [
    {
        id: 1,
        question: "A company purchased cyber insurance to address items listed on the risk register. Which of the following strategies does this represent?",
        choices: [
            "Accept",
            "Transfer",
            "Mitigate",
            "Avoid",
        ],
        answer: "Transfer"
    },
    {
        id: 2,
        question: "Which of the following is the most likely to be used to document risks, responsible parties, and thresholds?",
        choices: [
            "Risk Tolerance",
            "Risk Transfer",
            "Risk Register",
            "Risk Analysis",
        ],
        answer: "Risk Register"
    },
    {
        id: 3,
        question: "A systems administrator notices that the research and development department is not using the company VPN when accessing various company-related services and systems. Which of the following scenarios describes this activity",
        choices: [
            "Espionage",
            "Data Exfiltration",
            "Nation-state Attack",
            "Shadow IT",
        ],
        answer: "Shadown IT"
    },
    {
        id: 4,
        question: "Which of the following threat vectors is most commonly utilized by insider threat actors attempting data exfiltration",
        choices: [
            "Unidentified removable devices",
            "Default network device credentials",
            "Spear phishing emails",
            "Impersonation of business units through typosquatting",
        ],
        answer: "Unidentifed removable devices"
    },
    {
        id: 5,
        question: "Which of the following agreement types defines the time frame in which a vendor needs to respond?",
        choices: [
            "SOW",
            "SLA",
            "MOA",
            "MOU",
        ],
        answer: "SLA"
    },
    {
        id: 6,
        question: "Which of the following is a feature of a next-generation SIEM system?",
        choices: [
            "Virus signatures",
            "Automated response actions",
            "Security agent deployment",
            "Vulnerability scanning",
        ],
        answer: "Automated response actions"
    },
    {
        id: 7,
        question: "An attacker posing as the Chief Executive Officer calls an employee and instructs the employee to buy gift cards. Which of the following techniques is the attacker using?",
        choices: [
            "Smishing",
            "Disinformation",
            "Impersonating",
            "Whaling",
        ],
        answer: "Impersonating"
    },
    {
        id: 8,
        question: "After conducting a vulnerability scan, a systems administrator notices that one of the identified vulnerabilities is not present on the systems that were scanned. Which of the following describes this example?",
        choices: [
            "False Positive",
            "False Negative",
            "True Positive",
            "True Negative",
        ],
        answer: "False Positive"
    },
    {
        id: 9,
        question: "A recent penetration test identified that an attacker could flood the MAC address table of network switches. Which of the following would best mitigate this type of attack?",
        choices: [
            "Load Balancer",
            "Port Security",
            "IPS",
            "NGFW",
        ],
        answer: "Port Security"
    },
    {
        id: 10,
        question: "A user would like to install software and features that are not available with a smartphone's default software. Which of the following would allow the user to install unauthorized software and enable new features?",
        choices: [
            "SQLi",
            "Cross-site scripting",
            "jailbreaking",
            "Side loading",
        ],
        answer: "Jailbreaking"
    },
    {
        id: 11,
        question: "Which of the following phases of an incident response involves generating reports?",
        choices: [
            "Recovery",
            "Preparation",
            "Lesson learned",
            "Containment",
        ],
        answer: "Lesson learned"
    },
    {
        id: 12,
        question: "Which of the following methods would most likely be used to identify legacy systems?",
        choices: [
            "Bug bounty program",
            "Vulnerability scan",
            "Package monitoring",
            "Dynamic Analysis",
        ],
        answer: "Vulnerability scan"
    },
    {
        id: 13,
        question: "Which of the following considerations is the most important regarding cryptography used in an IoT device?",
        choices: [
            "Resource constraints",
            "Available bandwidth",
            "The user of block ciphers",
            "The compatibility of the TLS version",
        ],
        answer: "Resource constraints"
    },
    {
        id: 14,
        question: "A coffee shop owner wants to restrict internet access to only paying customers by prompting them for a receipt number. Which of the following is the best method to use given this requirement?",
        choices: [
            "WPA3",
            "Captive portal",
            "PSK",
            "IEEE 802.1X",
        ],
        answer: "Captive portal"
    },
    {
        id: 15,
        question: "While performing digital forensics, which of the following is considered the most volatile and should have the contents collected first?",
        choices: [
            "Hard drive",
            "RAM",
            "SSD",
            "Temporary files",
        ],
        answer: "RAM"
    },
];

//This is for the array above, keeps track of what is being done
//as the user plays
let currentQuestionIndex = 0;
let currentSelected = "";
let score = 0;

// These aren't the variables that the quiz asked about in the Kahoot these are elements
// but they are constant that never change because of your HTML
const questionDisplay = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".options");
const submitButton = document.querySelector(".submit-btn");
const feedbackDisplay = document.querySelector(".right-answer");


function loadQuestion() {
    optionsContainer.innerHTML = "";
    feedbackDisplay.innerText = ""; 
    currentSelected = "";
    submitButton.innerText = "Submit";

    const currentQ = securityQuestions[currentQuestionIndex]; ////
    questionDisplay.innerText = `${currentQuestionIndex + 1}. ${currentQ.question}`;/////

    currentQ.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("option-btn");
        btn.innerText = choice;
        btn.addEventListener("click", () => selectOption(btn, choice));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(element, text) {
    const allBtns = document.querySelectorAll(".option-btn");
    allBtns.forEach(b => b.classList.remove("selected"));
    element.classList.add("selected");
    currentSelected = text;
}


function handleAction() {
    if (submitButton.innerText === "Next") {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < securityQuestions.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
        return;
    }

    if (currentSelected === "") {
        feedbackDisplay.innerText = "Please select an answer!";
        return;
    }

    const correctAnswer = securityQuestions[currentQuestionIndex].answer;

    if (currentSelected === correctAnswer) {
        feedbackDisplay.innerText = "Correct!";
        feedbackDisplay.style.color = "green";
        score++;
    } else {
        feedbackDisplay.innerText = `Wrong. The answer was: ${correctAnswer}`;
    }

    submitButton.innerText = "Next";
}

function showFinalScore() {
    questionDisplay.innerText = "Quiz Complete!";
    optionsContainer.innerHTML = `<h3>Your Score: ${score} / ${securityQuestions.length}</h3>`;
    submitButton.style.display = "none";
}

// Event Listeners
submitButton.addEventListener("click", handleAction);

// Initialize
loadQuestion();