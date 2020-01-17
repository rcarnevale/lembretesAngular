import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { LembreteFormComponent } from "./lembrete-form.component";


@NgModule({
    declarations:[
        LembreteFormComponent,
        
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        FormsModule
    ]
})
export class LembreteFormModule{}