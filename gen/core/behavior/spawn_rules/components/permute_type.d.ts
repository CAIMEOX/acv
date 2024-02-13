export declare namespace Def {
	type PermuteType = {
		weight?: number;
		entity_type?: string;
		guaranteed_count?: number;
	};
}
export type PermuteType = Def.PermuteType | Array<Def.PermuteType>;
