import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { Identifier as Identifier0 } from './../../../../general/block/identifier';
export type Transformation = {
	add?: {
		component_groups?: Array<string>;
	};
	begin_transform_sound?: SoundEvent0;
	delay?:
		| number
		| {
				block_assist_chance?: number;
				block_chance?: number;
				block_max?: number;
				block_radius?: number;
				block_types?: Array<Identifier0>;
				value?: number;
		  };
	drop_equipment?: boolean;
	drop_inventory?: boolean;
	into?: string;
	keep_level?: boolean;
	keep_owner?: boolean;
	preserve_equipment?: boolean;
	transformation_sound?: SoundEvent0;
};
