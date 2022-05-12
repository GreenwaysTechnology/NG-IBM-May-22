import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermasterComponent } from './usermaster.component';
import { SharedModule } from '../shared/shared.module';
import { AddressComponent } from './address.component';
import { CompanyComponent } from './company.component';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [
    UsermasterComponent,
    AddressComponent,
    CompanyComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    UsermasterComponent,
    AddressComponent,
    CompanyComponent,
    UsersListComponent
  ]
})
export class UsersModule { }
