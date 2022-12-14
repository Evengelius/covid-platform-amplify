import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ProductComponent} from './components/core/product/product.component';
import {FooterComponent} from './components/include/footer/footer.component';
import {DashboardComponent} from './components/core/dashboard/dashboard.component';
import {AppRoutingModule} from './routing/app-routing.module';
import {AppStarterService} from './service/app-starter.service';
import {DataTablesModule} from 'angular-datatables';
import { DistributorComponent } from './components/core/distributor/distributor.component';
import { ReportComponent } from './components/core/report/report.component';
import { SupplierComponent } from './components/core/supplier/supplier.component';
import { WarehouseComponent } from './components/core/warehouse/warehouse.component';
import { ManufacturerComponent } from './components/core/manufacturer/manufacturer.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductComponent,
        ManufacturerComponent,
        WarehouseComponent,
        SupplierComponent,
        DistributorComponent,
        ReportComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        DataTablesModule,
        AppRoutingModule,
    ],
    providers: [
        AppStarterService,
        {
            provide: APP_INITIALIZER,
            useFactory: (appStarterService) => () => new Promise<void>((resolve) => {
                appStarterService.start().subscribe(() => resolve());
            }),
            deps: [AppStarterService],
            multi: true
        },
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {
}
