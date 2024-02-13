import { FormatVersion as FormatVersion0 } from './../../general/format_version';
export declare namespace Def {
	type SoundPath = string;
	type SoundSpec = {
		__use_legacy_max_distance?: boolean;
		category?:
			| 'ambient'
			| 'block'
			| 'music'
			| 'weather'
			| 'ui'
			| 'bucket'
			| 'neutral'
			| 'player'
			| 'hostile'
			| 'record'
			| 'bottle';
		sounds: Array<
			| Def.SoundPath
			| {
					is3D?: boolean;
					pitch?: number;
					volume?: number;
					load_on_low_memory?: boolean;
					stream?: boolean;
					name: Def.SoundPath;
					weight?: number;
			  }
		>;
		max_distance?: 'number' | 'null';
		min_distance?: 'number' | 'null';
	};
}
export type SoundDefinitions = {
	format_version?: FormatVersion0;
	sound_definitions?: {
		[prop: string]: Def.SoundSpec;
	};
	__use_legacy_max_distance?: 'true' | 'false';
};
