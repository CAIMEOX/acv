export declare namespace Def {
	type DefinesSpecification = Array<
		| 'ALLOW_FADE'
		| 'ALPHA_TEST'
		| 'ALWAYS_LIT'
		| 'ARRAY_TEXTURE_0'
		| 'AS_ENTITY_RENDERER'
		| 'ATLAS_TEXTURE'
		| 'BLEND'
		| 'BLUR_STEPS 1'
		| 'BLUR_STEPS 10'
		| 'BLUR_STEPS 11'
		| 'BLUR_STEPS 12'
		| 'BLUR_STEPS 2'
		| 'BLUR_STEPS 3'
		| 'BLUR_STEPS 4'
		| 'BLUR_STEPS 5'
		| 'BLUR_STEPS 6'
		| 'BLUR_STEPS 7'
		| 'BLUR_STEPS 8'
		| 'BLUR_STEPS 9'
		| 'Blending'
		| 'COLOR_BASED'
		| 'COLOR_FROMTEX'
		| 'COLOR_MULTIPLIER'
		| 'COLOR_SECOND_TEXTURE'
		| 'COMFORT_MODE'
		| 'DISABLE_TINTING'
		| 'DisableCulling'
		| 'EFFECTS_OFFSET'
		| 'ENABLE_CURRENT_ALPHA_MULTIPLY'
		| 'ENABLE_FOG'
		| 'ENABLE_LIGHT'
		| 'ENABLE_VERTEX_TINT_MASK'
		| 'END_PORTAL'
		| 'FLIP_OCCLUSION'
		| 'FOG'
		| 'FORCE_DEPTH_ZERO'
		| 'GLINT'
		| 'GRADIENT_2PT'
		| 'GRADIENT_3PTSYMM'
		| 'GRADIENT_FROMTEX'
		| 'GRADIENT_LINEAR'
		| 'GRADIENT_RADIAL'
		| 'HAS_MASK'
		| 'IGNORE_CURRENTCOLOR'
		| 'INVENTORY'
		| 'ITEM_IN_HAND'
		| 'LINE_STRIP'
		| 'LOW_PRECISION'
		| 'MASKED_MULTITEXTURE'
		| 'MSDF'
		| 'MULTIPLICATIVE_TINT'
		| 'MULTIPLICATIVE_TINT_COLOR'
		| 'MULTI_COLOR_TINT'
		| 'NO_OCCLUSION'
		| 'NO_TEXTURE'
		| 'NO_VARIETY'
		| 'SEASONS'
		| 'SEASONS_FAR'
		| 'SMOOTH'
		| 'SNOW'
		| 'STEREO_LEFT_EYE_ONLY'
		| 'TEXEL_AA'
		| 'TINTED'
		| 'TINTED_ALPHA_TEST'
		| 'UI_ENTITY'
		| 'USE_COLOR_BLEND'
		| 'USE_COLOR_MASK'
		| 'USE_EMISSIVE'
		| 'USE_LIGHTING'
		| 'USE_MASK'
		| 'USE_MULTITEXTURE'
		| 'USE_ONLY_EMISSIVE'
		| 'USE_OVERLAY'
		| 'USE_SKINNING'
		| 'USE_STEREO_TEXTURE_ARRAY'
		| 'USE_UV_ANIM'
		| 'WINDOWSMR_MAGICALPHA'
	>;
	type FailOperation = 'Keep' | 'Replace';
	type FaceSpecification = {
		stencilDepthFailOp?: Def.FailOperation;
		stencilFailOp?: Def.FailOperation;
		stencilFunc?: 'Always' | 'Equal' | 'NotEqual';
		stencilPass?: 'Replace';
		stencilPassOp?: Def.FailOperation;
	};
	type StatesSpecification = Array<
		| 'Blending'
		| 'DisableAlphaWrite'
		| 'DisableColorWrite'
		| 'DisableCulling'
		| 'DisableDepthTest'
		| 'DisableDepthWrite'
		| 'EnableAlphaToCoverage'
		| 'EnableStencilTest'
		| 'InvertCulling'
		| 'StencilWrite'
	>;
	type SamplerStatesSpecification = Array<{
		samplerIndex?: number;
		textureFilter?: 'Point' | 'Bilinear' | 'TexelAA';
		textureWrap?: 'Repeat' | 'Clamp';
	}>;
	type VertexFieldsSpecification = Array<{
		field?: string;
	}>;
	type VariantSpecification = Array<{
		[prop: string]: Def.VariantsItemSpecificaiton;
	}>;
	type VariantsItemSpecificaiton = {
		'+defines'?: Def.DefinesSpecification;
		vertexFields?: Def.VertexFieldsSpecification;
		states?: Def.StatesSpecification;
		'+states'?: Def.StatesSpecification;
		'-states'?: Def.StatesSpecification;
	};
}
export type Materials = {
	materials: {
		version: '1.0.0';
	};
};
