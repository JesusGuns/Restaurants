import { Component, OnInit } from '@angular/core';
import {RestaurantService} from './restaurant.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {
  restaurants = [];
  constructor(private restaurantService: RestaurantService) { 
  }

  ngOnInit() {
    this.restaurantService.getRestaurants().then(response =>{
      this.restaurants = response;
    })

    //this.getRestaurant("58866b06eaa0c200046f5e6e");
  }

  getRestaurant(id: String){
    this.restaurantService.getRestaurant(id).then(response =>{
      //this.restaurants = response;
      console.log(response);
    })
  }

}

