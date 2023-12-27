import React, {
  memo,
  forwardRef,
  CSSProperties,
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react'
import { useAddField } from '@generator/hooks'
import styles from './index.module.css'
import cx from 'classnames'
import { LEFTSIDEBARITEM_WH } from '@generator/utils/text'
import type { DraggableSyntheticListeners } from '@dnd-kit/core'
import type { UnitedSchemaAtom } from '@generator/fields/types'
import { Popover } from 'antd'
import WidthMenu from './WidthMenu'
import {
  GeneratorContext,
  WidthManagerContext,
  selectedAtom,
} from '@generator/store'
import { SetType } from '@jdfed/hooks'
import { Map, setDeepProp } from '@jdfed/utils'
import { useRecoilState } from 'recoil'
export type DragAtomProps = {
  icon: string
  unitedSchema: UnitedSchemaAtom
  customBarStyle?: CSSProperties
}
export type widthType = {
  width: number
  label: string
}

type ItemType = {
  listeners?: DraggableSyntheticListeners
  attributes?: any
  customBarStyle?: CSSProperties
} & DragAtomProps

const Item = forwardRef<HTMLElement, ItemType>(
  ({ listeners, customBarStyle, attributes, icon, unitedSchema }, ref) => {
    function usePrevious(value: any) {
      const pref = useRef()
      useEffect(() => {
        pref.current = value //assign the value of ref to the argument
      }, [value]) //this code will run when the value of 'value' changes
      return pref.current //in the end, return the current ref value.
    }
    //点击添加新的表单项
    const generatorContext = useContext(GeneratorContext)
    const [selectedKey] = useRecoilState(selectedAtom)
    const onClick = useAddField()
    const [open, setOpen] = useState(false)
    const { selectedWidth, setSelectedWidth } = useContext(WidthManagerContext)
    const prevSelectKey = usePrevious(selectedKey)

    const hide = () => {
      setOpen(false)
    }

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen)
    }
    const handleWidthSelect = (width: widthType) => {
      const key = 'containerStyle.width'
      setSelectedWidth(width)
      if (!selectedKey) {
        onClick({ unitedSchema })
      }
      if (
        selectedKey &&
        unitedSchema &&
        unitedSchema.ui &&
        unitedSchema.ui.type
      ) {
        const selectedFieldUiType = selectedKey.split('_')[0]
        if (selectedFieldUiType === unitedSchema.ui.type) {
          generatorContext.current?.set(
            selectedKey || '',
            'uiSchema' as SetType,
            (draft) => {
              setDeepProp(
                key.split('.').filter((item: string) => !['ui'].includes(item)),
                draft as Map,
                width.label
              )
            }
          )
        }
      }
      hide()
    }

    useEffect(() => {
      if (
        prevSelectKey === null &&
        selectedKey &&
        unitedSchema &&
        unitedSchema.ui &&
        unitedSchema.ui.type
      ) {
        const selectedFieldUiType = selectedKey.split('_')[0]
        if (selectedFieldUiType === unitedSchema.ui.type) {
          const key = 'containerStyle.width'
          generatorContext.current?.set(
            selectedKey,
            'uiSchema' as SetType,
            (draft) => {
              setDeepProp(
                key.split('.').filter((item: string) => !['ui'].includes(item)),
                draft as Map,
                selectedWidth.label
              )
            }
          )
        }
      }
    }, [selectedKey])
    return (
      <Popover
        style={{ padding: '0' }}
        content={<WidthMenu setSelectedWidth={handleWidthSelect} />}
        title=""
        trigger="hover"
        placement="right"
        visible={open}
        onVisibleChange={handleOpenChange}
      >
        <div
          role="button"
          className={cx('leftsidebar-item')}
          ref={ref}
          onClick={onClick.bind(null, { unitedSchema })}
          style={{ ...LEFTSIDEBARITEM_WH, ...customBarStyle }}
          {...listeners}
          {...attributes}
        >
          <i className={`${icon}`} />
          <span className={styles.title}>{unitedSchema.title}</span>
        </div>
      </Popover>
    )
  }
)

Item.displayName = 'leftSidebarItem'

export default memo(Item)
