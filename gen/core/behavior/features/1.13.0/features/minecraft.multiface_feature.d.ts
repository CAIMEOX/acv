import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { Identifier as Identifier1 } from './../../../../general/block/identifier';
export type MinecraftMultifaceFeature = {
	description: {
		identifier: Identifier0;
	};
	places_block: Identifier1;
	search_range: number;
	can_place_on_floor: boolean;
	can_place_on_ceiling: boolean;
	can_place_on_wall: boolean;
	chance_of_spreading: number;
	can_place_on?: Array<Identifier1>;
};
