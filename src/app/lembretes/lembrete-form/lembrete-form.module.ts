import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { LembreteFormComponent } from "./lembrete-form.component";

@NgModule({
    declarations:[
        LembreteFormComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ]
})
export class LembreteFormModule{}