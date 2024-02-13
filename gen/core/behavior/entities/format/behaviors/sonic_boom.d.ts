import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type SonicBoom = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	attack_cooldown?: number;
	attack_damage?: number;
	attack_range_horizontal?: number;
	attack_range_vertical?: number;
	attack_sound?: SoundEvent0;
	charge_sound?: SoundEvent0;
	duration?: number;
	duration_until_attack_sound?: number;
	knockback_height_cap?: number;
	knockback_horizontal_strength?: number;
	knockback_vertical_strength?: number;
};
