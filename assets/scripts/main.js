//Quizz
var questionsList = ['A quoi pense Paul le matin en arrivant à la Manu ?,Codding or not codding,A des modals dans des modals,A la bonne tasse de café fort qu\'aura fait Quentin,r,Comment je fais fonctionner ce p***** de Wine ?!',
  'Quelle polémique tourne actuellement autour de Laura ?,Elle aime autant Marvel que le DC Universe,Elle n\'aime pas Dragon Ball Z ! OMGWTFBBQ !!!,r,Elle donne trop de coups de coude à ses voisins de table,Il n\'y en a pas. Quelle idée ! Elle est parfaite !',
  'Qu\'est ce que Damien utilise obstinément en JS et tout cela en vain ?,===,r,**,>>,<<',
  'A qui appartient le PC que Manu a piraté ? (CYBERSECURITE !),Anousone,Laura,Quentin,r,Alexandre Denurra',
  'Question pour Patrick : de quelle équipe de football notre bien aimé Jean-Pierre Foucault national est-il fan ?,Olympique de Marseille,r,Paris Saint Germain,Olympique Lyonnais,Le Havre Athlétique Club',
  'Comment se créent les vagues ?,Par le mouvement de hanches de Beyoncé,Par le vent et la mécanique des fluides,r,Par le mouvement incessant de Patrick dans la salle de cours de La Manu,La marée (les moules et les frites donc miam)',
  'Comment se créent une image dans l\'oeil l\'homme humain ?,Par impression directe sur la rétine,Le cerveau fait un alert(),Par impression d\'une image inversée au fond de l\'oeil,r,Avec des lunettes (sans lunettes c\'est du fake en fait les gens voient rien)',
  'Combien d\'années sont protégés les droits d\'auteur,70 ans,r,20 ans,30 ans,Et ta mère ?',
  'Choisir la réplique correspondant à : "Oui juste un doigt",Désolé je suis manchot,Il dit qu\'il ne voit pas le rapport,Vous voulez pas un Whisky d\'abord ?,r,Mais que peut bien vouloir dire O.D.I.L.E ?!',
  'Choisir parmis ces réponses : ,Je suis la bonne réponse,r,Je suit la bonne réponse,Je suis la bonne réponce,Je suis la bone réponse'
]; // Tableau de chaines contenant questions et réponses

var userIdAnswer = ['', '', '', '', '', '', '', '', '', '']; // Tableau contenant l'ID des LI cliquées
var checkDoneTab = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Pour vérifier si checkAnswer a déjé été appelée
var quizzBlockPointer = document.getElementById('quizzBlock'); // Pointeur vers la DIV quizz
var recapBlockPointer = document.getElementById('recapBlock'); // Pointeur vers la DIV recap
var prevBtn = document.getElementById('btnPrev'); // Pour mettre en surbrillance après réponse
var nextBtn = document.getElementById('btnNext'); // Pour mettre en surbrillance après réponse
var liPointer = document.getElementsByTagName('li'); // Pointeur vers tous les elem LI
var indexQuestion = 0; // Pour parcourir les tableaux - Question en cours
var rightAnswer = ''; // Chaine qui contiendra la bonne réponse

prevBtn.style = 'display: none;';
recapBlockPointer.style = 'display: none;'; // Set le display du BTN Prev et du bloc recap dès le chargement de la page


function makeQuizz() { // Fabrique à questions-réponses
  var answers = questionsList[indexQuestion].split(','); // Découpe la chaine
  rightAnswer = answers[answers.indexOf('r') - 1]; // Récupère l'indice de la bonne réponse
  answers.splice(answers.indexOf('r'), 1); // Elimine le Flag
  var question = answers.splice(0, 1); // Crée la var contenant la question

  for (let j = 0; j < answers.length; j++) { // Remplissage du questionnaire
    liPointer[j].textContent = answers[j];
  }
  document.getElementById('question').textContent = question; // affichage de la question
}

function makeRecap() { // Efface le bloc Quizz et affiche le récapitulatif du quizz
  quizzBlockPointer.style = 'display: none;';
  recapBlockPointer.style = '';
}

function checkAnswer(elem) { // Va vérifier si t'as la culture en toi
  checkDoneTab.splice(indexQuestion, 1, 1); // T'as cliqué, c'est trop tard
  userIdAnswer.splice(indexQuestion, 1, elem.id);

  if (elem.textContent == rightAnswer) { // Colorise en fonction de la réponse
    elem.classList.add('list-group-item-success');
  } else {
    elem.classList.add('list-group-item-danger');
    //rendre les autres elem incliquable
  }
  supprOnclick();
}

function supprOnclick() { // Supprime les event onclick dans le DOM
  for (let i = 0; i <= 3; i++) {
    liPointer[i].removeAttribute('onclick');
  }
}

function setOnclick() { // Crée les event onclick dans le DOM
  for (let i = 0; i <= 3; i++) {
    liPointer[i].setAttribute('onclick', 'checkAnswer(this)');
  }
}

function resetColor() { // Fonction qui boucle sur les class pour reset les couleurs après click event sur les BTN
  for (let i = 0; i <= 3; i++) {
    liPointer[i].classList.remove('list-group-item-success');
  }

  for (let j = 0; j <= 3; j++) {
    liPointer[j].classList.remove('list-group-item-danger');
  }
}

function nextQuestion(elem) {
  resetColor();
  indexQuestion++; // Incrémentation de l'index des questions
  prevBtn.style = ''; // Display du prevBTN -> à revoir car dégueulasse

  if (indexQuestion < questionsList.length) { // Check si il reste des questions à afficher
    makeQuizz();
    if (indexQuestion == (questionsList.length - 1)) {
      nextBtn.textContent = 'Résultats';
    }
    if (checkDoneTab[indexQuestion] == 1) {
      supprOnclick();
      if (document.getElementById(userIdAnswer[indexQuestion]).textContent == rightAnswer) {
        document.getElementById(userIdAnswer[indexQuestion]).classList.add('list-group-item-success');
      } else {
        document.getElementById(userIdAnswer[indexQuestion]).classList.add('list-group-item-danger');
      }
    } else {
      setOnclick();
    }
  } else {
    makeRecap();
  }
}

function prevQuestion() {
  resetColor();
  nextBtn.textContent = 'Question Suivante'; // Set le content de next BTN

  if (indexQuestion != 0) { // Vérifie si l'index n'est pas à 0
    indexQuestion--; // Décrémentation de l'index des questions
    makeQuizz();
    if (indexQuestion == 0) {
      prevBtn.style = 'display: none;';
    }
    if (checkDoneTab[indexQuestion] == 1) {
      supprOnclick();
      if (document.getElementById(userIdAnswer[indexQuestion]).textContent == rightAnswer) {
        document.getElementById(userIdAnswer[indexQuestion]).classList.add('list-group-item-success');
      } else {
        document.getElementById(userIdAnswer[indexQuestion]).classList.add('list-group-item-danger');
      }
    } else {
      setOnclick();
    }
  }
}
