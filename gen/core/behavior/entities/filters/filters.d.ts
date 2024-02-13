import { ActorHealth as ActorHealth0 } from './filters/actor_health';
import { AllSlotsEmpty as AllSlotsEmpty0 } from './filters/all_slots_empty';
import { AnySlotsEmpty as AnySlotsEmpty0 } from './filters/any_slots_empty';
import { BoolProperty as BoolProperty0 } from './filters/bool_property';
import { ClockTime as ClockTime0 } from './filters/clock_time';
import { DistanceToNearestPlayer as DistanceToNearestPlayer0 } from './filters/distance_to_nearest_player';
import { EnumProperty as EnumProperty0 } from './filters/enum_property';
import { FloatProperty as FloatProperty0 } from './filters/float_property';
import { HasAbility as HasAbility0 } from './filters/has_ability';
import { HasBiomeTag as HasBiomeTag0 } from './filters/has_biome_tag';
import { HasComponent as HasComponent0 } from './filters/has_component';
import { HasContainerOpen as HasContainerOpen0 } from './filters/has_container_open';
import { HasDamage as HasDamage0 } from './filters/has_damage';
import { HasEquipment as HasEquipment0 } from './filters/has_equipment';
import { HasMobEffect as HasMobEffect0 } from './filters/has_mob_effect';
import { HasNametag as HasNametag0 } from './filters/has_nametag';
import { HasProperty as HasProperty0 } from './filters/has_property';
import { HasRangedWeapon as HasRangedWeapon0 } from './filters/has_ranged_weapon';
import { HasSilkTouch as HasSilkTouch0 } from './filters/has_silk_touch';
import { HasTag as HasTag0 } from './filters/has_tag';
import { HasTarget as HasTarget0 } from './filters/has_target';
import { HasTradeSupply as HasTradeSupply0 } from './filters/has_trade_supply';
import { HourlyClockTime as HourlyClockTime0 } from './filters/hourly_clock_time';
import { InBlock as InBlock0 } from './filters/in_block';
import { InCaravan as InCaravan0 } from './filters/in_caravan';
import { InClouds as InClouds0 } from './filters/in_clouds';
import { InContactWithWater as InContactWithWater0 } from './filters/in_contact_with_water';
import { InLava as InLava0 } from './filters/in_lava';
import { InNether as InNether0 } from './filters/in_nether';
import { InOverworld as InOverworld0 } from './filters/in_overworld';
import { InWaterOrRain as InWaterOrRain0 } from './filters/in_water_or_rain';
import { InWater as InWater0 } from './filters/in_water';
import { InactivityTimer as InactivityTimer0 } from './filters/inactivity_timer';
import { IntProperty as IntProperty0 } from './filters/int_property';
import { IsAltitude as IsAltitude0 } from './filters/is_altitude';
import { IsAvoidingMobs as IsAvoidingMobs0 } from './filters/is_avoiding_mobs';
import { IsBiome as IsBiome0 } from './filters/is_biome';
import { IsBlock as IsBlock0 } from './filters/is_block';
import { IsBrightness as IsBrightness0 } from './filters/is_brightness';
import { IsClimbing as IsClimbing0 } from './filters/is_climbing';
import { IsColor as IsColor0 } from './filters/is_color';
import { IsDaytime as IsDaytime0 } from './filters/is_daytime';
import { IsDifficulty as IsDifficulty0 } from './filters/is_difficulty';
import { IsFamily as IsFamily0 } from './filters/is_family';
import { IsGameRule as IsGameRule0 } from './filters/is_game_rule';
import { IsHumid as IsHumid0 } from './filters/is_humid';
import { IsImmobile as IsImmobile0 } from './filters/is_immobile';
import { IsInVillage as IsInVillage0 } from './filters/is_in_village';
import { IsLeashedTo as IsLeashedTo0 } from './filters/is_leashed_to';
import { IsLeashed as IsLeashed0 } from './filters/is_leashed';
import { IsMarkVariant as IsMarkVariant0 } from './filters/is_mark_variant';
import { IsMissingHealth as IsMissingHealth0 } from './filters/is_missing_health';
import { IsMoving as IsMoving0 } from './filters/is_moving';
import { IsOwner as IsOwner0 } from './filters/is_owner';
import { IsPersistent as IsPersistent0 } from './filters/is_persistent';
import { IsRiding as IsRiding0 } from './filters/is_riding';
import { IsSkinId as IsSkinId0 } from './filters/is_skin_id';
import { IsSleeping as IsSleeping0 } from './filters/is_sleeping';
import { IsSneakHeld as IsSneakHeld0 } from './filters/is_sneak_held';
import { IsSneaking as IsSneaking0 } from './filters/is_sneaking';
import { IsSnowCovered as IsSnowCovered0 } from './filters/is_snow_covered';
import { IsTarget as IsTarget0 } from './filters/is_target';
import { IsTemperatureType as IsTemperatureType0 } from './filters/is_temperature_type';
import { IsTemperatureValue as IsTemperatureValue0 } from './filters/is_temperature_value';
import { IsUnderground as IsUnderground0 } from './filters/is_underground';
import { IsUnderwater as IsUnderwater0 } from './filters/is_underwater';
import { IsVariant as IsVariant0 } from './filters/is_variant';
import { IsVisible as IsVisible0 } from './filters/is_visible';
import { IsWaterlogged as IsWaterlogged0 } from './filters/is_waterlogged';
import { LightLevel as LightLevel0 } from './filters/light_level';
import { MoonIntensity as MoonIntensity0 } from './filters/moon_intensity';
import { MoonPhase as MoonPhase0 } from './filters/moon_phase';
import { OnGround as OnGround0 } from './filters/on_ground';
import { OnLadder as OnLadder0 } from './filters/on_ladder';
import { RandomChance as RandomChance0 } from './filters/random_chance';
import { RiderCount as RiderCount0 } from './filters/rider_count';
import { SurfaceMob as SurfaceMob0 } from './filters/surface_mob';
import { TakingFireDamage as TakingFireDamage0 } from './filters/taking_fire_damage';
import { TargetDistance as TargetDistance0 } from './filters/target_distance';
import { Trusts as Trusts0 } from './filters/trusts';
import { WeatherAtPosition as WeatherAtPosition0 } from './filters/weather_at_position';
import { Weather as Weather0 } from './filters/weather';
export declare namespace Def {
	type FiltersSpec =
		| {
				all_of?: Def.GroupsSpec;
				any_of?: Def.GroupsSpec;
				none_of?: Def.GroupsSpec;
		  }
		| ({
				all_of?: Def.GroupsSpec;
				any_of?: Def.GroupsSpec;
				none_of?: Def.GroupsSpec;
		  } & (
				| ({
						test: 'actor_health';
				  } & ActorHealth0)
				| ({
						test: 'all_slots_empty';
				  } & AllSlotsEmpty0)
				| ({
						test: 'any_slots_empty';
				  } & AnySlotsEmpty0)
				| ({
						test: 'bool_property';
				  } & BoolProperty0)
				| ({
						test: 'clock_time';
				  } & ClockTime0)
				| ({
						test: 'distance_to_nearest_player';
				  } & DistanceToNearestPlayer0)
				| ({
						test: 'enum_property';
				  } & EnumProperty0)
				| ({
						test: 'float_property';
				  } & FloatProperty0)
				| ({
						test: 'has_ability';
				  } & HasAbility0)
				| ({
						test: 'has_biome_tag';
				  } & HasBiomeTag0)
				| ({
						test: 'has_component';
				  } & HasComponent0)
				| ({
						test: 'has_container_open';
				  } & HasContainerOpen0)
				| ({
						test: 'has_damage';
				  } & HasDamage0)
				| ({
						test: 'has_equipment';
				  } & HasEquipment0)
				| ({
						test: 'has_mob_effect';
				  } & HasMobEffect0)
				| ({
						test: 'has_nametag';
				  } & HasNametag0)
				| ({
						test: 'has_property';
				  } & HasProperty0)
				| ({
						test: 'has_ranged_weapon';
				  } & HasRangedWeapon0)
				| ({
						test: 'has_silk_touch';
				  } & HasSilkTouch0)
				| ({
						test: 'has_tag';
				  } & HasTag0)
				| ({
						test: 'has_target';
				  } & HasTarget0)
				| ({
						test: 'has_trade_supply';
				  } & HasTradeSupply0)
				| ({
						test: 'hourly_clock_time';
				  } & HourlyClockTime0)
				| ({
						test: 'in_block';
				  } & InBlock0)
				| ({
						test: 'in_caravan';
				  } & InCaravan0)
				| ({
						test: 'in_clouds';
				  } & InClouds0)
				| ({
						test: 'in_contact_with_water';
				  } & InContactWithWater0)
				| ({
						test: 'in_lava';
				  } & InLava0)
				| ({
						test: 'in_nether';
				  } & InNether0)
				| ({
						test: 'in_overworld';
				  } & InOverworld0)
				| ({
						test: 'in_water_or_rain';
				  } & InWaterOrRain0)
				| ({
						test: 'in_water';
				  } & InWater0)
				| ({
						test: 'inactivity_timer';
				  } & InactivityTimer0)
				| ({
						test: 'int_property';
				  } & IntProperty0)
				| ({
						test: 'is_altitude';
				  } & IsAltitude0)
				| ({
						test: 'is_avoiding_mobs';
				  } & IsAvoidingMobs0)
				| ({
						test: 'is_biome';
				  } & IsBiome0)
				| ({
						test: 'is_block';
				  } & IsBlock0)
				| ({
						test: 'is_brightness';
				  } & IsBrightness0)
				| ({
						test: 'is_climbing';
				  } & IsClimbing0)
				| ({
						test: 'is_color';
				  } & IsColor0)
				| ({
						test: 'is_daytime';
				  } & IsDaytime0)
				| ({
						test: 'is_difficulty';
				  } & IsDifficulty0)
				| ({
						test: 'is_family';
				  } & IsFamily0)
				| ({
						test: 'is_game_rule';
				  } & IsGameRule0)
				| ({
						test: 'is_humid';
				  } & IsHumid0)
				| ({
						test: 'is_immobile';
				  } & IsImmobile0)
				| ({
						test: 'is_in_village';
				  } & IsInVillage0)
				| ({
						test: 'is_leashed_to';
				  } & IsLeashedTo0)
				| ({
						test: 'is_leashed';
				  } & IsLeashed0)
				| ({
						test: 'is_mark_variant';
				  } & IsMarkVariant0)
				| ({
						test: 'is_missing_health';
				  } & IsMissingHealth0)
				| ({
						test: 'is_moving';
				  } & IsMoving0)
				| ({
						test: 'is_owner';
				  } & IsOwner0)
				| ({
						test: 'is_persistent';
				  } & IsPersistent0)
				| ({
						test: 'is_riding';
				  } & IsRiding0)
				| ({
						test: 'is_skin_id';
				  } & IsSkinId0)
				| ({
						test: 'is_sleeping';
				  } & IsSleeping0)
				| ({
						test: 'is_sneak_held';
				  } & IsSneakHeld0)
				| ({
						test: 'is_sneaking';
				  } & IsSneaking0)
				| ({
						test: 'is_snow_covered';
				  } & IsSnowCovered0)
				| ({
						test: 'is_target';
				  } & IsTarget0)
				| ({
						test: 'is_temperature_type';
				  } & IsTemperatureType0)
				| ({
						test: 'is_temperature_value';
				  } & IsTemperatureValue0)
				| ({
						test: 'is_underground';
				  } & IsUnderground0)
				| ({
						test: 'is_underwater';
				  } & IsUnderwater0)
				| ({
						test: 'is_variant';
				  } & IsVariant0)
				| ({
						test: 'is_visible';
				  } & IsVisible0)
				| ({
						test: 'is_waterlogged';
				  } & IsWaterlogged0)
				| ({
						test: 'light_level';
				  } & LightLevel0)
				| ({
						test: 'moon_intensity';
				  } & MoonIntensity0)
				| ({
						test: 'moon_phase';
				  } & MoonPhase0)
				| ({
						test: 'on_ground';
				  } & OnGround0)
				| ({
						test: 'on_ladder';
				  } & OnLadder0)
				| ({
						test: 'random_chance';
				  } & RandomChance0)
				| ({
						test: 'rider_count';
				  } & RiderCount0)
				| ({
						test: 'surface_mob';
				  } & SurfaceMob0)
				| ({
						test: 'taking_fire_damage';
				  } & TakingFireDamage0)
				| ({
						test: 'target_distance';
				  } & TargetDistance0)
				| ({
						test: 'trusts';
				  } & Trusts0)
				| ({
						test: 'weather_at_position';
				  } & WeatherAtPosition0)
				| ({
						test: 'weather';
				  } & Weather0)
		  ));
	type GroupsSpec = Array<Def.GroupsSpec> | Def.FiltersSpec;
}
export type Filters = Def.GroupsSpec;
