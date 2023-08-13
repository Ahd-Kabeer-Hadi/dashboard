import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { CommonUtilsService } from 'src/app/services/common-utils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class MenuComponent implements OnInit {
  constructor(
    public commonSrv : CommonUtilsService
  ){}
  ngOnInit(): void {
    
  }
  @Input() isExpanded!  : boolean;
  @Output() expandCollapseEvent = new EventEmitter<boolean>();
  onExpandCollapseClick() {
    this.isExpanded = false;
    this.expandCollapseEvent.emit(this.isExpanded);
  }
  
}
