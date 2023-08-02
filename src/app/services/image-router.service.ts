import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageRouterService {
  router: any;

  constructor() { }

  navigateToHome() {
    this.router.navigate([""]);
}
}
