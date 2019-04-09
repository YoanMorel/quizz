//Quizz
var questionsList =
  ['question,rep1,rep2,rep3,r,rep4',
  'question,rep1,rep2,r,rep3,rep4',
  'question,rep1,r,rep2,rep3,rep4',
  'question,rep1,rep2,rep3,r,rep4',
  'question,rep1,r,rep2,rep3,rep4',
  'question,rep1,rep2,r,rep3,rep4',
  'question,rep1,rep2,rep3,rep4,r',
  'question,rep1,r,rep2,rep3,rep4',
  'question,rep1,rep2,rep3,r,rep4',
  'question,rep1,r,rep2,rep3,rep4']; // Tableau de chaines contenant questions et réponses
var checkDone = [0,0,0,0,0,0,0,0,0,0,0]; // Pour vérifier si checkAnswer a déjé été appelé
var myQuizz = document.getElementsByTagName('li'); // Pour remplir la liste de réponses
var prevBtn = document.getElementById('prev'); // Pour mettre en surbrillance après réponse
var nextBtn = document.getElementById('next'); // Pour mettre en surbrillance après réponse
var index = 0; // Pour parcourir les tableaux
var rightAnswer = ''; // Chaine qui contiendra la bonne réponse

function makeQuizz() { // Fabrique à question-réponses
  question = questionsList[index].split(','); //découpe la chaine
  rightAnswer = question[question.indexof('r') - 1]; //récupère l'indice de la bonne réponse
  //crée les listes de réponses
}

function checkAnswer(elem) { // Va vérifier si t'as la culture en toi
  checkDone.splice(index, 1, 1); // T'as cliqué, c'est trop tard
  if (elem.textContent == rightAnswer) {
    elem.className = ' list-group-item-success';
    //rendre les autres elem incliquable
  } else {
    elem.className = ' list-group-item-danger';
    //rendre les autres elem incliquable
  }
}

function nextQuestion(elem) {

}

function prevQuestion(elem) {

}
