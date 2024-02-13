export type Geometry =
	| string
	| {
			identifier?: 'minecraft:geometry.full_block';
	  }
	| {
			identifier: string;
			bone_visibility?: {
				[prop: string]: boolean;
			};
	  };
