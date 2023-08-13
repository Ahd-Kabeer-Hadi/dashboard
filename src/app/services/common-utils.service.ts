import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {
  public isMobile: boolean = false;
  constructor(@Inject(DOCUMENT) private document: HTMLDocument) { 
      if(window.innerWidth < 990){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
   
  // just to replicate an api call behaviour
  public departments: Array<any> =[
    {
      icon:"../../../assets/images/departments/Administration.svg",
      department: 'Administration'
    },{
      icon:"../../../assets/images/departments/Manufacturing.svg",
      department: 'Manufacturing'
    },{
      icon:"../../../assets/images/departments/KPI.svg",
      department: 'KPI'
    },{
      icon:"../../../assets/images/departments/Quality.svg",
      department: 'Quality'
    },{
      icon:"../../../assets/images/departments/EnT.svg",
      department: 'E&T'
    },{
      icon:"../../../assets/images/departments/Supply_chain.svg",
      department: 'Supply Chain'
    },{
      icon:"../../../assets/images/departments/Initiative_management.svg",
      department: 'Initiative Management'
    },{
      icon:"../../../assets/images/departments/HealthnSafety.svg",
      department: 'Health & Safety'
    },{
      icon:"../../../assets/images/departments/OrganizationsnChange.svg",
      department: 'Organizations & Change'
    },{
      icon:"../../../assets/images/departments/Advanced_Analytics.svg",
      department: 'Advanced Analytics'
    },
  ]
  public menus : Array<any> = [
    {
      menuName:'Home',
      menuIcon: "../../../assets/images/menu_icons/home.svg"
    },
    {
      menuName:'Orders',
      menuIcon: "../../../assets/images/menu_icons/personring.svg"
    },
    {
      menuName:'Administration',
      menuIcon: "../../../assets/images/menu_icons/conveyor-belt.svg"
    },
    {
      menuName:'Manufacturing',
      menuIcon: "../../../assets/images/menu_icons/process.svg"
    },
    {
      menuName:'KPI',
      menuIcon: "../../../assets/images/menu_icons/effective.svg"
    },
    {
      menuName:'Quality',
      menuIcon: "../../../assets/images/menu_icons/time-management.svg"
    },
    {
      menuName:'E&T',
      menuIcon: "../../../assets/images/menu_icons/tickmark.svg"
    },
    
    {
      menuName:'Requests',
      menuIcon: "../../../assets/images/menu_icons/heartrate.svg"
    },
    {
      menuName:'Supply Chain',
      menuIcon: "../../../assets/images/menu_icons/growthsettings.svg"
    }
  ]
  public maintenance_requests: Array<any> =[
    {
      profile_pic: "../../../../assets/images/canvas/cardimage1.png",
      request: 'Lorem ipsum dolor sit amet',
      requested_by : 'Albert Gray',
      priority: 'low'
    },
    {
      profile_pic: "../../../../assets/images/canvas/cardimage2.png",
      request: 'Lorem ipsum dolor sit amet',
      requested_by : 'Albert Gray',
      priority: 'low'
    },
    {
      profile_pic: "../../../../assets/images/canvas/cardimage3.png",
      request: 'Lorem ipsum dolor sit amet',
      requested_by : 'Albert Gray',
      priority: 'high'
    }
  ]
}
