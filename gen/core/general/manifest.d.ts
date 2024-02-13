import { Manifest1 as Manifest10 } from './manifest/manifest.1';
import { Manifest2 as Manifest20 } from './manifest/manifest.2';
export type Manifest = {} & (
	| ({
			format_version: 1;
	  } & Manifest10)
	| ({
			format_version: 2;
	  } & Manifest20)
);
