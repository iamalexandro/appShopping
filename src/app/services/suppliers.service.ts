import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor() { }

	getSuppliers() {
		return 'Message from service';
	}
}
