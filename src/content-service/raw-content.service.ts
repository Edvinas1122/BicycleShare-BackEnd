export interface ContentProvider {
	name: string;
	apiServiceParam: any;
	apiMethod: string;
}

export class ContentProviderService<T> {
	constructor(
		private apiService: T,
		rawContentConfigs: ContentProvider[],
	) {
		for (const config of rawContentConfigs) {
			this[config.name] = async () => {
				const method = this.apiService[config.apiMethod];
				return await method(config.apiServiceParam);
			};
		}
	}
}

// const contentProviders: ContentProvider[] = [
// 	{
// 		name: 'getTermsAndConditions',
// 		apiMethod: 'getBlockChildren',
// 		apiServiceParam: process.env.TERMS_CONDITIONS_PAGE_ID,
// 	},
// 	{
// 		name: 'getHowToUse',
// 		apiMethod: 'getBlockChildren',
// 		apiServiceParam: process.env.TERMS_CONDITIONS_PAGE_ID,
// 	},
// 	{
// 		name: 'getBicycles',
// 		apiMethod: 'getBlockChildren',
// 		apiServiceParam: process.env.BICYCLES_PAGE_ID,
// 	}
// ];

// @Injectable()
// export default class BicycleShareContentService extends ContentProviderService<NotionService> {
// 	constructor(
// 		apiService: NotionService,
// 	) {
// 		super(apiService, contentProviders);
// 	}

// 	async getTermsAndConditions() {
// 		return await this.getTermsAndConditions();
// 	}
// }