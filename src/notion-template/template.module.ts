import { Module } from '@nestjs/common';
import TemplateService from './template.service';
import { NotionModule } from '@src/notion-api/api.module';

@Module({
  imports: [
    NotionModule,
  ],
  providers: [TemplateService],
})
export class TemplateModule {}
