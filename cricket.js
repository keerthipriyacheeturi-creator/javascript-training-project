let scoreStr = localStorage.getItem('score');
 let score;
 function resetScore(scoreStr) {
let score = scoreStr ?  JSON.parse(scoreStr) : {
    win: 0,
    lost: 0,
    tie: 0,
    };
    score.displayScore = function(){
    return `score:${score.win},lost:${score.lost}, tie:${score.tie}`
    };
    score;
 if(scoreStr !== undefined){
            score = JSON.parse(scoreStr) || {
       score : {
        win: 0,
        lost: 0,
        tie: 0,
           }   
      };
     /* score.displayScore = function(){
          return `no of matches won:${score.win},lost:${score.lost}, tie:${score.tie}`
        }*/
      score.displayScore = function(){
        return `score:won:${score.win} ,  
        lost:${score.lost}, tie: ${score.tie}`;};

        showResult();
      }

        let computerChoice;
        function generateComputerChoice(){
     let  randomNumber = Math.random()*3;
     if (randomNumber > 0 && randomNumber <=1){
        return 'bat';
     }
     else if (randomNumber > 1 && randomNumber <=2){
        return 'ball';
     }
     else {
        return 'stump';
     }
    return Choice;

        }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
          score.win++;
          return 'User won.';
        } else if (computerMove === 'Bat') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Stump') {
          score.lost++;
          return 'Computer has won';
        }
      } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
          score.tie++;
          return `It's a tie`;
        } else if (computerMove === 'Bat') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'Stump') {
          score.win++;
          return 'User won.';
        }
      } else {
        if (computerMove === 'Ball') {
          score.lost++;
          return 'Computer has won';
        } else if (computerMove === 'Bat') {
          score.win++;
          return 'User won.';
        } else if (computerMove === 'Stump') {
          score.tie++;
          return `It's a tie`;
        }
      }
    }
  
    function showResult(userMove, computerMove, result) {
      
      localStorage.setItem('score', JSON.stringify(score));
      document.querySelector('#user-move').innerText = userMove !== undefined ? `you have chosen ${userMove}` : '';

      document.querySelector('#computer-move').innerText = computerMove !== undefined ? `computerchoice is ${computerChoice}` : '';
      
      document.querySelector('#result').innerText =  result || '';

      document.querySelector('#result').innerText = score;
      displayScore();
      
      
      //alert(`you have choosen ${userMove}. computer choice is ${computerMove}
      
      //${result}
      //${displayScore ()}}`); //encapsulation
    }
  
     

