import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

public url : any = 'https://fakestoreapi.com/products'
  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get(this.url)
    
  } 

  deleteApiData(data: any){
 return this.http.delete(this.url +'/' + data)
  }

  getDataById ( id : any ){
return this.http.get(this.url + '/' +id )
  }
  

  UpdateApiData(data: any ){
    return this.http.put( this.url +'/' +data.id , data )
 
    // return this.http.put(`${this.url}/${data.id}`, data);
  }
  }




