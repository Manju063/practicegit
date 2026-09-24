//abstract class
//RBI class extends bank class
abstract class RBI {
    abstract getRateOfInterest(): number;
    loan(): void {
       
    }
    debitCard(): void {
        
    }
    creditCard(): void {

    }   
}

class HDFC extends RBI {
    getRateOfInterest(): number {
        return 7.5;
    }
    getLoanDetails(): void {
        console.log("HDFC Loan Details");
    }   
    getDebitCardDetails(): void {
        console.log("HDFC Debit Card Details");
    }   
}

class ICICI extends RBI {
    getRateOfInterest(): number {
        return 8.0;
    } 
    getLoanDetails(): void {
        console.log("ICICI Loan Details");
    }
    getDebitCardDetails(): void {
        console.log("ICICI Debit Card Details");
    }
}