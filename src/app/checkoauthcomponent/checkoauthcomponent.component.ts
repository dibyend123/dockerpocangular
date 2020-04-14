import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/api.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-checkoauthcomponent',
  templateUrl: './checkoauthcomponent.component.html',
  styleUrls: ['./checkoauthcomponent.component.css']
})
export class CheckoauthcomponentComponent implements OnInit {

  constructor(private router:Router,public apiservice:ApiService) { }

  messagtext:any;

  ngOnInit() {
  }


  onLogOut(){

    console.log("clicking on the logout button");
    console.log("going to delete the key from localstorage");

    localStorage.removeItem("jsessionData");
    localStorage.removeItem("authtoken");

    this.router.navigateByUrl('/home');
  }

  callBusinessLayer(){
    this.messagtext="";

     console.log("inside the callBusiness layer function");

    this.apiservice.callBusinessLayer(localStorage.getItem("authtoken")).then(
      response=>{
        console.log(response);
        console.log(response.resText);
        console.log(JSON.parse(response.resVal).error);
      }
    ).catch(e=>{
      console.log(e);
      this.messagtext="Exception in Processing";
      //this.errorMessage="Oauth Validation failure";
  });

  }

}
