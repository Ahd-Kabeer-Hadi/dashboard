import { Component} from '@angular/core';
import { CommonUtilsService } from './services/common-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public commonSrv: CommonUtilsService
  ){}
  isSideBarExpanded = false
  
  title = 'dashboard';
  public toggleMenu(){
    this.isSideBarExpanded = !this.isSideBarExpanded
  }
  onExpandCollapseEvent(isExpanded: boolean) {
    this.isSideBarExpanded = isExpanded;
  }
}
