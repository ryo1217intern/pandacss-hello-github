/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types'
import type { Properties } from '../types/csstype'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens'

export type FloatProperties = {
   offsetX?: ConditionalValue<Tokens["spacing"] | Properties["left"]>
	offsetY?: ConditionalValue<Tokens["spacing"] | Properties["top"]>
	offset?: ConditionalValue<Tokens["spacing"] | Properties["top"]>
	placement?: ConditionalValue<"bottom-end" | "bottom-start" | "top-end" | "top-start" | "bottom-center" | "top-center" | "middle-center" | "middle-end" | "middle-start">
}


type FloatStyles = FloatProperties & DistributiveOmit<SystemStyleObject, keyof FloatProperties >

interface FloatPatternFn {
  (styles?: FloatStyles): string
  raw: (styles: FloatStyles) => SystemStyleObject
}


export declare const float: FloatPatternFn;
