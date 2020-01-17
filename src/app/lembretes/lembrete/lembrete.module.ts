import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LembreteComponent } from "./lembrete.component";
import { LembreteModalModule } from "../lembrete-list/lembrete-modal/lembrete-modal.module";


@NgModule({
    declarations: [
        LembreteComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        LembreteModalModule
        
    ],
    exports: [
        LembreteComponent
    ]
})
export class LembreteModule {}