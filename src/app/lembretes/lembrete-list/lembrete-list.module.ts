import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { LoadButtonComponent } from "./load-button/load-button.component";
import { LembretesComponent } from "./lembretes/lembretes.component";
import { LembreteListComponent } from "./lembrete-list.component";
import { filterByDescription } from "./filterByDescription.pipe";
import { LembreteModule } from "../lembrete/lembrete.module";


@NgModule({
    declarations:[
        LembreteListComponent,
        LembretesComponent,
        LoadButtonComponent,
        filterByDescription
    ],
    imports:[
        CommonModule,
        LembreteModule,
        FormsModule,
        NgbModule
        
    ]
})
export class LembreteListModule {}