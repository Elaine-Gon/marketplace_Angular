import { CheckoutService } from './../../../views/checkout/checkout.service';
import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/views/list-films/film.model';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {
  listFilms: Film[] = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }

  selectFilm(film: Film): void {
    this.checkoutService.setFilm(film);
    this.checkoutService.setPrice(film.price)
  }

}
