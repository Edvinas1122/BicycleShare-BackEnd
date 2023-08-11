import { Injectable } from "@nestjs/common";
import { ContentProviderService, ContentProvider } from "./raw-content.service";
import NotionAPI from "@src/notion-api/api";

/*
	Provides RAW data from Expected (Bicycle Share Template) template

*/

const contentProviders: ContentProvider[] = [
	{
		name: 'getTermsAndConditions',
		apiMethod: 'getBlockChildren',
		apiServiceParam: process.env.TERMS_CONDITIONS_PAGE_ID,
	},
	{
		name: 'getHowToUse',
		apiMethod: 'getBlockChildren',
		apiServiceParam: process.env.TERMS_CONDITIONS_PAGE_ID,
	},
	{
		name: 'getBicycles',
		apiMethod: 'getBlockChildren',
		apiServiceParam: process.env.BICYCLES_PAGE_ID,
	}
];

@Injectable()
export default class BicycleShareContentService extends ContentProviderService<NotionAPI> {
	constructor(
		apiService: NotionAPI,
	) {
		super(apiService, contentProviders);
	}
}