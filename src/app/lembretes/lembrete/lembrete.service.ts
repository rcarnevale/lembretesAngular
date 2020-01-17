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
            .get<Lembrete[]>(`${API}/lembretes/?_sort=id&_order=desc&_limit=3&`, {params:parametro});

    }

    deleteLembrete(id:number){

        console.log(id)
        return this.http.delete(`${API}/lembretes/${id}`);
    }

    editLembrete(lembrete){

        return this.http.put(`${API}/lembretes/${lembrete.id}`, lembrete)
    }
}