import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title : any = 'Welcome to angular crud '
constructor(private route : Router){

}

  goToList(){
this.route.navigate(['/products'])
  }

}
