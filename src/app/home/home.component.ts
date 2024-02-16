import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { CommonModule, NgFor } from '@angular/common';
import { Food } from '../food';
import { CurrencyPipe } from '../currency.pipe';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,SearchComponent,CommonModule,CurrencyPipe,TagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  foods: Food[]= [];
  a:number=0;
  constructor(private foodservice: FoodserviceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
      this.foods= this.foodservice.getAll().filter(food=> food.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
      else if(params.tag)
      this.foods= this.foodservice.getAllFoodsByTag(params.tag);
      else
      this.foods=this.foodservice.getAll();
    })      
  }
}
