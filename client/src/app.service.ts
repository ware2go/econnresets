import { Injectable, HttpService } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AxiosError } from 'axios';
import { httpAgent } from './app.module'

let count = 0;

// server
const url = 'http://localhost:3000'

function formatDate(date) {
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  // @Cron('* * * * * *')
  // handleCron() {
  //   console.log(JSON.stringify(httpAgent.getCurrentStatus()))
  // }

  async getHello(): Promise<string> {
    this.logIncomingRequest('(http service)');

    return this.httpService
      .get(url)
      .toPromise()
      .then(value => {
        this.logFinished();

        return value.data
      })
      .catch(this.logError);
  }

  logIncomingRequest(prefix) {
    count++;
    console.log(
      `${formatDate(new Date())} | ${prefix} received request ${count}`,
    );
  }

  logFinished() {
    console.log(`${formatDate(new Date())} | finished`);
  }

  logError(err) {
    if (err.isAxiosError) {
      const error = err as AxiosError;
      console.log(`${formatDate(new Date())} | ${error.message}`);
    }
  }
}
