import { FormatVersion as FormatVersion0 } from './../../general/format_version';
import { Rawtext as Rawtext0 } from './../../general/rawtext/rawtext';
export type Dialogue = {
	format_version: FormatVersion0;
	'minecraft:npc_dialogue': {
		scenes?: Array<{
			buttons?: Array<{
				name?: string | Rawtext0;
				commands?: Array<string>;
			}>;
			npc_name?: string | Rawtext0;
			on_close_commands?: Array<string>;
			on_open_commands?: Array<string>;
			scene_tag: string;
			text?: string | Rawtext0;
		}>;
	};
};
