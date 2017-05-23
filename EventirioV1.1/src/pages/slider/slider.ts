import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class SliderPage {
  slides = [
    {
      title: "Bienvid@ a Eventirio!",
      description: "<b>Todos</b> los eventos de tu ciudad al alcance de la mano",
      image: "http://www.gotceleb.com/wp-content/uploads/photos/rachel-hilbert/devon-windsor-victoria-s-secret-pink-nation-spring-break-beach-party-in-cancun/Rachel-Hilbert-and-Devon-Windsor:-VS-PINK-Nation-Spring-Break-Beach-Party--51.jpg",
    },
    {
      title: "Qué es Eventirio?",
      description: "<b>Eventirio</b> es una pija venosa carnosa y sabrosa.",
      image: "http://viaresto.viapais.com.ar/img/yuvok5e0t31d2df4ucpj2p55635429240009096250.jpeg",
    },
    {
      title: "Descubri lo que te estas perdiendo gil",
      description: "<b>Eventirio</b> te ayuda a encontrar los mejores trapos de la ciudad.",
      image: "http://fotovideomusica.com.ar/resources/0/1/E/W/1/1/2/1/files/images/shows.jpg",
    }
  ];
}
