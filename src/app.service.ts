import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  add(num1: number, num2: number) {
    return eval(`${num1} + ${num2}`)
  }

  sub(num1, num2) {
    return num1 - num2;
  }

  mul(num1, num2) {
    return num1 * num2;
  }

  div(num1, num2) {
    return num1 / num2
  }

  getHello(): string {
    return 'Hello World!';
  }
}
