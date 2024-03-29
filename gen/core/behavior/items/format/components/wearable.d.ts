export type Wearable = {
	dispensable?: boolean;
	slot?:
		| 'slot.weapon.mainhand'
		| 'none'
		| 'slot.weapon.offhand'
		| 'slot.armor.head'
		| 'slot.armor.chest'
		| 'slot.armor.legs'
		| 'slot.armor.feet'
		| 'slot.hotbar'
		| 'slot.inventory'
		| 'slot.enderchest'
		| 'slot.saddle'
		| 'slot.armor'
		| 'slot.chest'
		| 'slot.equippable';
};
