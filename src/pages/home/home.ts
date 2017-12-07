import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IDist } from '../../interfaces/Dist';
import { DistService } from '../../services/DistService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DistService]
})
export class HomePage{
    zonedata:IDist[];
    data:Any[];
  constructor(private _DistService:DistService) {

  }
ngOnInit(){
  this.zonedata=this._DistService.getDistData();
  this._DistService.getRetrieveData();

}


}
