import { Operator as Operator0 } from './types/operator';
import { Subject as Subject0 } from './types/subject';
export type IsColor = {
	test?: string;
	operator?: Operator0;
	subject?: Subject0;
	value:
		| 'black'
		| 'blue'
		| 'brown'
		| 'cyan'
		| 'gray'
		| 'green'
		| 'light_blue'
		| 'light_green'
		| 'magenta'
		| 'orange'
		| 'pink'
		| 'purple'
		| 'red'
		| 'silver'
		| 'white'
		| 'yellow';
};
