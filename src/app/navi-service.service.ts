import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaviServiceService {
  events: string[] = [];
  opened: boolean | undefined;
  changeNaviStatus(){
   return !this.opened;
  }
  constructor() { }
}
