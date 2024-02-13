import { Identifier as Identifier0 } from './../../../general/volume/identifier';
import { String as String0 } from './../../../molang/string';
export type Volumes = {
	format_version: '1.17.0';
	'minecraft:volume': {
		description?: {
			identifier?: Identifier0;
		};
		components?: {
			'minecraft:bounds'?: {
				dimension?: 'overworld' | 'nether' | 'the end';
				max?: Array<number>;
				min?: Array<number>;
			};
			'minecraft:fog'?: {
				fog_identifier?: string;
				priority?: number;
			};
			'minecraft:on_actor_enter'?: {
				on_enter: Array<{
					condition?: String0;
					event?: string;
					target?: 'self' | 'other';
				}>;
			};
			'minecraft:on_actor_leave'?: {
				on_enter: Array<{
					condition?: String0;
					event?: string;
					target?: 'self' | 'other';
				}>;
			};
		};
	};
};
