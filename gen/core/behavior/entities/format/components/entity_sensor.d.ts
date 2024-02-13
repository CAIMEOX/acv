import { Filters as Filters0 } from './../../filters/filters';
export declare namespace Def {
	type SensorElement = {
		maximum_count?: number;
		minimum_count?: number;
		require_all?: boolean;
		sensor_range?: number;
		event_filters?: Filters0;
		event?: string;
		cooldown?: number;
	};
}
export type EntitySensor = {} & (
	| (Def.SensorElement & {
			relative_range?: boolean;
	  })
	| {
			subsensors?: Array<Def.SensorElement>;
			relative_range?: boolean;
	  }
);
