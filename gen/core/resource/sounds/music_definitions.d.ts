export declare namespace Def {
	type Music = unknown;
}
export type MusicDefinitions = {
	[prop: string]: {
		event_name: string;
		min_delay?: number;
		max_delay?: number;
	};
};
