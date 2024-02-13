import { ItemRef as ItemRef0 } from './../../general/item_ref';
import { String as String0 } from './../../general/string';
import { Variable as Variable0 } from './../../general/variable';
import { Boolean as Boolean0 } from './../../general/boolean';
export type Bindings =
	| ItemRef0
	| Array<{
			binding_collection_name?: String0;
			binding_collection_prefix?: String0;
			binding_condition?: 'once' | 'always' | 'always_when_visible' | 'visible' | ItemRef0;
			binding_name?: String0;
			binding_name_override?: String0;
			binding_type?:
				| 'collection'
				| 'global'
				| 'collection_details'
				| 'none'
				| 'view'
				| Variable0;
			ignored?: Boolean0;
			resolve_sibling_scope?: Boolean0;
			source_control_name?: String0;
			source_property_name?: String0;
			target_property_name?: String0;
	  }>;
