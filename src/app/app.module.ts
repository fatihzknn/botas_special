import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { TableInputComponent } from './components/table-input/table-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient ,HttpClientModule} from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio'
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TableInputUpdateComponent } from './table-input-update/table-input-update.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ClothesTableComponent } from './components/clothes-table/clothes-table.component';
import { ClothesInputComponent } from './components/clothes-input/clothes-input.component';
import { ClothesInputUpdateComponent } from './components/clothes-input-update/clothes-input-update.component';
import { MessageComponent } from './components/message/message.component';
import { KiyafetTableComponent } from './components/kiyafet-table/kiyafet-table.component';
import { HomeComponent } from './components/home/home.component';
import { LeftbaComponent } from './components/leftba/leftba.component'
import { MatListModule } from '@angular/material/list';
import { KiyafetUpdateComponent } from './components/kiyafet-update/kiyafet-update.component';
import { KiyafetInputComponent } from './components/kiyafet-input/kiyafet-input.component';
import { OrderInputComponent } from './components/order-input/order-input.component';
import { KiyafetFeaturesComponent } from './components/kiyafet-features/kiyafet-features.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { KiyafetFeaturesInputComponent } from './components/kiyafet-features-input/kiyafet-features-input.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SuppliersInputComponent } from './components/suppliers-input/suppliers-input.component';
import { SupplierInputUpdateComponent } from './components/supplier-input-update/supplier-input-update.component';
import { OrderUpdateComponent } from './components/order-update/order-update.component';
import { FeaturesAddComponent } from './components/features-add/features-add.component';
import { FeaturesInputComponent } from './components/features-input/features-input.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    TableInputComponent,
    TableInputUpdateComponent,
    ClothesTableComponent,
    ClothesInputComponent,
    ClothesInputUpdateComponent,
    MessageComponent,
    KiyafetTableComponent,
    HomeComponent,
    LeftbaComponent,
    KiyafetUpdateComponent,
    KiyafetInputComponent,
    OrderInputComponent,
    KiyafetFeaturesComponent,
    OrderTableComponent,
    KiyafetFeaturesInputComponent,
    SuppliersComponent,
    SuppliersInputComponent,
    SupplierInputUpdateComponent,
    OrderUpdateComponent,
    FeaturesAddComponent,
    FeaturesInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,   
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    NgbModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatRadioModule,
    MatListModule,
    
    

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
