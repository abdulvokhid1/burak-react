import { serverApi } from "../../lib/config";
import axios from "axios";

class OrderService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
}

export default OrderService;
