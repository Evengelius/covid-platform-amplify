import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HeaderComponent} from './components/include/header/header.component';
import {ProductComponent} from './components/core/product/product.component';
import {ManufacturingComponent} from './components/core/manufacturing/manufacturing.component';
import {ContractsComponent} from './components/core/contracts/contracts.component';
import {FooterComponent} from './components/include/footer/footer.component';
import {DashboardComponent} from './components/core/dashboard/dashboard.component';
import {SidebarComponent} from './components/navigation/sidebar/sidebar.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {AppStarterService} from "./service/app-starter.service";
import {DataTablesModule} from "angular-datatables";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        DashboardComponent,
        ProductComponent,
        ContractsComponent,
        ManufacturingComponent,
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
