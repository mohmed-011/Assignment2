import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
 @ViewChild('nav') el!:ElementRef;
  @HostListener('window:scroll') oncsroll(){
    if(scrollY > 90){
      this.el.nativeElement.style.paddingBlock ='35px';
    }
    else{
      this.el.nativeElement.style.paddingBlock ='15px';
    }
  }
}
