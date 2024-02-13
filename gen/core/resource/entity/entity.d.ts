import { Entity as Entity0 } from './1.8.0/entity';
import { Entity as Entity1 } from './1.10.0/entity';
export type Entity =
	| ({
			format_version?: '1.8.0';
	  } & Entity0)
	| Entity1;
