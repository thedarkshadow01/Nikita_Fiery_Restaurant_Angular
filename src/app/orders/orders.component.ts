import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [FormsModule ,NgFor, NgIf ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  ordlist: string = 'http://localhost:3000/orders';
  order: any;
  constructor(private http: HttpClient) {
    this.getAllOrders();
  }
  isadd :boolean = false;
  jdata={
    OrdNo:'',
    name:'',
    date:'',
    Items:0,
    total: 0,
    tax:0,
    gtotal:0
  }

  click(){
    this.isadd=true;
   }
  // Get method
  getAllOrders(){
    this.http.get(this.ordlist).subscribe((data) => {
      this.order = data;
      console.log(this.order);
    });
  }

  //Post method
  addOrder() {
    this.http.post(this.ordlist,this.jdata).subscribe((data) => {
      console.log(data)
      alert('New Order is added');
       this.getAllOrders();
    });
  }

  //Delete Method
  delete(id:any){
    const url = `http://localhost:3000/${id}`;
    this.http.delete(url).subscribe((data)=>{
      this.getAllOrders();
      alert('Deleted Successfully!')
    })
  }

//Edit
isupdate=false;
updatefetch(id:string){
  this.isupdate=true;
  const c=this.order.find((p:any) =>  p.id ===id)
   this.jdata.OrdNo=c.OrdNo;
   this.jdata.name=c.name;
   this.jdata.date=c.date;
   this.jdata.Items=c.Items;
   this.jdata.total=c.total;
   this.jdata.tax=c.tax;
   this.jdata.gtotal=c.gtotal;
}
updateOrder(id:string,value:any){
  this.http.put(`http://localhost:3000/${id}`,value).subscribe();
  alert('Updated Successfully!');
  this.getAllOrders(); //This is used to refresh the page and show the updated data
  }
}
