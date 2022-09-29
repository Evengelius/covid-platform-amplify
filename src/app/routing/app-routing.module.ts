import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../components/core/dashboard/dashboard.component";
import {ProductComponent} from "../components/core/product/product.component";
import {ContractsComponent} from "../components/core/contracts/contracts.component";
import {ManufacturingComponent} from "../components/core/manufacturing/manufacturing.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductComponent,
        pathMatch: 'full'
    },
    {
        path: 'contracts',
        component: ContractsComponent,
        pathMatch: 'full'
    },
    {
        path: 'manufacturing',
        component: ManufacturingComponent,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
})
export class AppRoutingModule {}
