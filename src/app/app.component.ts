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
  user: string = '';
  computer: string = '';
  result: string = ''; // Initialize result with an empty string
  num: number = 0;
  user_score: number = 0;
  computer_score: number = 0;


  Myfun(user:any){
    this.user = user;
    this.num = Math.random();
    this.num = this.num*100;
    
    if(this.num>=0 && this.num<=33){
      this.computer='Paper' // Computer chose paper
    }
    else if(this.num>=34 && this.num<=66){
      this.computer='Rock' // Computer chose rock
    }
    else{
      this.computer='Scissors' // Computer chose scissors
    }

    if(user == this.computer){
      this.result = 'It is a Draw.';
    } else if(user == 'Rock' && this.computer == 'Paper'){
      this.result = 'Computer Wins.';
      this.computer_score += 1; // Increment computer score
    } else if(user == 'Rock' && this.computer == 'Scissors'){
      this.result = 'You Win.';
      this.user_score += 1; // Increment user score
    } else if(user == 'Paper' && this.computer == 'Scissors'){
      this.result = 'Computer Wins.';
      this.computer_score += 1; // Increment computer score
    } else if(user == 'Paper' && this.computer == 'Rock'){
      this.result = 'You Win.';
      this.user_score += 1; // Increment user score
    } else if(user == 'Scissors' && this.computer == 'Paper'){
      this.result = 'You Win.';
      this.user_score += 1; // Increment user score
    } else if(user == 'Scissors' && this.computer == 'Rock'){
      this.result = 'Computer Wins.';
      this.computer_score += 1; // Increment computer score
    }
  }

  ResetGame(){
    window.location.reload()
  }
}
