import { Identifier as Identifier0 } from './../../../general/entity/identifier';
import { Boolean as Boolean0 } from './../../../molang/boolean';
import { Number as Number0 } from './../../../molang/number';
import { Components as Components0 } from './components';
import { Events as Events0 } from './events';
export type MinecraftEntity = {
	description: {
		animations?: {
			[prop: string]: string;
		};
		identifier: Identifier0;
		is_spawnable?: boolean;
		is_summonable?: boolean;
		is_experimental?: boolean;
		properties?: {
			[prop: string]: {
				type: 'bool' | 'int' | 'float' | 'enum';
				client_sync?: boolean;
			} & (
				| {
						type: 'bool';
						default?: Boolean0;
				  }
				| {
						type: 'int';
						default?: Number0;
						range?: Array<number>;
				  }
				| {
						type: 'float';
						default?: Number0;
						range?: Array<number>;
				  }
				| {
						type: 'enum';
						default?: string;
						client_sync?: boolean;
						values?: Array<string>;
				  }
			);
		};
		runtime_identifier?: string;
		scripts?: {
			animate?: Array<
				| string
				| {
						[prop: string]: string;
				  }
			>;
		};
	};
	component_groups?: {
		[prop: string]: Components0;
	};
	components?: Components0;
	events?: Events0;
};
