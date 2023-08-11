import { Module } from '@nestjs/common';
import NotionService from './api.service';
import NotionAPI from './api';

@Module({
  imports: [],
//   controllers: [AppController],
  providers: [NotionService, NotionAPI,  ],
  exports: [NotionService],
})
export class NotionModule {}