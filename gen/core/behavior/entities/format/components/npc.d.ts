export declare namespace Def {
	type RangeXYZ = Array<number>;
}
export type Npc = {
	npc_data?: {
		portrait_offsets?: {
			translate?: Def.RangeXYZ;
			scale?: Def.RangeXYZ;
		};
		picker_offsets?: {
			translate?: Def.RangeXYZ;
			scale?: Def.RangeXYZ;
		};
		skin_list?: Array<{
			variant?: number;
			mark_variant?: number;
		}>;
	};
};
