export type Item =
	| string
	| {
			item: string;
			data?: number;
			count?: number;
	  };
