import { Priority as Priority0 } from './types/priority';
import { Trigger as Trigger0 } from './../types/trigger';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type GoAndGiveItemsToNoteblock = {
	priority?: Priority0;
	listen_time?: number;
	on_item_throw?: Trigger0 | Array<Trigger0>;
	reach_block_distance?: number;
	run_speed?: number;
	throw_force?: number;
	throw_sound?: SoundEvent0;
	vertical_throw_mul?: number;
};
