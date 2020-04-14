import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { concat } from 'rxjs';


@Injectable()
export class ApiService {



  constructor(private http:HttpClient) { }

  getAuthenticationToken(username:any,password:any):Promise<any>{

    var myHeaders = new HttpHeaders({'Authorization':'Basic cGF0aWVudHBvcnRhbDpwcHB3ZA=='
                    ,'Content-Type':'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*'
                    ,'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT'});

    var param = {'grant_type':'password','scope':'webclient','username':'user','password':'passsword'};

    const body = new HttpParams().set("grant_type", "password")
                    .append("scope", "webclient")
                    .append("username", username)
                    .append("password", password);

    let response : any;

    return this.http.post('http://localhost:4200/oauth/token',
         body , { headers: myHeaders }).toPromise().then(this.extractData).catch(this.handleError);
    }

    callBusinessLayer(Token:any):Promise<any>{



        //var myHeaders = new HttpHeaders({'Authorization':'Bearer '+Token});
        //var myHeaders = new HttpHeaders().set('Authorization','Bearer '+Token.slice(2,-2));

        //var headers_object = new HttpHeaders({
           // 'Content-Type': 'application/json',
            // 'Authorization': "Bearer "+Token
       //   });

      // console.log("Token = "+"Bearer "+Token.substring(1,Token.length-1));
      let headers_object:any;
        if(Token!=null){
            headers_object = new HttpHeaders().set('Authorization',"Bearer "+Token.substring(1,Token.length-1));
     
        }else{
            headers_object = new HttpHeaders().set('Authorization',"Bearer "+Token);
     
        }
        
              const httpOptions = {
                headers: headers_object
              };

              const options = {
                headers: new HttpHeaders().append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ1c2VyIiwic2NvcGUiOlsid2ViY2xpZW50Il0sImV4cCI6MTU4NjU3Mjk1NiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6Ijc1ZTk3YmRkLTYyNGQtNGQyNC04OGNkLWMyYWZkMzJkOWE1YiIsImNsaWVudF9pZCI6InBhdGllbnRwb3J0YWwiLCJ1c2VybmFtZSI6InVzZXIiLCJleHRyYUluZm8iOiJUaGUgdXNlciBpcyBhIFBhdGllbnQifQ.Pv1hhF2aClhLl0fZhUte2IqRa8VUNW8rn63Fl2jj47Y'),
                params: new HttpParams().append('key', 'value')
              }

        console.log("myHeaders = "+JSON.stringify(httpOptions));

        return this.http.post('http://localhost:4200/checkUser',
        {} , httpOptions).toPromise().then(this.extractData).catch(this.handleError);


    }

    private extractData(res:Response){
        return res || {};
    }

    private handleError(error:any):Promise<any>{
        return Promise.reject(error.message || error);
    }


}
