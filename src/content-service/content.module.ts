import { Module } from '@nestjs/common';
import { NotionModule } from '@src/notion-api/api.module';
import BicycleShareContentService from './content.service';

@Module({
  imports: [
    NotionModule,
  ],
  providers: [BicycleShareContentService],
  exports: [BicycleShareContentService],
})
export class ContentModule {}
