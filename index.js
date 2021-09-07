//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});



// traversing the dom 
// const Btns = document.querySelectorAll('.question-btn')

// Btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.currentTarget.parentElement.parentElement);
//         const addQuestion = e.currentTarget.parentElement.parentElement;
//         addQuestion.classList.toggle('show-text')
//     });
// });






















