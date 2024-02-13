export type AsepriteFlipbook = {
	meta: {
		size: {
			w: number;
			h: number;
		};
		image: string;
	};
	frames: Array<{
		duration: number;
		frame: {
			x: number;
			y: number;
		};
	}>;
};
