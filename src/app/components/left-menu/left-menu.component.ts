import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { animateText, onSideNavChange } from 'src/app/animations/animations';
import { Pet } from 'src/app/models/pet.model';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { SidenavService } from 'src/app/services/sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {
  user: User;
  payload;
  Pet : Pet[];
  userH:User;
  public sideNavState: boolean = false;
  public linkText: boolean = false;
  
  public pages: Page[] = [
    {name: 'Veterinaries', link:'/clinic', icon: 'store'},
    {name: 'Pets', link:'/pets', icon: 'pets'},
    {name: 'Adoptions', link:'/adoptions', icon: 'favorite'},
    {name: 'Forum', link:'some-link', icon: 'supervisor_account'},
    {name: 'Near Vets', link:'/maps', icon: 'place'},
  ]
  string: string;
  
  constructor(private _sidenavService: SidenavService,private accountService: AccountService) { 
    this.user = this.accountService.userValue;

  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.string = localStorage.getItem('user');
    this.userH = (JSON.parse(this.string));
  }
  


  onSinenavToggle() {
    this.sideNavState = !this.sideNavState
    
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)
  }

  logout() {
    this.accountService.logout();
}

}
