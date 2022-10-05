import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from '../components/core/dashboard/dashboard.component';
import {ProductComponent} from '../components/core/product/product.component';
import {WarehouseComponent} from '../components/core/warehouse/warehouse.component';
import {ManufacturerComponent} from '../components/core/manufacturer/manufacturer.component';
import {SupplierComponent} from '../components/core/supplier/supplier.component';
import {DistributorComponent} from '../components/core/distributor/distributor.component';
import {ReportComponent} from '../components/core/report/report.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: 'product',
        component: ProductComponent,
        pathMatch: 'full'
    },
    {
        path: 'manufacturer',
        component: ManufacturerComponent,
        pathMatch: 'full'
    },
    {
        path: 'warehouse',
        component: WarehouseComponent,
        pathMatch: 'full'
    },
    {
        path: 'supplier',
        component: SupplierComponent,
        pathMatch: 'full'
    },
    {
        path: 'distributor',
        component: DistributorComponent,
        pathMatch: 'full'
    },
    {
        path: 'report',
        component: ReportComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule {}
