import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search';
  searchText :any;
  data :any =[
  {id :1 , Name : "Sagar", Country :"India"},
  {id :2 , Name : "Saurabh", Country :"Pakistan"},
  {id :3 , Name : "Vedant", Country :"Germany"},
  {id :4 , Name : "Pranit", Country :"Italy"},
  {id :5 , Name : "Akshay", Country :"Cuba"},
  {id :6 , Name : "Hritik", Country :"Australia"},
  {id :7 , Name : "Ketan", Country :"America"},
  {id :8 , Name : "Swapnil", Country :"England"},
  {id :9 , Name : "Gajanan", Country :"France"},
  {id :10 , Name : "Narendra", Country :"Portugal"},
  {id :11 , Name : "Uddhav", Country :"Nepal"},
  {id :12 , Name : "Narayan", Country :"Maldeeves"},



  ];
  key:string = 'id'
  reverse :boolean = false;
  sort(key:string){
    this.key = key;
    this.reverse =! this.reverse;

  }
}
