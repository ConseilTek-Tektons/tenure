import { describe, expect, it } from "vitest";
import { orderWorkerEvents } from "./event-order";
describe("worker event ordering",()=>{it("orders by effective time before receipt time",()=>{const result=orderWorkerEvents([{id:"exit",effectiveAt:"2026-12-02",receivedAt:"2026-11-01"},{id:"hire",effectiveAt:"2026-12-01",receivedAt:"2026-11-02"}]);expect(result.map((event)=>event.id)).toEqual(["hire","exit"]);});});
