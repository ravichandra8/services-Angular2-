import{ Injectable } from '@angular/core';
import { IDist } from '../interfaces/Dist';
import {Http} from "@angular/http";

@Injectable()
export class DistService
{
  constructor(private http: Http) {
   this.data=null;
}

getRetrieveData() {
   this.http.get('http://220.225.38.123:8081/LogicShore.svc/GetZoneslistbyDist?District=2060')
   .subscribe(data => {
     this.data = data;
   console.log(data);
   });
 }


  getDistData():IDist[]
  {
    return  [
        {
            "zoneid": "7",
            "zonename": "Bhongir",
            "zonedist":"rck"
        },
        {
            "zoneid": "5",
            "zonename": "L.B.Nagar",
            "zonedist":"rck"
        }
      ];
  }
}
