import { Items as Items0 } from './1.10.0/items';
import { FormatVersion as FormatVersion0 } from './../../general/format_version';
export type Items =
	| ({
			format_version?: '1.10';
	  } & Items0)
	| ({
			format_version?: '1.10.0';
	  } & Items0)
	| {
			format_version?: FormatVersion0;
	  };
