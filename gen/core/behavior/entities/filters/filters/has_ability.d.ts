import { Operator as Operator0 } from './types/operator';
import { Subject as Subject0 } from './types/subject';
export type HasAbility = {
	test?: string;
	operator?: Operator0;
	subject?: Subject0;
	value:
		| 'flySpeed'
		| 'flying'
		| 'instabuild'
		| 'invulnerable'
		| 'lightning'
		| 'mayfly'
		| 'mute'
		| 'noclip'
		| 'walkSpeed'
		| 'worldbuilder';
};
