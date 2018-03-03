import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Users} from '../users';
import { DataserviceService } from '../DataService.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  private userlist:Users[]=[];
  constructor(private route: ActivatedRoute,private dataService:DataserviceService,private location: Location) { }

  ngOnInit() {
    this.userlist.push({userId:0,id:0,title:"",body:""});
    this.DetailData();
  }
  DetailData():void{   
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("In Detail Component DetailData : " + id);
    this.dataService.getData(id).subscribe(data => {           
    this.userlist=data;      
    console.log(this.userlist);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
