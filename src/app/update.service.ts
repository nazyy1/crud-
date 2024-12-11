import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

public nextId : number = 21
  private updatData  = new BehaviorSubject<any>([])
  constructor() {
this.loadDataFromStorage()
   }

   getDataFromStorage(){
    const storedData= sessionStorage.getItem('allData')
    return storedData ? JSON.parse(storedData) : []
   }


  getupDataFromApi(){
    return this.updatData.asObservable()
  }

  setUpdateData(upData: any ){
    // console.log('Data being set for update:', upData);
let storedData = this.getDataFromStorage()
const index = storedData.findIndex((x:any)=>x.id ===upData.id)
if(index !==-1){
  storedData[index]=upData
}

else
if (!upData.id) {
  upData.id = this.nextId
}{
  storedData.push(upData); 
  this.nextId ++
  console.log('Id not found to updat data !');
  
  
}
sessionStorage.setItem('allData' , JSON.stringify(storedData))

this.updatData.next(storedData);
  }

  private loadDataFromStorage(){
    const storedData = this.getDataFromStorage();
    if(storedData.length>0){
      this.updatData.next(storedData)

    }
  }
  
}
