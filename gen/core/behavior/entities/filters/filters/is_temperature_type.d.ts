import { Operator as Operator0 } from './types/operator';
import { Subject as Subject0 } from './types/subject';
export type IsTemperatureType = {
	test?: string;
	operator?: Operator0;
	subject?: Subject0;
	value: 'cold' | 'mild' | 'ocean' | 'warm';
};
