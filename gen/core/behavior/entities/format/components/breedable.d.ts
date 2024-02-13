import { EventObjectFilters as EventObjectFilters0 } from './../types/event_object_filters';
import { Reference as Reference0 } from './../../../../general/block/reference';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { Filters as Filters0 } from './../../filters/filters';
import { Number2 as Number20 } from './../../../../general/vectors/number2';
export declare namespace Def {
	type BreedsWithSpec = {
		baby_type?: string;
		breed_event?: EventObjectFilters0;
		mate_type?: string;
	};
	type EnviromentRequirements = {
		blocks?: Array<Reference0> | Reference0;
		count?: number;
		radius?: number;
	};
}
export type Breedable = {
	allow_sitting?: boolean;
	blend_attributes?: boolean;
	breed_cooldown?: number;
	breed_items?: Array<Descriptor0> | Descriptor0;
	breeds_with?: Def.BreedsWithSpec | Array<Def.BreedsWithSpec>;
	causes_pregnancy?: boolean;
	deny_parents_variant?: {
		chance?: number;
		max_variant?: number;
		min_variant?: number;
	};
	environment_requirements?: Def.EnviromentRequirements | Array<Def.EnviromentRequirements>;
	extra_baby_chance?: number;
	love_filters?: Filters0;
	mutation_factor?: {
		color?: number;
		extra_variant?: number;
		variant?: number;
	};
	mutation_strategy?: string;
	parent_centric_attribute_blending?: Array<unknown>;
	random_extra_variant_mutation_interval?: Number20;
	random_variant_mutation_interval?: Number20;
	inherit_tamed?: boolean;
	require_full_health?: boolean;
	require_tame?: boolean;
	transform_to_item?: string;
};
