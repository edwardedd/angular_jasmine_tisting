import { TestBed } from "@angular/core/testing";
import { any } from "cypress/types/bluebird";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', ()=>{

  let calculator: CalculatorService,
  loggerSpy:any;

  beforeEach(() => {
    console.log("Calling before");


    loggerSpy = jasmine.createSpyObj('LoggerService',["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    })

    calculator = TestBed.get(CalculatorService);
  })

  it('should add two numbers', ()=> {
    console.log("Add ");
    const result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  });

  it('should subtract two numbers', ()=> {
    console.log("subtract");
    const result = calculator.subtract(2,2);
    expect(result).toBe(0);
  });
})
