import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { EventObject as EventObject0 } from './../types/event_object';
export declare namespace Def {
	type FeedItems = {
		item?: Descriptor0;
		temper_mod?: number;
	};
	type AutoRejectItems = {
		item?: Descriptor0;
	};
}
export type Tamemount = {
	attempt_temper_mod?: number;
	auto_reject_items?: Def.AutoRejectItems | Array<Def.AutoRejectItems>;
	feed_text?: string;
	feed_items?: Def.FeedItems | Array<Def.FeedItems>;
	max_temper?: number;
	min_temper?: number;
	ride_text?: string;
	tame_event?: EventObject0;
};
