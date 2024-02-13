export type Unlock = {} & (
	| {
			context: string;
	  }
	| {
			item?: string;
			data?: number;
	  }
	| {
			tag?: string;
	  }
);
