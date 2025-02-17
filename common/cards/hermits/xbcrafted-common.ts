import {hermit} from '../defaults'
import {Hermit} from '../types'

const XBCraftedCommon: Hermit = {
	...hermit,
	id: 'xbcrafted_common',
	numericId: 109,
	name: 'xB',
	expansion: 'default',
	rarity: 'common',
	tokens: 0,
	type: 'pvp',
	health: 270,
	primary: {
		name: 'Aww Yeah',
		cost: ['pvp'],
		damage: 50,
		power: null,
	},
	secondary: {
		name: 'Blam!',
		cost: ['pvp', 'pvp'],
		damage: 80,
		power: null,
	},
}

export default XBCraftedCommon
