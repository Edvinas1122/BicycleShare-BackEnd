import { Module } from '@nestjs/common';
import TemplateService from './template.service';

@Module({
  imports: [
  ],
  providers: [TemplateService],
})
export class TemplateModule {}
