import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { LembreteModule } from "./lembrete/lembrete.module";
import { LembreteListModule } from "./lembrete-list/lembrete-list.module";
import { LembreteFormModule } from "./lembrete-form/lembrete-form.module";


@NgModule({
       
    imports: [
        HttpClientModule,
        CommonModule,
        LembreteModule,
        LembreteListModule,
        LembreteFormModule
    ]
})
export class LembretesModule {

}