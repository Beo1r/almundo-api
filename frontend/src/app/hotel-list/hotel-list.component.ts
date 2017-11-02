import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel-service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {

  hotels: Hotel[];
  name: string;
  Math: any;

  constructor ( private hotelService: HotelService ) { 
    this.hotelService.stream_name$.subscribe(this.getHotelByName.bind(this));
    this.hotelService.stream_stars$.subscribe(this.getHotelsByStars.bind(this));
    this.Math = Math;
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => {this.hotels = hotels;})
  }

  getHotelByName ( name: string ) {
    this.hotelService.getHotelByName(name).subscribe(hotels => {this.hotels = hotels;})
  }

  getHotelsByStars ( optionsQuery ) {
    this.hotelService.getHotelsByStars(optionsQuery).subscribe(hotels => {this.hotels = hotels;})
  }

  intToArray ( stars: number ) {
    return new Array(stars);
  }

  ngOnInit(): void {
    this.getHotels();
  }

}
