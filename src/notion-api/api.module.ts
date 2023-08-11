import { Module } from '@nestjs/common';
import NotionAPI from './api';
import NotionService from './api.service';

@Module({
  imports: [],
  providers: [NotionAPI, NotionService],
  exports: [NotionService],
})
export class NotionModule {}