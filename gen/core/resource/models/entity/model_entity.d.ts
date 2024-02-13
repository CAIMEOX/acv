import { ModelEntity as ModelEntity0 } from './1.8.0/model_entity';
import { ModelEntity as ModelEntity1 } from './1.16.0/model_entity';
export type ModelEntity =
	| ({
			format_version?: '1.8.0';
	  } & ModelEntity0)
	| ModelEntity1;
