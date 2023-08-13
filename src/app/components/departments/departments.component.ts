import { Component } from '@angular/core';
import { CommonUtilsService } from 'src/app/services/common-utils.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  constructor(
    public commonSrv : CommonUtilsService
  ){}
  
  addHoverClass(event: Event) {
    const target = event.target as HTMLElement;
    target.classList.add('hovered');
  }

  removeHoverClass(event: Event) {
    const target = event.target as HTMLElement;
    target.classList.remove('hovered');
  }
  
  
  
}
