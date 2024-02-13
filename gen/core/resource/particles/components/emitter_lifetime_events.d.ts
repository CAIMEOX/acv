export type EmitterLifetimeEvents = {
	creation_event?: Array<string> | string;
	expiration_event?: Array<string> | string;
	timeline?: {
		[prop: string]: Array<string> | string;
	};
	travel_distance_events?: {};
	looping_travel_distance_events?: Array<{
		distance?: number;
		effects?: Array<string> | string;
	}>;
};
