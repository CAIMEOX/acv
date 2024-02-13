export declare namespace Def {
	type Rawtext = Array<string | Def.Translate | Def.Text | Def.Selector | Def.Score>;
	type Selector = {
		selector: string;
	};
	type Score = {
		score: {
			name: string;
			objective: string;
		};
	};
	type Text = {
		text: string;
	};
	type Translate = {
		translate: string;
		with?: Def.With;
	};
	type With = Array<
		| string
		| {
				rawtext?: Def.Rawtext;
		  }
	>;
}
export type Rawtext = {
	rawtext: Def.Rawtext;
};
