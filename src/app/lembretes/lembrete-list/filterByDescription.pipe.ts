import { Pipe, PipeTransform } from "@angular/core";
import { Lembrete } from "../lembrete/lembrete";

@Pipe({ name: 'filterByDescription'})
export class filterByDescription implements PipeTransform {

    transform(lembretes: Lembrete[], descriptionQuery: string){
        
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery){

            return lembretes.filter(lembrete => 
                lembrete.texto.toLowerCase().includes(descriptionQuery)
                )
        }else{
            return lembretes;
        }
    }
}