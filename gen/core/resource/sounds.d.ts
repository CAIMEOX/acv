export declare namespace Def {
	type Pitch = number | Array<number>;
	type Volume = number | Array<number>;
	type SoundEvent =
		| string
		| {
				volume?: Def.Volume;
				sound: string;
				pitch?: Def.Pitch;
		  };
	type EntityEvent = {
		volume?: Def.Volume;
		pitch?: Def.Pitch;
		events?: {
			[prop: string]: Def.SoundEvent;
		};
	};
}
export type Sounds = {
	block_sounds?: {
		[prop: string]: {
			volume?: Def.Volume;
			pitch?: Def.Pitch;
			events?: {
				[prop: string]: Def.SoundEvent;
			};
		};
	};
	entity_sounds?: {
		defaults?: Def.EntityEvent;
		entities?: {
			[prop: string]: Def.EntityEvent;
		};
	};
	individual_event_sounds?: {
		events?: {
			[prop: string]: Def.SoundEvent;
		};
	};
	interactive_sounds?: {
		block_sounds?: {
			[prop: string]: {
				volume?: Def.Volume;
				pitch?: Def.Pitch;
				events?: {
					[prop: string]:
						| string
						| {
								volume?: Def.Volume;
								sound?: string;
								pitch?: Def.Pitch;
						  };
				};
			};
		};
		entity_sounds?: {
			defaults?: {
				volume?: Def.Volume;
				pitch?: Def.Pitch;
			};
			entities?: {
				[prop: string]: {
					volume?: Def.Volume;
					pitch?: Def.Pitch;
					events?: {
						[prop: string]: {
							[prop: string]: string;
						};
					};
				};
			};
		};
	};
};
