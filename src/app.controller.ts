import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './dto/create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getProduct();
  }

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    this.appService.createUser(createUserRequest);
  }

  
}
