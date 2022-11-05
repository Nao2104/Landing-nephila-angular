import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-inicial',
  templateUrl: './pag-inicial.component.html',
  styleUrls: ['./pag-inicial.component.css']
})
export class PagInicialComponent implements OnInit {

  imageInfo1= "assets/img/Empresas-que-decidieron-trabajar-100-remoto.jpg"
  imageInfo2= "assets/img/inpulsa-tu-negocio.jpg"
  imageEmilio= "assets/img/EMILIO VALENZUELA.jpeg"
  imageRecreo= "assets/img/EL RECREO.jpeg"
  imageCerezos= "assets/img/LOS CEREZOS.jpeg"
  imageCard1= "assets/img/students-knowing-the-right-answer.jpg"
  imageCard2= "assets/img/model-house-on-project-blueprints.jpg"
  imageCard3= "assets/img/bearded-master-chef-prepares-fresh-salmon.jpg"
  imageCard4= "assets/img/woman-customer-looking-for-beautiful-fabric-in-drapery-shop.jpg"
  imageCard5= "assets/img/tractor-agricultural-machine-cultivating-field.jpg"
  imageCard6= "assets/img/close-up-of-construction-site-excavator.jpg"

  

  constructor() { }

  ngOnInit(): void {
  }

}
