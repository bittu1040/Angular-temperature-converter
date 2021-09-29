import { ChangeDetectorRef, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit {
fahrenheit:any;
celsius: any;
temp:any
temp1: any
  constructor() { }

  ngOnInit(): void {
  }


  convertTemp(){
    

 
      this.fahrenheit = ((this.celsius * 9) / 5 + 32).toFixed(1);

    this.celsius = (((this.fahrenheit - 32) * 5) / 9).toFixed(1);
  }


  

  reset(){
    this.celsius=null;
    this.fahrenheit=null;
  }


}

 
