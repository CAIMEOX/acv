import { Number as Number0 } from './../../../molang/number';
export type ParticleMotionCollision = {
	collision_drag?: number;
	coefficient_of_restitution?: number;
	collision_radius?: number;
	enabled?: Number0;
	expire_on_contact?: boolean;
	events?: Array<{
		additionalProperties?: unknown;
		event?: string;
		min_speed?: number;
	}>;
};
