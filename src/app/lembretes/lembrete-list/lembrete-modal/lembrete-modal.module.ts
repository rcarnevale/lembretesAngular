import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LembreteModalComponent } from "./lembrete-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EditModalComponent } from "./edit-modal.component";


@NgModule({
    declarations:[
        LembreteModalComponent,
        EditModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports:[
        LembreteModalComponent,
        EditModalComponent,
        NgbModule
    ]


})

export class LembreteModalModule {}