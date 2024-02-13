import { EventObject as EventObject0 } from './../types/event_object';
export declare namespace Def {
	type IntegerRange =
		| number
		| {
				range_min?: number;
				range_max?: number;
		  };
}
export type Genetics = {
	mutation_rate?: number;
	genes?: Array<{
		allele_range?: Def.IntegerRange;
		genetic_variants?: Array<{
			birth_event?: EventObject0;
			both_allele?: Def.IntegerRange;
			either_allele?: number;
			hidden_allele?: number;
			main_allele?: Def.IntegerRange;
			mutation_rate?: number;
		}>;
		name?: string;
	}>;
};
