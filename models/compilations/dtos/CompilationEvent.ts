import { CompilationDTO } from './CompilationDTO';
import { AggregateId } from '../vo/AggregateId';
import { EventId } from '../vo/EventId';

export interface CompilationEvent {
    aggregateId: AggregateId;
    eventId: EventId;
    occurredOn: Date;
    eventName: string;
    compilation: CompilationDTO;
}