import { Operator as Operator0 } from './types/operator';
import { Subject as Subject0 } from './types/subject';
export type HasNametag = {
	test?: 'has_nametag';
	domain?: 'any' | 'armor' | 'feet' | 'hand' | 'head' | 'leg' | 'torso';
	operator?: Operator0;
	subject?: Subject0;
	value: boolean;
};
