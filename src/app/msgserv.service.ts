import { Injectable } from '@angular/core';
import { ProductService } from './shopping/product.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MsgservService {
  messages = new Subject<any>();
  constructor() {
   
   }

}
