import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {EuiChartsModule} from "@eui/components/externals/charts";

import { EclAllModule } from '@eui/ecl-core';

@NgModule({
    imports: [
        RouterModule,
        EclAllModule,
        EuiChartsModule,
        TranslateModule,
    ],
    declarations: [
    ],
    exports: [
        RouterModule,
        EclAllModule,
        EuiChartsModule,
        TranslateModule,
    ],
})
export class SharedModule {}
