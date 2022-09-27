import { KiyafetTableComponent } from './components/kiyafet-table/kiyafet-table.component';
import { HomeComponent } from './components/home/home.component';
import { TableInputComponent } from './components/table-input/table-input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: '', component: KiyafetTableComponent },
  { path: 'kiyafet', component: KiyafetTableComponent },
  { path: 'order-table', component: OrderTableComponent },
  { path: 'suppliers', component: SuppliersComponent },

  // { path: 'bagis', component: BagisComponent },
  // { path: 'bagis-grid', component: BagisGridComponent },
  // { path: 'bagis/:id', component: BagisComponent },
  // { path: 'bagis-update', component: BagisUpdateComponent },
  // { path: 'grid', component: GridComponent },
  // { path: '', component: AboutComponent },];
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
