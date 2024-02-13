import { Number as Number0 } from './../../../molang/number';
export type ParticleAppearanceBillboard = {
	size?: Array<Number0>;
	facing_camera_mode?:
		| 'lookat_xyz'
		| 'lookat_y'
		| 'rotate_xyz'
		| 'rotate_y'
		| 'direction_x'
		| 'direction_y'
		| 'direction_z';
	direction?: {
		mode?: 'custom' | 'derive_from_velocity';
		custom_direction?: Array<Number0>;
		min_speed_threshold?: number;
	};
	uv?: {
		texture_width?: number;
		texture_height?: number;
		flipbook?: {
			base_UV?: Array<Number0>;
			size_UV?: Array<Number0>;
			step_UV?: Array<Number0>;
			frames_per_second?: Number0;
			max_frame: Number0;
			stretch_to_lifetime?: boolean;
			loop?: boolean;
		};
		uv?: Array<Number0>;
		uv_size?: Array<Number0>;
	};
};
