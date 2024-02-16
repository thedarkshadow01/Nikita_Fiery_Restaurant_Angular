import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';


@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink,NgIf,CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags: Tag[]= [];
  constructor(private foodservice:FoodserviceService){}
  ngOnInit(): void {
      this.tags= this.foodservice.getAllTags();
  }
}
