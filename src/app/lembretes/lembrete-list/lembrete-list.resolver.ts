import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";
import { Lembrete } from "../lembrete/lembrete";
import { LembreteService } from "../lembrete/lembrete.service";

@Injectable({providedIn: "root"})
export class LembreteListResolver implements Resolve<Observable<Lembrete[]>>{

    constructor(private service: LembreteService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        return this.service.listFromUserPaginated(1);
    }
}