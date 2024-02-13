export declare namespace Def {
	type EventBase = {
		condition?: string;
		event?: string;
		target?: string;
	};
}
export type Events = {
	'minecraft:on_fall_on'?: Def.EventBase;
	'minecraft:on_interact'?: Def.EventBase;
	'minecraft:on_placed'?: Def.EventBase;
	'minecraft:on_player_destroyed'?: Def.EventBase;
	'minecraft:on_player_placing'?: Def.EventBase;
	'minecraft:on_step_off'?: Def.EventBase;
	'minecraft:on_step_on'?: Def.EventBase;
};
