import { Number as Number0 } from './../../../molang/number';
export type EmitterShapeDisc = {
	direction?: 'inwards' | 'outwards' | Array<Number0>;
	radius?: Number0;
	offset?: Array<Number0>;
	plane_normal?: 'x' | 'y' | 'z' | Array<Number0>;
	surface_only?: boolean;
};
