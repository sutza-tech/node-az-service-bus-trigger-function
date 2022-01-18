import { AzureFunction, Context } from "@azure/functions"
import MySQL from '../core/infra/database/mysql/db';
import { CompilationEvent } from "../models/compilations/dtos/CompilationEvent";

const serviceBusTopicTrigger: AzureFunction = async function(context: Context, mySbMsg: any): Promise<void> {
    let compilationEvent: CompilationEvent = JSON.parse(mySbMsg);

    context.log('ServiceBus topic trigger function processed message: ', mySbMsg);
    context.log('ServiceBus topic trigger function processed message: type', typeof compilationEvent);
    context.log('ServiceBus topic trigger function processed message: eventId', compilationEvent.eventId);
    context.log('ServiceBus topic trigger function processed message: occurredOn', compilationEvent.occurredOn);
    context.log('ServiceBus topic trigger function processed message: Compilation', compilationEvent.compilation);

    const query = `SELECT * FROM library.category limit 1`;

    MySQL.ejecutarQuery(query, (err:any, categories: Object[]) => {
        if(err){
            console.error(err);
        }else{
            console.log('categories: ',categories);
        }
    });

};

export default serviceBusTopicTrigger;
