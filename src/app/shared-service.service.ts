import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  customerProposalList: any;

  constructor() { }

  setCustomerProposal(details: any) {
    this.customerProposalList = details;
    console.log(details);
    
  }
  getCustomerProposal() {
    return this.customerProposalList
  }
}
