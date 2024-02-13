export declare namespace Def {
	type Transformation = string | Array<string | Array<string | number>>;
}
export type OverworldGenerationRules = {
	hills_transformation?: Def.Transformation;
	mutate_transformation?: Def.Transformation;
	river_transformation?: Def.Transformation;
	shore_transformation?: Def.Transformation;
	generate_for_climates?: Array<
		Array<'medium' | 'warm' | 'lukewarm' | 'cold' | 'frozen' | number>
	>;
};
