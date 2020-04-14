import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app/api.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  username:String;
  password:String;

  errorMessage:String;

  constructor(public apiservice:ApiService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    console.log("Inside the onLogin() method");
    let jsessionData:any;

    this.apiservice.getAuthenticationToken(this.username,this.password).then(
        response=>{
          this.errorMessage=null;
          jsessionData = {access_token:response.access_token,token_type:response.token_type,refresh_token:response.refresh_token,expires_in:response.expires_in,scope:response.scope}
          
          localStorage.setItem("jsessionData",JSON.stringify(jsessionData));
          localStorage.setItem("authtoken",JSON.stringify(response.access_token));

          this.router.navigateByUrl('/checkoauth');
        }
      ).catch(e=>{
          console.log(e);
          this.errorMessage="Oauth Validation failure";


      });

    };

    

    


}
