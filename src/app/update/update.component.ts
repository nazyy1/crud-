import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
public myform : any 
constructor(private fb: FormBuilder , 
  private ser : ApiService , 
  private router : Router , private actRout: ActivatedRoute , 
private Updser : UpdateService){
this.myform = this.fb.group({
  id : [''  ] , 
  title : [''] , 
  price : [''] , 
  description : [''] , 
  category : [''] , 
  image: ['',]
})
}

ngOnInit(): void {
  const id = this.actRout.snapshot.paramMap.get('id')
  this.ser.getDataById(id).subscribe((res:any)=>{
    console.log(res);
    this.myform.patchValue(res)
    
  })
}

onSubmit (){
  const data = this.myform.value

this.ser.UpdateApiData(data).subscribe((res:any)=>{
  console.log('updated data !' , res);

this.Updser.setUpdateData(res)
  this.router.navigateByUrl('/products')
})

}


}
