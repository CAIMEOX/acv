import { Reference as Reference0 } from './../../../../general/block/reference';
export type PlacementFilter = {
	conditions?: Array<{
		allowed_faces?: Array<'up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all'>;
		block_filter?: Array<Reference0>;
	}>;
};
