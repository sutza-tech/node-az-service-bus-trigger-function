export interface CompilationDTO {
    id: number;
    edition: Date;
    creation: Date;
    status: number;
    processor: number;
    service: number;
    organization: number;
    ride?: any;
    rideCreation?: any;
}