import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  image = "assets/img/Logo nephila.png"
  face = "assets/img/REDES_SOCIALES/facebook.png"
  insta= "assets/img/REDES_SOCIALES/instagram.png"
  what = "assets/img/REDES_SOCIALES/whatsapp.png"

  constructor() { }

  ngOnInit(): void {
  }

}
