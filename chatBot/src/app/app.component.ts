import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private dataService:AppService){
    for(let i = 1; i < 31; i++){
        this.dataService.getProducts(i).subscribe(products => {
        console.log(products);
      });
    }
  }

  ngOnInit() {
  }
}
