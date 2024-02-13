export type Skins = {
	serialize_name: string;
	localization_name: string;
	skins: Array<{
		localization_name: string;
		geometry: string;
		texture: string;
		type: 'free' | 'paid';
	}>;
};
