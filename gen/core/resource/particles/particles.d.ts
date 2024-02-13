import { FormatVersion as FormatVersion0 } from './../../general/format_version';
import { Identifier as Identifier0 } from './../../general/particle/identifier';
import { Number as Number0 } from './../../molang/number';
import { EmitterInitialization as EmitterInitialization0 } from './components/emitter_initialization';
import { EmitterLifetimeEvents as EmitterLifetimeEvents0 } from './components/emitter_lifetime_events';
import { EmitterLifetimeExpression as EmitterLifetimeExpression0 } from './components/emitter_lifetime_expression';
import { EmitterLifetimeOnce as EmitterLifetimeOnce0 } from './components/emitter_lifetime_once';
import { EmitterLifetimeLooping as EmitterLifetimeLooping0 } from './components/emitter_lifetime_looping';
import { EmitterLocalSpace as EmitterLocalSpace0 } from './components/emitter_local_space';
import { EmitterRateInstant as EmitterRateInstant0 } from './components/emitter_rate_instant';
import { EmitterRateManual as EmitterRateManual0 } from './components/emitter_rate_manual';
import { EmitterRateSteady as EmitterRateSteady0 } from './components/emitter_rate_steady';
import { EmitterShapeBox as EmitterShapeBox0 } from './components/emitter_shape_box';
import { EmitterShapeCustom as EmitterShapeCustom0 } from './components/emitter_shape_custom';
import { EmitterShapeDisc as EmitterShapeDisc0 } from './components/emitter_shape_disc';
import { EmitterShapeEntityAabb as EmitterShapeEntityAabb0 } from './components/emitter_shape_entity_aabb';
import { EmitterShapePoint as EmitterShapePoint0 } from './components/emitter_shape_point';
import { EmitterShapeSphere as EmitterShapeSphere0 } from './components/emitter_shape_sphere';
import { ParticleAppearanceBillboard as ParticleAppearanceBillboard0 } from './components/particle_appearance_billboard';
import { ParticleAppearanceTinting as ParticleAppearanceTinting0 } from './components/particle_appearance_tinting';
import { ParticleAppearanceLighting as ParticleAppearanceLighting0 } from './components/particle_appearance_lighting';
import { ParticleExpireIfNotInBlocks as ParticleExpireIfNotInBlocks0 } from './components/particle_expire_if_not_in_blocks';
import { ParticleExpireIfInBlocks as ParticleExpireIfInBlocks0 } from './components/particle_expire_if_in_blocks';
import { ParticleInitialization as ParticleInitialization0 } from './components/particle_initialization';
import { ParticleInitialSpeed as ParticleInitialSpeed0 } from './components/particle_initial_speed';
import { ParticleInitialSpin as ParticleInitialSpin0 } from './components/particle_initial_spin';
import { ParticleLifetimeExpression as ParticleLifetimeExpression0 } from './components/particle_lifetime_expression';
import { ParticleLifetimeEvents as ParticleLifetimeEvents0 } from './components/particle_lifetime_events';
import { ParticleKillPlane as ParticleKillPlane0 } from './components/particle_kill_plane';
import { ParticleMotionCollision as ParticleMotionCollision0 } from './components/particle_motion_collision';
import { ParticleMotionDynamic as ParticleMotionDynamic0 } from './components/particle_motion_dynamic';
import { ParticleMotionParametric as ParticleMotionParametric0 } from './components/particle_motion_parametric';
export type Particles = {
	format_version?: FormatVersion0;
	particle_effect?: {
		description?: {
			identifier: Identifier0;
			basic_render_parameters: {
				material?: string;
				texture?: string;
			};
		};
		curves?: {
			[prop: string]: {
				input?: Number0;
				nodes?:
					| Array<Number0>
					| {
							[prop: string]: {};
					  };
				type?: 'linear' | 'bezier' | 'bezier_chain' | 'catmull_rom';
				horizontal_range?: Number0;
			};
		};
		components?: {
			'minecraft:emitter_initialization'?: EmitterInitialization0;
			'minecraft:emitter_lifetime_events'?: EmitterLifetimeEvents0;
			'minecraft:emitter_lifetime_expression'?: EmitterLifetimeExpression0;
			'minecraft:emitter_lifetime_once'?: EmitterLifetimeOnce0;
			'minecraft:emitter_lifetime_looping'?: EmitterLifetimeLooping0;
			'minecraft:emitter_local_space'?: EmitterLocalSpace0;
			'minecraft:emitter_rate_instant'?: EmitterRateInstant0;
			'minecraft:emitter_rate_manual'?: EmitterRateManual0;
			'minecraft:emitter_rate_steady'?: EmitterRateSteady0;
			'minecraft:emitter_shape_box'?: EmitterShapeBox0;
			'minecraft:emitter_shape_custom'?: EmitterShapeCustom0;
			'minecraft:emitter_shape_disc'?: EmitterShapeDisc0;
			'minecraft:emitter_shape_entity_aabb'?: EmitterShapeEntityAabb0;
			'minecraft:emitter_shape_point'?: EmitterShapePoint0;
			'minecraft:emitter_shape_sphere'?: EmitterShapeSphere0;
			'minecraft:particle_appearance_billboard'?: ParticleAppearanceBillboard0;
			'minecraft:particle_appearance_tinting'?: ParticleAppearanceTinting0;
			'minecraft:particle_appearance_lighting'?: ParticleAppearanceLighting0;
			'minecraft:particle_expire_if_not_in_blocks'?: ParticleExpireIfNotInBlocks0;
			'minecraft:particle_expire_if_in_blocks'?: ParticleExpireIfInBlocks0;
			'minecraft:particle_initialization'?: ParticleInitialization0;
			'minecraft:particle_initial_speed'?: ParticleInitialSpeed0;
			'minecraft:particle_initial_spin'?: ParticleInitialSpin0;
			'minecraft:particle_lifetime_expression'?: ParticleLifetimeExpression0;
			'minecraft:particle_lifetime_events'?: ParticleLifetimeEvents0;
			'minecraft:particle_kill_plane'?: ParticleKillPlane0;
			'minecraft:particle_motion_collision'?: ParticleMotionCollision0;
			'minecraft:particle_motion_dynamic'?: ParticleMotionDynamic0;
			'minecraft:particle_motion_parametric'?: ParticleMotionParametric0;
		};
		events?: {
			[prop: string]: {
				particle_effect?: {
					effect?: string;
					type?: string;
				};
				sound_effect?: {
					event_name?: string;
				};
			};
		};
	};
};
