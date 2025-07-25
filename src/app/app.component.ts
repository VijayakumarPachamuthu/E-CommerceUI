import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private router: Router){} 

  goGetMobiles(){
    this.router.navigate(['get']);
  }
  goPostMobiles(){
    this.router.navigate(['post']);
  }
}
