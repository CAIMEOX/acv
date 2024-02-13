import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type AmbientSoundInterval = {
	event_name?: string;
	event_names?: Array<{
		condition?: string;
		event_name?: SoundEvent0;
	}>;
	range?: number;
	value?: number;
};
