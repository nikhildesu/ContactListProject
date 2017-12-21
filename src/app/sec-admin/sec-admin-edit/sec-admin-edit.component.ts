import { Component, OnInit,Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Contact} from '../../service/manageContacts/contact';
import {ManageContactsService} from '../../service/manageContacts/manage-contacts.service'

@Component({
  selector: 'app-sec-admin-edit',
  templateUrl: './sec-admin-edit.component.html',
  styleUrls: ['./sec-admin-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecAdminEditComponent implements OnInit {
  contact: Contact = new Contact();

  constructor(private manageContactsService: ManageContactsService, public dialogRef: MatDialogRef<SecAdminEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.contact= this.data;
  }

  updateContact(){
    console.log('Update request received ' +this.contact.contactName);
    
    
      this.manageContactsService.updateContacts(this.contact).subscribe((data) => console.log(data));
     //this.formSubmitted = true;
     
    this.dialogRef.close("Contact Updated Successfully");
  }

}
