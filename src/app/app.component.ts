import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'avernumTrueTesting';
// }

@Component({
  selector: 'app-root',
  template: `
<app-nav></app-nav>
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-md">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avernumTrueTesting';
}
