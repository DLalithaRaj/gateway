/* eslint-disable no-unused-vars */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  private readonly product: any[] = [];

  constructor(
    @Inject('Product') private readonly productClient: ClientProxy
  ) {}

  getProduct() {
    return this.productClient.send({ cmd: 'get_product' }, {});
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.product.push(createUserRequest);
    this.productClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
  }

 
}
