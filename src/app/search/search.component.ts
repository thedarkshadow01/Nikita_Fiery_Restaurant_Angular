import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
searchTerm: string= "";
constructor(private route: ActivatedRoute, private router: Router){}

ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm)
      this.searchTerm=params.searchTerm;
    })
}

search(): void{
  if(this.searchTerm)
  this.router.navigateByUrl('/search/'+ this.searchTerm);
}
}
