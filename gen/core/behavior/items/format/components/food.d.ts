export type Food = {
	can_always_eat?: boolean;
	nutrition?: number;
	on_consume?: {
		event?: string;
		target?: 'self';
	};
	is_meat?: boolean;
};
