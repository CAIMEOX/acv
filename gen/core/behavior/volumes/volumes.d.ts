import { Volumes as Volumes0 } from './1.17.0/volumes';
import { FormatVersion as FormatVersion0 } from './../../general/format_version';
export type Volumes =
	| ({
			format_version?: '1.17.0';
	  } & Volumes0)
	| {
			format_version?: FormatVersion0;
	  };
