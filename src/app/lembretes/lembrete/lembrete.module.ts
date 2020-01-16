import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LembreteComponent } from "./lembrete.component";

@NgModule({
    declarations: [
        LembreteComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LembreteComponent
    ]
})
export class LembreteModule {}