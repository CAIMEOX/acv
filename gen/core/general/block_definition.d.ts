export type BlockDefinition = {
	name?: string;
	states?: {
		[prop: string]: string | boolean | number;
	};
};
