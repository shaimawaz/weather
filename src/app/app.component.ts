import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello';
  public today = new Date();
  private hour;

  getTime() {
    this.hour = this.today.getHours();
    if (this.hour >= 18 || this.hour < 5)
      return "night";
    else if (this.hour >= 16)
      return "sunset";
    else if (this.hour >= 7)
      return "day";
    else
      return "sunrise";
  }

}
