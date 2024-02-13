export declare namespace Def {
	type OffsetSpec = {
		first_person?: Def.Mode;
		thrid_person?: Def.Mode;
	};
	type Mode = {
		position?: Def.Vec3;
		rotation?: Def.Vec3;
		scale?: Def.Vec3;
	};
	type Vec3 = Array<number>;
}
export type RenderOffsets = {
	main_hand?: string;
	off_hand?: string;
};
