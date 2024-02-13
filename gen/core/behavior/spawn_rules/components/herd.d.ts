export declare namespace Def {
	type Herd = {
		initial_event?: string;
		initial_event_count?: number;
		min_size?: number;
		max_size?: number;
		event?: string;
		event_skip_count?: number;
	};
}
export type Herd = Def.Herd | Array<Def.Herd>;
