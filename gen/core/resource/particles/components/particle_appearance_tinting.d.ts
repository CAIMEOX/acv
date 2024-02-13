import { Number as Number0 } from './../../../molang/number';
export type ParticleAppearanceTinting = {
	color?:
		| Array<Number0>
		| string
		| {
				gradient?:
					| Array<string>
					| {
							[prop: string]: string;
					  }
					| Array<Array<number | string>>;
				interpolant?: Number0;
		  };
};
