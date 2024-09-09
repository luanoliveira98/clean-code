import { PostgresOrdersRepository } from './repositories/postgres/postgres-orders-repository';
import { SubmitOrder } from "./use-cases/submit-order";

const submitOrder = new SubmitOrder(new PostgresOrdersRepository());

submitOrder.execute({
    customerDocument: "123.456.789-10",
    total: 1000
});