import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  constructor(
    private navController: NavController,
    private router: Router,
  ) {}

  get url() {
    return this.router.url;
  }


  goToPreviousPage(): void {
    this.navController.back();
  }

}
