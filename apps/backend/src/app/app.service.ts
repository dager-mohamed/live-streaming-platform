import { Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';

@Injectable()
export class AppService {
  getData() {
    return clerkClient.users.getUserList();
  }
}
