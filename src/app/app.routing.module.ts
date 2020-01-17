import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { LembreteListComponent} from "./lembretes/lembrete-list/lembrete-list.component";
import { LembreteListResolver } from "./lembretes/lembrete-list/lembrete-list.resolver";

const routes: Routes = [
    {
        path: '', 
        component: LembreteListComponent, 
        resolve:{
            lembretes: LembreteListResolver
        }
    },
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]

})
export class AppRoutingModule {}