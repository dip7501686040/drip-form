import React, {
  memo,
  forwardRef,
  CSSProperties,
  useState,
  useContext,
} from 'react'
import { useAddField, useGetCurSchema } from '@generator/hooks'
import styles from './index.module.css'
import cx from 'classnames'
import { LEFTSIDEBARITEM_WH } from '@generator/utils/text'
import type { DraggableSyntheticListeners } from '@dnd-kit/core'
import type { UnitedSchemaAtom } from '@generator/fields/types'
import { Popover } from 'antd'
import WidthMenu from './WidthMenu'
import { GeneratorContext, WidthManagerContext } from '@generator/store'
import { SetType } from '@jdfed/hooks'
import { Map, setDeepProp } from '@jdfed/utils'
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
    //点击添加新的表单项
    const generatorContext = useContext(GeneratorContext)
    const { selectedFieldKey } = useGetCurSchema()
    const onClick = useAddField()
    const [open, setOpen] = useState(false)
    const { setSelectedWidth } = useContext(WidthManagerContext)

    const hide = () => {
      setOpen(false)
    }

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen)
    }
    const handleWidthSelect = (width: widthType) => {
      const key = 'containerStyle.width'
      setSelectedWidth(width)
      if (
        selectedFieldKey &&
        unitedSchema &&
        unitedSchema.ui &&
        unitedSchema.ui.type
      ) {
        const selectedFieldUiType = selectedFieldKey?.split('_')[0]
        if (selectedFieldUiType === unitedSchema.ui.type) {
          generatorContext.current?.set(
            selectedFieldKey || '',
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
          id="tes455dip"
          role="button"
          className={cx('leftsidebar-item')}
          onClick={onClick.bind(null, { unitedSchema })}
          ref={ref}
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
