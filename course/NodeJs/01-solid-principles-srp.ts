// Wrong
class Order {
    public create() {
        // this.calculateOrderDiscount
        // this.submitOrderInvoice
    }

    public calculateOrderDiscount() {
        // cálculo do desconto
    }

    public submitOrderInvoice() {
        // emissão da nota
    }
}

// Right
class CalculateOrderDiscount {
    public execute() {
        // cálculo do desconto
    }
}

class SubmitOrderInvoice {
    public execute() {
        // emissão da nota
    }
}

class CreateOrder {
    public execute() {
        // CalculateOrderDiscount
        // SubmitOrderInvoice
    }
}