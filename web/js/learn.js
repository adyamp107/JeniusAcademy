const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const learnButton = document.querySelectorAll('.learn-button');
const learnFrame = document.querySelector('.learn-frame');

function checkNavbar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop >= 100) {
        navbar.style.backgroundColor = 'var(--color-4)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}

checkNavbar();
window.addEventListener('scroll', () => {
    checkNavbar();
});

hamburgerButton.addEventListener('click', (event) => {
    hamburgerMenu.style.top = '0px';
    event.stopPropagation()
    window.addEventListener('click', () => {
        hamburgerMenu.style.top = '-300px';
    });
});

window.addEventListener('resize', () => {
    hamburgerMenu.style.top = '-300px';
});

// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }
// const data = getQueryParam("data");
// if(data != null) {
//     chooseMaterialLearn(data);
//     learnButton.forEach((element) => {
//         element.classList = element.classList[0] + ' learn-button';
//     });
//     document.querySelector(`.${data}`).classList += ' selected-learn-button';
// }

chooseMaterialLearn('learn-1');

function chooseMaterialLearn(name) {
    switch(name) {
        case 'learn-1':
            learnFrame.innerHTML = `
<div class="learning-path">
    <div>
        <h3 class="path-1">1</h3>
        Video
    </div>
    <img src="../assets/arrow.png" alt="">
    <div>
        <h3 class="path-2">2</h3>
        Exercise
    </div>
    <img src="../assets/arrow.png" alt="">
    <div>
        <h3  class="path-3">3</h3>
        Forum
    </div>
</div>
<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jVvvUiExjes?si=oJeVbMfR0oNSWXrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="teacher">
    <div class="teacher-picture">
        <img src="../assets/teacher1.jpg" alt="">
    </div>
    <div class="teacher-description">
        <h3>Mr. John Anderson</h3>
        <br>
        <p>
            john.anderson@jeniusacademy.com
        </p>
        <br>
        Mr. John Anderson holds a degree in Elementary Education and has over 10 years of experience teaching young children. He is dedicated to making math engaging and accessible for all students.
    </div>
</div>
<div class="learning-objectives">
    <h3>Learning Objectives</h3>
    <br>
    <ul>
        <li>Understand basic addition and subtraction of whole numbers.</li>
        <li>Learn to solve simple word problems involving addition and subtraction.</li>
        <li>the ability to check answers for accuracy.</li>
    </ul>
</div>
<div class="course-materials">
    <h3>Course Material</h3>
    <br>
    <ul>
        <li>Addition of Whole Numbers</li>
        <li>Subtraction of Whole Numbers</li>
        <li>Application in Word Problems</li>
    </ul>
</div>
<div class="material-exercises">
    <h3>Material Exercises</h3>
    <br>
    <ol>
        <li>25 + 15 = <input type="number" name="" id="answer-1">&nbsp;<span id="check-answer-1"></span></li>
        <li>34 + 9 = <input type="number" name="" id="answer-2">&nbsp;<span id="check-answer-2"></span></li>
        <li>20 - 5 = <input type="number" name="" id="answer-3">&nbsp;<span id="check-answer-3"></span></li>
        <li>50 - 18 = <input type="number" name="" id="answer-4">&nbsp;<span id="check-answer-4"></span></li>
    </ol>
    <br>
    <div class="check-exercises button-1">Check</div>
</div>
<div class="discussion-forum">
    <h3>Discussion Forum</h3>
    <div class="chat-room">
        <div class="chat chat-1">
            <div>A</div>
            <p>How do you approach solving word problems involving addition and subtraction?</p>
        </div>
        <div class="chat chat-2">
            <div>R</div>
            <p>I first identify the key numbers and what the problem is asking me to do. Then, I write down the equation and solve it step-by-step. Checking my work at the end helps to ensure accuracy.</p>
        </div>
        <div class="chat chat-3">
            <div>U</div>
            <p>What strategies do you use to check your answers?</p>
        </div>
        <div class="chat chat-4">
            <div>J</div>
            <p>I re-calculate the problem using a different method to see if I get the same result, and I also review the steps I took to make sure there are no mistakes.</p>
        </div>
    </div>
    <hr>
    <div class="user-textbox chat-5">
        <div>E</div>
        <textarea name="" id="" class="user-chat"></textarea>
        <div class="submit-user-chat button-1">Submit</div>
    </div>
</div>            
            `;
            break;
        case 'learn-2':
            learnFrame.innerHTML = `
<div class="learning-path">
    <div>
        <h3 class="path-1">1</h3>
        Video
    </div>
    <img src="../assets/arrow.png" alt="">
    <div>
        <h3 class="path-2">2</h3>
        Exercise
    </div>
    <img src="../assets/arrow.png" alt="">
    <div>
        <h3  class="path-3">3</h3>
        Forum
    </div>
</div>
<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/i8XwW41P4Xg?si=REclW3hXT2SxD5j-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="teacher">
    <div class="teacher-picture">
        <img src="../assets/teacher2.jpg" alt="">
    </div>
    <div class="teacher-description">
        <h3>Ms. Emily Johnson</h3>
        <br>
        <p>
            emily.johnson@jeniusacademy.com
        </p>
        <br>
        Ms. Emily Johnson holds a degree in English Language Education and has over 8 years of experience teaching middle school students. She is committed to making English grammar clear and interesting for her students.    
    </div>
</div>
<div class="learning-objectives">
    <h3>Learning Objectives</h3>
    <br>
    <ul>
        <li>Understand the structure and usage of the present perfect tense.</li>
        <li>Learn to differentiate between the present perfect and other tenses.</li>
        <li>Apply the present perfect tense in various contexts.</li>
    </ul>
</div>
<div class="course-materials">
    <h3>Course Material</h3>
    <br>
    <ul>
        <li>Introduction to Present Perfect Tense</li>
        <li>Present Perfect vs. Simple Past</li>
        <li>Practical Usage</li>
    </ul>
</div>
<div class="material-exercises">
    <h3>Material Exercises</h3>
    <br>
    <ol>
        <li>She <input type="text" name="" id="answer-1"> (to visit) Paris three times.&nbsp;<span id="check-answer-1"></span></li>
        <li>They <input type="text" name="" id="answer-2"> (to finish) their homework already.&nbsp;<span id="check-answer-2"></span></li>
        <li>I saw that movie last year. (use present perfect) <input type="text" name="" id="answer-3">&nbsp;<span id="check-answer-3"></span></li>
        <li>She finished her book. (use present perfect) <input type="text" name="" id="answer-4">&nbsp;<span id="check-answer-4"></span></li>
    </ol>
    <br>
    <div class="check-exercises button-1">Check</div>
</div>
<div class="discussion-forum">
    <h3>Discussion Forum</h3>
    <div class="chat-room">
        <div class="chat chat-3">
            <div>H</div>
            <p>How do you know when to use 'have' or 'has' in the present perfect tense?</p>
        </div>
        <div class="chat chat-1">
            <div>A</div>
            <p>Use 'have' with I, you, we, and they, and use 'has' with he, she, and it.</p>
        </div>
        <div class="chat chat-4">
            <div>G</div>
            <p>Can you give an example of a sentence where the present perfect tense is used correctly?</p>
        </div>
        <div class="chat chat-2">
            <div>I</div>
            <p>Sure! 'She has finished her homework already,' is a correct example.</p>
        </div>
    </div>
    <hr>
    <div class="user-textbox chat-5">
        <div>E</div>
        <textarea name="" id="" class="user-chat"></textarea>
        <div class="submit-user-chat button-1">Submit</div>
    </div>
</div>            
            `;            
            break;
        case 'learn-3':
            learnFrame.innerHTML = `
<div class="learning-path">
    <div>
        <h3 class="path-1">1</h3>
        Video
    </div>
    <img src="../assets/arrow.png" alt="">
    <div>
        <h3 class="path-2">2</h3>
        Exercise
    </div>
    <img src="../assets/arrow.png" alt="">
    <div>
        <h3  class="path-3">3</h3>
        Forum
    </div>
</div>
<div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FM2MpMbV0rw?si=MlMtMMytqy1MZnWZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="teacher">
    <div class="teacher-picture">
        <img src="../assets/teacher3.jpg" alt="">
    </div>
    <div class="teacher-description">
        <h3>Mr. Robert Collins</h3>
        <br>
        <p>
            robert.collins@jeniusacademy.com
        </p>
        <br>
        Mr. Robert Collins holds a Master's degree in Chemistry Education and has over 12 years of experience teaching high school chemistry. He is passionate about making chemistry accessible and engaging for all students.        
    </div>
</div>
<div class="learning-objectives">
    <h3>Learning Objectives</h3>
    <br>
    <ul>
        <li>Understand the properties of acids and bases.</li>
        <li>Learn to identify common acids and bases and their uses.</li>
        <li>Develop the ability to perdiv pH calculations and understand the pH scale.</li>
        <li>Conduct experiments to observe the behavior of acids and bases.</li>
    </ul>
</div>
<div class="course-materials">
    <h3>Course Material</h3>
    <br>
    <ul>
        <li>Introduction to Acids and Bases</li>
        <li>The pH Scale</li>
        <li>Common Acids and Bases</li>
        <li>Acid-Base Reactions</li>
    </ul>
</div>
<div class="material-exercises">
    <h3>Material Exercises</h3>
    <br>
    <ol>
        <li>The chemical divula for hydrochloric acid is <input type="text" name="" id="answer-1">&nbsp;<span id="check-answer-1"></span></li>
        <li>A substance that turns red litmus paper blue is a <input type="text" name="" id="answer-2">&nbsp;<span id="check-answer-2"></span></li>
        <li>The pH of a neutral solution is <input type="text" name="" id="answer-3">&nbsp;<span id="check-answer-3"></span></li>
        <li>The process of mixing an acid with a base to form water and a salt is called <input type="text" name="" id="answer-4">&nbsp;<span id="check-answer-4"></span></li>
    </ol>
    <br>
    <div class="check-exercises button-1">Check</div>
</div>
<div class="discussion-forum">
    <h3>Discussion Forum</h3>
    <div class="chat-room">
        <div class="chat chat-2">
            <div>O</div>
            <p>Can you give an example of an acid or base you use in your daily life and describe its use?</p>
        </div>
        <div class="chat chat-4">
            <div>W</div>
            <p>Vinegar, which contains acetic acid, is used in cooking and as a cleaning agent.</p>
        </div>
        <div class="chat chat-1">
            <div>C</div>
            <p>How can you determine if a substance is an acid or a base without using a pH meter?</p>
        </div>
        <div class="chat chat-3">
            <div>S</div>
            <p>You can use indicators like litmus paper. If the paper turns red, it's an acid; if it turns blue, it's a base.</p>
        </div>
    </div>
    <hr>
    <div class="user-textbox chat-5">
        <div>E</div>
        <textarea name="" id="" class="user-chat"></textarea>
        <div class="submit-user-chat button-1">Submit</div>
    </div>
</div>            
            `;            
            break;            
        case 'learn-4':
            window.location.href = './subscription.html';
            break;            
    }

    const userChat = document.querySelector('.user-chat');
    const submitUserChat = document.querySelector('.submit-user-chat');
    const chatRoom = document.querySelector('.chat-room');

    const answer1 = document.getElementById('answer-1');
    const answer2 = document.getElementById('answer-2');
    const answer3 = document.getElementById('answer-3');
    const answer4 = document.getElementById('answer-4');

    const checkAnswer1 = document.getElementById('check-answer-1');
    const checkAnswer2 = document.getElementById('check-answer-2');
    const checkAnswer3 = document.getElementById('check-answer-3');
    const checkAnswer4 = document.getElementById('check-answer-4');

    const checkExercises = document.querySelector('.check-exercises');
    
    submitUserChat.addEventListener('click', () => {
        if (userChat.value.trim() != '') {
            let textareaValue = userChat.value;
            let formattedValue = '';
            for (var i = 0; i < textareaValue.length; i++) {
                if (textareaValue[i] === ' ') {
                    formattedValue += '&nbsp;';
                } else if (textareaValue[i] === '\n') {
                    formattedValue += '<br>';
                } else {
                    formattedValue += textareaValue[i];
                }
            }
            chatRoom.innerHTML += `
                <div class="chat chat-5 new-chat">
                    <p>${formattedValue}</p>
                    <div>E</div>
                </div>
            `;
        }
        userChat.value = '';
    });

    checkExercises.addEventListener('click', () => {
        switch(name) {
            case 'learn-1':
                checkAnswer1.className = '';
                if (answer1.value.trim() === '') {
                    checkAnswer1.classList.add('empty-answer');
                    checkAnswer1.innerHTML = 'Please fill in the answer';
                } else if (answer1.value.trim() === '40') {
                    checkAnswer1.classList.add('true-answer');
                    checkAnswer1.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer1.classList.add('false-answer');
                    checkAnswer1.innerHTML = 'Your answer is wrong, the correct one is 40';
                }
                checkAnswer2.className = '';
                if (answer2.value.trim() === '') {
                    checkAnswer2.classList.add('empty-answer');
                    checkAnswer2.innerHTML = 'Please fill in the answer';
                } else if (answer2.value.trim() === '43') {
                    checkAnswer2.classList.add('true-answer');
                    checkAnswer2.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer2.classList.add('false-answer');
                    checkAnswer2.innerHTML = 'Your answer is wrong, the correct one is 43';
                }
                checkAnswer3.className = '';
                if (answer3.value.trim() === '') {
                    checkAnswer3.classList.add('empty-answer');
                    checkAnswer3.innerHTML = 'Please fill in the answer';
                } else if (answer3.value.trim() === '15') {
                    checkAnswer3.classList.add('true-answer');
                    checkAnswer3.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer3.classList.add('false-answer');
                    checkAnswer3.innerHTML = 'Your answer is wrong, the correct one is 15';
                }
                checkAnswer4.className = '';
                if (answer4.value.trim() === '') {
                    checkAnswer4.classList.add('empty-answer');
                    checkAnswer4.innerHTML = 'Please fill in the answer';
                } else if (answer4.value.trim() === '32') {
                    checkAnswer4.classList.add('true-answer');
                    checkAnswer4.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer4.classList.add('false-answer');
                    checkAnswer4.innerHTML = 'Your answer is wrong, the correct one is 32';
                }
                break;
            case 'learn-2':
                checkAnswer1.className = '';
                if (answer1.value.trim() === '') {
                    checkAnswer1.classList.add('empty-answer');
                    checkAnswer1.innerHTML = 'Please fill in the answer';
                } else if (answer1.value.trim() === 'has visited') {
                    checkAnswer1.classList.add('true-answer');
                    checkAnswer1.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer1.classList.add('false-answer');
                    checkAnswer1.innerHTML = 'Your answer is wrong, the correct one is "has visited"';
                }
                checkAnswer2.className = '';
                if (answer2.value.trim() === '') {
                    checkAnswer2.classList.add('empty-answer');
                    checkAnswer2.innerHTML = 'Please fill in the answer';
                } else if (answer2.value.trim() === 'have finished') {
                    checkAnswer2.classList.add('true-answer');
                    checkAnswer2.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer2.classList.add('false-answer');
                    checkAnswer2.innerHTML = 'Your answer is wrong, the correct one is "have finished"';
                }
                checkAnswer3.className = '';
                if (answer3.value.trim() === '') {
                    checkAnswer3.classList.add('empty-answer');
                    checkAnswer3.innerHTML = 'Please fill in the answer';
                } else if (answer3.value.trim() === 'I have seen that movie.') {
                    checkAnswer3.classList.add('true-answer');
                    checkAnswer3.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer3.classList.add('false-answer');
                    checkAnswer3.innerHTML = 'Your answer is wrong, the correct one is "I have seen that movie."';
                }
                checkAnswer4.className = '';
                if (answer4.value.trim() === '') {
                    checkAnswer4.classList.add('empty-answer');
                    checkAnswer4.innerHTML = 'Please fill in the answer';
                } else if (answer4.value.trim() === 'She has finished her book.') {
                    checkAnswer4.classList.add('true-answer');
                    checkAnswer4.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer4.classList.add('false-answer');
                    checkAnswer4.innerHTML = 'Your answer is wrong, the correct one is "She has finished her book."';
                }
                break;
            case 'learn-3':
                checkAnswer1.className = '';
                if (answer1.value.trim() === '') {
                    checkAnswer1.classList.add('empty-answer');
                    checkAnswer1.innerHTML = 'Please fill in the answer';
                } else if (answer1.value.trim() === 'HCl') {
                    checkAnswer1.classList.add('true-answer');
                    checkAnswer1.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer1.classList.add('false-answer');
                    checkAnswer1.innerHTML = 'Your answer is wrong, the correct one is HCl';
                }
                checkAnswer2.className = '';
                if (answer2.value.trim() === '') {
                    checkAnswer2.classList.add('empty-answer');
                    checkAnswer2.innerHTML = 'Please fill in the answer';
                } else if (answer2.value.trim() === 'base') {
                    checkAnswer2.classList.add('true-answer');
                    checkAnswer2.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer2.classList.add('false-answer');
                    checkAnswer2.innerHTML = 'Your answer is wrong, the correct one is base';
                }
                checkAnswer3.className = '';
                if (answer3.value.trim() === '') {
                    checkAnswer3.classList.add('empty-answer');
                    checkAnswer3.innerHTML = 'Please fill in the answer';
                } else if (answer3.value.trim() === '7') {
                    checkAnswer3.classList.add('true-answer');
                    checkAnswer3.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer3.classList.add('false-answer');
                    checkAnswer3.innerHTML = 'Your answer is wrong, the correct one is 7';
                }
                checkAnswer4.className = '';
                if (answer4.value.trim() === '') {
                    checkAnswer4.classList.add('empty-answer');
                    checkAnswer4.innerHTML = 'Please fill in the answer';
                } else if (answer4.value.trim() === 'neutralization') {
                    checkAnswer4.classList.add('true-answer');
                    checkAnswer4.innerHTML = 'Your answer is correct';
                } else {
                    checkAnswer4.classList.add('false-answer');
                    checkAnswer4.innerHTML = 'Your answer is wrong, the correct one is neutralization';
                }
                break;                                
        }
    });
}

learnButton.forEach((element) => {
    element.addEventListener('click', () => {
        chooseMaterialLearn(element.classList[0]);
        learnButton.forEach((element1) => {
            element1.classList = element1.classList[0] + ' learn-button';
        });
        element.classList += ' selected-learn-button';
    });
});

const searchButton = document.querySelector('.search-button');
const searchText = document.getElementById('search-text');
searchButton.addEventListener('click', () => {
    if (searchText.value.trim() != '') {
        alert(`Searching for: ${searchText.value.trim()}`);
    }
    searchText.value = '';
});