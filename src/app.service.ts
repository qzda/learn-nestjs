import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getIndex(query?: object) {
    return "Hello World!";
  }
}
