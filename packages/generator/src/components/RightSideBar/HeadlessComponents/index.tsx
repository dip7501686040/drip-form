/*
 * headless ui component
 * 封装 属性配置、校验配置的公共逻辑
 * @Author: jiangxiaowei
 * @Date: 2021-08-31 14:06:55
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2021-12-30 14:56:58
 */
import { useContext, useMemo } from 'react'
import {
  GeneratorContext,
  DripFormUiComponetsAtom,
  WidthManagerContext,
} from '@generator/store'
import { useGetCurSchema } from '@generator/hooks'
import { useRecoilValue } from 'recoil'
import type {
  GeneratorContextType,
  widthManagerContextType,
} from '@generator/store'
import type { UiComponents } from '@jdfed/drip-form'

type UseRightSidebar = () => {
  generatorContext: GeneratorContextType
  selectedFieldKey: string | null
  dataSchema: Record<string, unknown>
  uiSchema: Record<string, unknown>
  uiComponents: UiComponents
  fieldKey: string | undefined
  widthManagerContext: widthManagerContextType
}

const useRightSidebar: UseRightSidebar = () => {
  const uiComponents = useRecoilValue(DripFormUiComponetsAtom)
  const generatorContext = useContext(GeneratorContext)
  const widthManagerContext = useContext(WidthManagerContext)
  const { selectedFieldKey, dataSchema, uiSchema } = useGetCurSchema()
  const fieldKey = useMemo(
    () => selectedFieldKey?.split('.').pop(),
    [selectedFieldKey]
  )

  return {
    generatorContext,
    selectedFieldKey,
    dataSchema,
    uiSchema,
    uiComponents,
    fieldKey,
    widthManagerContext,
  }
}

export default useRightSidebar
