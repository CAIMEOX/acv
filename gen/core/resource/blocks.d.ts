import { FormatVersion as FormatVersion0 } from './../general/format_version';
export declare namespace Def {
	type Texture =
		| string
		| {
				down?: string;
				up?: string;
				side?: string;
				south?: string;
				north?: string;
				west?: string;
				east?: string;
		  };
}
export type Blocks = {
	format_version?: FormatVersion0 | Array<number>;
};
