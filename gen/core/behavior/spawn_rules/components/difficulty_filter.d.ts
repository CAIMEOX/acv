export declare namespace Def {
	type Difficulty = 'easy' | 'normal' | 'hard' | 'peaceful';
}
export type DifficultyFilter = {
	min?: Def.Difficulty;
	max?: Def.Difficulty;
};
