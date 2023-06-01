import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyInventory } from 'src/Models/myInventoey';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5000/inventory'
  typeUrl = 'http://localhost:5000/type'
  // Dependencies injection 
  constructor(private http:HttpClient) { }
  // get all stocks
    getAllInventory(): Observable<MyInventory>{
      return this.http.get(this.baseUrl)
    }
    viewInventory(sId:string){
      return this.http.get(`${this.baseUrl}/${sId}`)
    }
    getTypeName(tId:string){
      return this.http.get(`${this.typeUrl}/${tId}`)
    }
    getallType(){
      return this.http.get(`${this.typeUrl}`)
    }
    addInventory(itemBody:any) {
      return this.http.post(this.baseUrl,itemBody)
    }
    deteteInventory(inventoryId:any){
      return this.http.delete(`${this.baseUrl}/${inventoryId}`) // path http://localhost:3000/contacts/c2
    }
    updateInventory(inventoryId:any,itemBody:any){
      return this.http.put(`${this.baseUrl}/${inventoryId}`,itemBody)
    }

}
