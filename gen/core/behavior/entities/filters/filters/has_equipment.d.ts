import { Operator as Operator0 } from './types/operator';
import { Subject as Subject0 } from './types/subject';
import { Identifier as Identifier0 } from './../../../../general/item/identifier';
export type HasEquipment = {
	test?: 'has_equipment';
	domain?: 'any' | 'inventory' | 'armor' | 'feet' | 'hand' | 'head' | 'leg' | 'torso';
	operator?: Operator0;
	subject?: Subject0;
	value: Identifier0;
};
