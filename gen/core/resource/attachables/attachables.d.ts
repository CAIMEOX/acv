import { Attachables as Attachables0 } from './1.8.0/attachables';
import { Attachables as Attachables1 } from './1.10.0/attachables';
import { FormatVersion as FormatVersion0 } from './../../general/format_version';
export type Attachables =
	| ({
			format_version?: '1.8.0';
	  } & Attachables0)
	| ({
			format_version?: '1.10';
	  } & Attachables1)
	| ({
			format_version?: '1.10.0';
	  } & Attachables1)
	| {
			format_version?: FormatVersion0;
	  };
