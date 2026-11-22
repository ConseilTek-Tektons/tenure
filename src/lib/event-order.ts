export type WorkerEvent={id:string;effectiveAt:string;receivedAt:string};
export function orderWorkerEvents(events:WorkerEvent[]){return [...events].sort((a,b)=>a.effectiveAt.localeCompare(b.effectiveAt)||a.receivedAt.localeCompare(b.receivedAt)||a.id.localeCompare(b.id));}
