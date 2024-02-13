import { Filters as Filters0 } from './../../filters/filters';
export type Shooter = {
	aux_val?: number;
	def?: string;
	magic?: boolean;
	power?: number;
	projectiles?: Array<
		| string
		| {
				aux_val?: number;
				def?: string;
				filters?: Filters0;
		  }
	>;
	sound?: string;
};
