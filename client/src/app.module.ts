import { Module, HttpModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import * as Agent from 'agentkeepalive';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const agentConfig = {
  maxSockets: 1,
  maxFreeSockets: 1,
  timeout: 100 * 1000,
  freeSocketTimeout: 50 * 1000,
}

export const httpAgent = new Agent(agentConfig)

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        httpAgent,
        httpsAgent: new Agent.HttpsAgent(agentConfig),
      }),
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
