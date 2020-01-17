import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lembrete } from "./lembrete";

const API= 'http://localhost:3000'

@Injectable({ providedIn: 'root' })
export class LembreteService {

    constructor(private http: HttpClient){}

    sendLembrete(lembrete:any){

        return this.http.post(`${API}/lembretes`, lembrete);
    }

    

    listFromUserPaginated(page: number){

        const parametro = new HttpParams()
            .append('_page', page.toString());

        return this.http
            .get<Lembrete[]>(`${API}/lembretes/?_limit=3&`, {params:parametro});

    }
}