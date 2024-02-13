import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { Number3 as Number30 } from './../../../../general/vectors/number3';
import { Event as Event0 } from './../types/event';
export type Projectile = {
	anchor?: number;
	angle_offset?: number;
	catch_fire?: boolean;
	crit_particle_on_hurt?: boolean;
	destroy_on_hurt?: boolean;
	filter?: string;
	fire_affected_by_griefing?: boolean;
	gravity?: number;
	hit_ground_sound?: SoundEvent0;
	hit_sound?: SoundEvent0;
	homing?: boolean;
	inertia?: number;
	is_dangerous?: boolean;
	knockback?: boolean;
	lightning?: boolean;
	liquid_inertia?: number;
	multiple_targets?: boolean;
	mob_effect?: unknown;
	offset?: Number30;
	on_fire_time?: number;
	on_hit?: {
		arrow_effect?: {
			apply_effect_to_blocking_targets?: boolean;
		};
		catch_fire?: boolean;
		definition_event?: {
			affect_projectile?: boolean;
			affect_shooter?: boolean;
			affect_splash_area?: boolean;
			affect_target?: boolean;
			event_trigger?: Event0;
			splash_area?: number;
		};
		douse_fire?: boolean;
		freeze_on_hit?: {
			shape?: 'sphere' | 'cube';
			snap_to_block?: boolean;
			size?: number;
		};
		grant_xp?: {
			minXP?: number;
			maxXP?: number;
		};
		hurt_owner?: {
			owner_damage?: number;
			knockback?: boolean;
			ignite?: boolean;
		};
		ignite?: boolean;
		impact_damage?: {
			catch_fire?: boolean;
			channeling?: boolean;
			damage?: number;
			destroy_on_hit?: boolean;
			destroy_on_hit_requires_damage?: boolean;
			filter?: string;
			knockback?: boolean;
			max_critical_damage?: number;
			min_critical_damage?: number;
			power_multiplier?: number;
			semi_random_diff_damage?: boolean;
			set_last_hurt_requires_damage?: boolean;
		};
		mob_effect?: {
			ambient?: boolean;
			amplifier?: number;
			duration?: number;
			durationeasy?: number;
			durationhard?: number;
			durationnormal?: number;
			effect?: string;
			visible?: boolean;
		};
		on_fire_time?: number;
		particle_on_hit?: {
			num_particles?: number;
			on_entity_hit?: boolean;
			on_other_hit?: boolean;
			particle_type?: string;
		};
		potion_effect?: number;
		remove_on_hit?: {};
		spawn_aoe_cloud?: {
			affect_owner?: boolean;
			color?: Number30;
			duration?: number;
			particle?: string;
			potion?: number;
			radius?: number;
			radius_on_use?: number;
			reapplication_delay?: number;
		};
		spawn_chance?: {
			first_spawn_count?: number;
			first_spawn_percent_chance?: number;
			first_spawn_chance?: number;
			second_spawn_chance?: number;
			second_spawn_count?: number;
			spawn_baby?: boolean;
			spawn_definition?: string;
		};
		stick_in_ground?: {};
		teleport_owner?: boolean;
		thrown_potion_effect?: {};
	};
	particle?: string;
	potion_effect?: number;
	power?: number;
	reflect_on_hurt?: boolean;
	semi_random_diff_damage?: boolean;
	shoot_sound?: SoundEvent0;
	shoot_target?: boolean;
	should_bounce?: boolean;
	splash_potion?: boolean;
	splash_range?: number;
	stop_on_hurt?: boolean;
	uncertainty_base?: number;
	uncertainty_multiplier?: number;
};
