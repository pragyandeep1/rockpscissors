import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rockpaperscissor';
  computer: string = '';
  result: string = ''; // Initialize result with an empty string
  num: number = 0;
  user_score: number = 0;
  computer_score: number = 0;

  Myfun(user:any){
    this.num = Math.random()
    this.num = this.num*100
    
    if(this.num>=0 && this.num<=33){
      this.computer='paper' // Computer chose paper
    }
    else if(this.num>=34 && this.num<=66){
      this.computer='rock' // Computer chose rock
    }
    else{
      this.computer='scissors' // Computer chose scissors
    }

    if(user == this.computer){

      this.result = 'It is a Draw.';
  
    } else if(user == 'rock' && this.computer == 'paper'){
  
      this.result = 'Computer Wins.';
  
      this.computer_score += 1; // Increment computer score
  
    } else if(user == 'rock' && this.computer == 'scissors'){
  
      this.result = 'You Win.';
  
      this.user_score += 1; // Increment user score
  
    } else if(user == 'paper' && this.computer == 'scissors'){
  
      this.result = 'Computer Wins.';
  
      this.computer_score += 1; // Increment computer score
  
    } else if(user == 'paper' && this.computer == 'rock'){
  
      this.result = 'You Win.';
  
      this.user_score += 1; // Increment user score
  
    } else if(user == 'scissors' && this.computer == 'paper'){
  
      this.result = 'You Win.';
  
      this.user_score += 1; // Increment user score
  
    } else if(user == 'scissors' && this.computer == 'rock'){
  
      this.result = 'Computer Wins.';
  
      this.computer_score += 1; // Increment computer score
    }


  }

  DetermineWinner() {
    if (this.user_score > this.computer_score) {
      alert('Congratulations! You are the overall winner.');
    } else if (this.user_score < this.computer_score) {
      alert('Computer is the overall winner. Better luck next time!');
    } else {
      alert('The game is a draw.');
    }
  }

  ResetGame(){
    if (confirm('Are you sure you want to reset the game?')) {
      window.location.reload();
      this.computer = '';
      this.result = '';
      this.num = 0;
      this.user_score = 0;
      this.computer_score = 0;
    }
  }
}

