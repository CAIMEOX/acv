import { Identifier as Identifier0 } from './../../../../general/loot_table/identifier';
import { Trigger as Trigger0 } from './../types/trigger';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export declare namespace Def {
	type InteractionSpec = {
		add_items?: {
			table?: Identifier0;
		};
		cooldown?: number;
		admire?: boolean;
		barter?: boolean;
		cooldown_after_being_attacked?: number;
		health_amount?: number;
		hurt_item?: number;
		interact_text?: string;
		on_interact?: Trigger0;
		particle_on_start?: {
			particle_offset_towards_interactor?: boolean;
			particle_type?: string;
			particle_y_offset?: number;
		};
		play_sounds?: SoundEvent0;
		spawn_entities?: string;
		spawn_items?: {
			table?: Identifier0;
		};
		swing?: boolean;
		transform_to_item?: string;
		use_item?: boolean;
		vibration?: string;
		give_item?: boolean;
		take_item?: boolean;
		drop_item_slot?: number;
		equip_item_slot?: number;
	};
}
export type Interact = {
	interactions?: Def.InteractionSpec | Array<Def.InteractionSpec>;
};
