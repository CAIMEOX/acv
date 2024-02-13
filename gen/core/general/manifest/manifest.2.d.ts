import { UUIDV4 as UUIDV40 } from './../UUIDV4';
import { Version as Version0 } from './../Version';
import { FormatVersion as FormatVersion0 } from './../format_version';
export type Manifest2 = {
	format_version: number;
	capabilities?:
		| Array<
				| 'raytraced'
				| 'pbr'
				| 'script_eval'
				| 'editorExtension'
				| 'experimental_custom_ui'
				| 'chemistry'
		  >
		| {
				chemistry?: boolean;
				editorExtension?: boolean;
				experimental_custom_ui?: boolean;
				raytraced?: boolean;
		  };
	dependencies?: Array<
		| {
				uuid?: UUIDV40;
				version?: Version0 | FormatVersion0;
		  }
		| {
				module_name?: string;
				version?: string;
		  }
	>;
	header: {
		allow_random_seed?: boolean;
		base_game_version?: Version0;
		description: string;
		lock_template_options?: boolean;
		min_engine_version?: Version0;
		name: string;
		pack_scope?: 'global' | 'world' | 'any';
		uuid: UUIDV40;
		version: Version0;
	};
	modules?: Array<{
		description?: string;
		type:
			| 'resources'
			| 'data'
			| 'client_data'
			| 'interface'
			| 'world_template'
			| 'javascript'
			| 'script';
		language?: 'javascript';
		uuid: UUIDV40;
		version: Version0;
		entry?: string;
	}>;
	metadata?: {
		authors?: Array<string>;
		generated_with?: {
			[prop: string]: Array<string>;
		};
		license?: string;
		product_type?: '' | 'addon';
		url?: string;
	};
	subpacks?: Array<{
		folder_name: string;
		name: string;
		memory_tier: number;
	}>;
};
