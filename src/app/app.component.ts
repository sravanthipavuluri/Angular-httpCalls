import { Component } from '@angular/core';
import { Users} from './users';
import { DataserviceService } from './DataService.service';
import { PserviceService } from './pservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private users:Users[]=[];
  private users1:Users[]=[];
   result:any;
  constructor(private dataService:DataserviceService,private postService:PserviceService) { }
  ngOnInit() {
   // this.user=new users({userId:0,id:0,title:"",body:""});
   this.users.push({userId:0,id:0,title:"",body:""});
   this.users1.push({userId:0,id:0,title:"",body:""});
  }
  FetchData1():void{
    console.log("In onFormSubmit");   

    this.dataService.getData(0).subscribe(data => {
      //this.users=data;
    });
  }

  clearData(){   
    this.users=[];
    this.users1=[];
  }


  FetchData2():void{
      this.postService.getPosts()
          .subscribe(
              resultArray => this.users = resultArray,
              error => console.log("Error :: " + error)
          )
  } 
  DetailData(indexvalue:number):void{
    console.log("In DetailData");
     this.users1=[];
     //this.users1 = this.users[indexvalue];

    this.dataService.getData(this.users[indexvalue].id).subscribe(data => {      
      //this.users1=data;      
    });
  }
}
