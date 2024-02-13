export type Event =
	| string
	| {
			event?: string;
			target?:
				| 'baby'
				| 'block'
				| 'damager'
				| 'other'
				| 'parent'
				| 'player'
				| 'self'
				| 'target';
	  };
