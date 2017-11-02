import { Component } from '@angular/core';
import { HotelService } from '../hotel-service';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.css']
})

export class HotelFilterComponent {
  
  options = [ {name:'5', value:5, checked:false}, {name:'4', value:4, checked:false}, {name:'3', value:3, checked:false}, {name:'2', value:2, checked:false}, {name:'1', value:1, checked:false} ];
  optionsQuery = [];
  toggleSearch: boolean;
  toggleStars: boolean;
  toggleFiltersMobile: boolean;

  constructor ( private hotelService: HotelService ) { 
    this.toggleSearch = true;
    this.toggleStars = true;
    this.toggleFiltersMobile = false;
  }

  sendHotelName ( name: string ) {
    this.hotelService.sendHotelName(name);
  }

  setHotelStars ( stars: number, checked: boolean ) {
    if (checked) {
      this.optionsQuery.push(stars);
    }
    else {
      this.optionsQuery.splice(this.optionsQuery.indexOf(stars), 1);
    }
    this.hotelService.sendHotelStars(this.optionsQuery);
  }

  intToArray ( stars: number ) {
    return new Array(stars);
  }

}