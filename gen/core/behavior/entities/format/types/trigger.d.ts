import { Filters as Filters0 } from './../../filters/filters';
import { Subject as Subject0 } from './../../filters/filters/types/subject';
export type Trigger =
	| string
	| {
			event?: string;
			filters?: Filters0;
			target?: Subject0;
	  };
