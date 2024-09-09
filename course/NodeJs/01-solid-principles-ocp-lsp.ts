// Wrong

// billet, credit, debit
class CalculateOrderDiscountByPaymentMethod {
    public execute(amount: number, paymentMethod: string, installments: number = 1) {
        if (paymentMethod === "billet") {
            return amount * 0.1;
        }
        
        if (paymentMethod === "credit") {
            if (installments === 1) {
                return amount * 0.05;
            }
            
            if (installments <= 6) {
                return amount * 0.02;
            }

            return 0;
        }
        
        if (paymentMethod === "debit") {
            return amount * 0.05;
        }

        return 0;
    }
}

// Right

interface PaymentMethod {
    getDiscountAmount(amount: number): number;
}

class Billet implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.10;
    }
}

class Credit implements PaymentMethod {
    private installments: number;

    constructor(installments: number) {
        this.installments = installments;
    }

    getDiscountAmount(amount: number): number {
        if (this.installments === 1) {
            return amount * 0.05;
        }
        
        if (this.installments <= 6) {
            return amount * 0.02;
        }

        return 0;
    }
}

class Debit implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.05;
    }
}

class Pix implements PaymentMethod {
    getDiscountAmount(amount: number): number {
        return amount * 0.20;
    }
}

class CalculateOrderDiscount {
    private paymentMethod: PaymentMethod

    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public execute(amount: number) {
        return this.paymentMethod.getDiscountAmount(amount);
    }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6));

calculateOrderDiscount.execute(2000);