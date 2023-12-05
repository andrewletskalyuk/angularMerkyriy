import { Component } from "@angular/core";
import {FormsModule} from "@angular/forms";
     
// @Component({
//     selector: "my-app",
//     standalone: true,
//     imports: [FormsModule],
//     template: `<label>Введите имя:</label>
//                  <input [(ngModel)]="name" placeholder="name">
//                  <h1>Добро пожаловать {{name}}!</h1>`
// })
// export class AppComponent { 
//     name= "";
// }

// @Component({
//     selector: "my-app",
//     template: `<label>Введите имя:</label>
//                  <input [(ngModel)]="name" placeholder="name">
//                  <h1>Добро пожаловать {{name}}!</h1>`
// })
// export class AppComponent { 
//     name= '';
// }
 
// @Component({
//     selector: "my-app",
//     standalone: true,
//     //templateUrl: './app.component.html',
//     template: `<p>Количество кликов {{count}}</p>
//                 <button (click)="increase()">Click</button>`
// })
// export class AppComponent {
//     count: number=0;
//     increase() : void {
//         this.count++;
//     }
//  }
// @Component({
//     selector: "my-app",
//     standalone: true,
//     imports:[FormsModule],   // импортируем FormsModule для двусторонней привязки
//     template: `<p>Привет {{name}}</p>
//                 <input type="text" [(ngModel)]="name" /> <br><br>
//                 <input type="text" [(ngModel)]="name" />`
// })
// export class AppComponent { 
//     name ="Tom";
// }

@Component({
    selector: "my-app",
    standalone: true,
    imports:[FormsModule],
    template: `<div [class.redbox]="isRed"></div>
            <div [class.redbox]="!isRed"></div>
            <input type="checkbox" [(ngModel)]="isRed" />`,
    styles: [`
        div {width:150px; height:50px; border:1px solid #ccc}
         .redbox{background-color:red;}
    `]
})
export class AppComponent{ 
      
    isRed = false;
}