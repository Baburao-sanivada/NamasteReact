import { sum } from "../sum";
test("Checking the Sum Function",()=>{
    const res=sum(5,3);
    expect(res).toBe(8);
})