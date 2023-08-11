import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from './content-service/content.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		ContentModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
