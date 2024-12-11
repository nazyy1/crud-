import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {  Router } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{


  public allData :any = []; 
  count : number = 21
  constructor(private ser : ApiService ,
    private updateser : UpdateService , 
     private route : Router , 
   ){

  }
  goToLogin() {
    this.route.navigate(['/login'])
    
    }
  ngOnInit(): void {

//using local storage 
this.toUpdateData() 
; 
this.getDataViaService() ; 

  }
  getDataViaService(){
    // this.ser.getApiData().subscribe((res:any)=>{
    //     this.allData = res 
    // })
    const storedData= this.updateser.getDataFromStorage()
    if(storedData.length === 0){
      this.ser.getApiData().subscribe((res:any)=>{
        this.allData = res
        sessionStorage.setItem('allData' , JSON.stringify(res))
      })
    } else{
      this.allData = storedData
    }
  }

  toUpdateData() {
    this.updateser.getupDataFromApi().subscribe((updatedData:any)=>{
      console.log('updated data recieved !' , updatedData);
      
      if(updatedData){ const index = this.allData.findIndex((data:any)=>(data.id) ===(updatedData.id)) ; 
        if (index !==-1){
this.allData[index]= updatedData
sessionStorage.setItem('allData' , JSON.stringify(this.allData))
console.log('Updated Data ,' ,updatedData);

        }
       
       
      } 
    
    })

  }
  onEdit(id: any ){
// console.log(id );
this.route.navigate(['update/' , id ])

  }

  onDelete(data: any ){
    const index = this.allData.findIndex((x:any)=> x.id == data.id)
   
 if (index !== -1){
  if(  confirm('are you sure You want to Delete this data ?')){

  this.ser.deleteApiData(data.id).subscribe((res:any)=>{
    console.log(res);
    
    this.allData.splice(index , 1)
    //updated to local storage 
    sessionStorage.setItem('allData' , JSON.stringify(this.allData))
  })}
 } else {
  console.error('An error occured !' )
 }
  
  }

  // AddNewData(){
  //   this.updateser.getupDataFromApi().subscribe((AddedData:any)=>{
  //     if(AddedData){
       
  //       this.allData.push(AddedData)

    
  //       sessionStorage.setItem('allData', JSON.stringify(this.allData));

  //       this.updateser.setUpdateData(AddedData)
  //       console.log('New Data' , AddedData);
        
  //     }
  //    })
  // }
  updateWithLocalStorage(){
    sessionStorage.setItem('allData' , JSON.stringify(this.allData))
  }
}
