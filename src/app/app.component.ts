import { Component } from '@angular/core';
import { NaviServiceService as NaviService } from './navi-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public navi: NaviService,

  ) {}
  title = 'formWrapper';
  events= this.navi.events;
  opened=this.navi.opened ;
  closeNavi= () => this.navi.changeNaviStatus();
}
