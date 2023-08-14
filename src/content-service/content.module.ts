import { Module } from '@nestjs/common';
import { NotionModule } from '@src/notion-api/api.module';
import BicycleShareContentService from './content.service';
import NotionContentService from './notion-content.service';

@Module({
  imports: [
    NotionModule,
  ],
  providers: [BicycleShareContentService, NotionContentService],
  exports: [BicycleShareContentService],
})
export class ContentModule {}
