import { Component, OnInit,OnDestroy } from '@angular/core';
import {ActivatedRoute} from  '@angular/router'
import {Subscription} from 'rxjs/Rx'

import {RestaurantService} from '../restaurants/restaurant.service'
import {SaucerService} from '../saucers/saucer.service';
import {CommentService} from './comment.service';
import {Restaurant} from '../restaurants/restaurant'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[RestaurantService,SaucerService,CommentService]
})
export class CommentsComponent implements OnInit,OnDestroy {
  restaurantId: string = '';
  saucerId: String = '';
  saucer={};
  restaurant = {}
  comments= [];
  data={};
  success = false;
  error = false;

  private subscription: Subscription;

  constructor(private route:  ActivatedRoute,
              private saucerService: SaucerService, 
              private commentService: CommentService,
              private restaurantService: RestaurantService
              ) { }

  ngOnInit() {

    this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.restaurantId = params.restaurantId;
        this.saucerId = params.saucerId;
      }
    );

    this.saucerService.getSaucer(this.saucerId).then(response =>{
      this.saucer=response;
    });

    this.commentService.getComment(this.saucerId).then(response =>{  
      this.comments=response;
    })

    this.restaurantService.getRestaurant(this.restaurantId).then(response =>{
      this.restaurant=response;
    });
  }

  sendComment(){
    this.commentService.addComment(this.saucerId,this.data).then(response=>{
      this.comments.push(response);
      this.data={};
      this.success = true;
      this.error = false;
    }).catch(response =>{
      this.success = false;
      this.error = true;
    })

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
