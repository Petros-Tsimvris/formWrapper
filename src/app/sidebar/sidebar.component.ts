import {Component,} from '@angular/core';
import { NaviServiceService as NaviService } from '../navi-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(
    public navi: NaviService,
  ) {}

  public innerWidth: number | undefined;
  opened= this.navi.opened;
  events= this.navi.events;
  closeNavi= this.navi.changeNaviStatus();

ngOnInit(): void {
  this.opened=true;
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth);
  if (this.innerWidth < 768) {
    console.log('small');
  }
}

}
