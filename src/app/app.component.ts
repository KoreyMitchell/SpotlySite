import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotlysite';
  openSiderbar() {
    alert("y");
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = "block !important";
  }
}

