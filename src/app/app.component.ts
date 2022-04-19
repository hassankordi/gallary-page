import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scaleflex';

  imagesArray: any = []
  imgObj:any = {}
  imgIndex:any ;
  toggleDialog: boolean = false

  constructor(private _imageService: ImagesService) {


    // get images 
    this._imageService.getImages().subscribe((res) => {
      console.log(res);
      
      this.imagesArray = res

    } , (err)=>{
      console.log(err);
      
    })
  }


  openDialog( index: any) {
   this.imgObj= this.imagesArray[index]
   this.imgIndex = index
   
  }

 
  slideRight(){
    this.imgIndex = this.imgIndex+1
    if(this.imgIndex >= this.imagesArray.length){
      this.imgIndex = 0
    }
    this.imgObj = this.imagesArray[this.imgIndex]
  }
  slideLeft(){
    this.imgIndex = this.imgIndex-1
    if(this.imgIndex < 0){
      this.imgIndex = this.imagesArray.length-1
    }
    this.imgObj = this.imagesArray[this.imgIndex]
  
  }
  ngOnInit(): void {

  }

}
