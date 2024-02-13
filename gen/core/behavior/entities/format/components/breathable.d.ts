import { Reference as Reference0 } from './../../../../general/block/reference';
export type Breathable = {
	total_supply?: number;
	suffocate_time?: number;
	inhale_time?: number;
	breathes_air?: boolean;
	breathes_water?: boolean;
	breathes_lava?: boolean;
	breathes_solids?: boolean;
	generates_bubbles?: boolean;
	breathe_blocks?: Array<Reference0>;
	non_breathe_blocks?: Array<Reference0>;
};
