import { UUIDV4 as UUIDV40 } from './../UUIDV4';
import { Version as Version0 } from './../Version';
export type Manifest1 = {
	format_version: number;
	header: {
		name: string;
		description?: string;
		uuid: UUIDV40;
		version: Version0;
		min_engine_version?: Version0;
		lock_template_options?: boolean;
		base_game_version?: Version0;
	};
	modules?: Array<{
		type: 'resources' | 'data' | 'client_data' | 'interface' | 'world_template' | 'skin_pack';
		description?: string;
		uuid: UUIDV40;
		version: Version0;
	}>;
	dependencies?: Array<{
		uuid?: UUIDV40;
		version?: Version0;
	}>;
	capabilities?: {
		experimental_custom_ui?: boolean;
		chemistry?: boolean;
	};
	metadata?: {
		authors?: Array<string>;
		license?: string;
		url?: string;
	};
};
