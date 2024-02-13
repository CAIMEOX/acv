import { Filters as Filters0 } from './../../filters/filters';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export declare namespace Def {
	type EntitySpawn = {
		filters?: Filters0;
		max_wait_time?: number;
		min_wait_time?: number;
		num_to_spawn?: number;
		should_leash?: boolean;
		single_use?: boolean;
		spawn_entity?: string;
		spawn_event?: string;
		spawn_item?: Descriptor0;
		spawn_method?: string;
		spawn_sound?: SoundEvent0;
	};
}
export type SpawnEntity = {
	entities?: Def.EntitySpawn | Array<Def.EntitySpawn>;
};
