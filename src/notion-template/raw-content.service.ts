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