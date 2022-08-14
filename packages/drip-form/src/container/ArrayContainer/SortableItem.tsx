import React, { FC } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import cx from 'classnames'
import { number2Chinese } from '@jdfed/utils'
import { useArray } from '@jdfed/hooks'
import renderCoreFn from '../../render'
import { Handle } from './Handle'
import { Remove } from './Remove'
import type { RenderFnProps } from '../../render/type'
import type { Props } from '../type'
import type { ArrayProps } from './type'

type SortableItemProps = {
  id: string
  index: number
  isAdd: boolean
  array: unknown[]
}

const SortableItem: FC<
  SortableItemProps & Props & RenderFnProps & ArrayProps
> = (props) => {
  const {
    id,
    index,
    isAdd,
    array,
    theme,
    customComponents,
    uiComponents,
    dispatch,
    fieldData = [],
    dataSchema,
    uiSchema,
    errors,
    formData,
    onQuery,
    parentUiSchemaKey,
    parentDataSchemaKey,
    onValidate,
    uiProp,
    fieldKey,
    containerMap,
    get,
    getKey,
    containerHoc,
    arrayKey,
  } = props
  const { deltItem } = useArray({
    fieldKey,
    dispatch,
    fieldData,
  })
  // 默认ArrayContainer模式为加减模式
  const {
    serialText = {
      afterText: '',
      beforeText: '',
      serialLang: 'number',
    },
    showNo,
    // 删除二次确认，需要主题导出popConfig
    // TODO 后续drip-form单独开发npm包兜底
    hasConfirm = false,
    // 删除提示文案
    confirm = {
      confirmTitle: '确定删除这一项？',
      okText: '确定',
      cancelText: '取消',
    },
    // 是否可以拖拽排序
    canDrag,
  } = uiProp
  const Popconfirm = uiComponents[theme]?.Popconfirm

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: !canDrag })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div
        className={cx('array-item--field', {
          'array-item--field_last-child': isAdd && index === array.length - 1,
        })}
      >
        <div className="array-item--header">
          {showNo ? (
            <div className="array-item--number">
              {serialText.beforeText}
              {serialText.serialLang === 'CN'
                ? number2Chinese(index + 1)
                : index + 1}
              {serialText.afterText}
            </div>
          ) : (
            <div />
          )}
          <div className="array-item--handle">
            {isAdd &&
              !isDragging &&
              (Popconfirm && hasConfirm ? (
                <Popconfirm
                  title={confirm.confirmTitle || '确定删除这一项？'}
                  onConfirm={deltItem.bind(this, index)}
                  okText={confirm.okText || '确定'}
                  cancelText={confirm.cancelText || '取消'}
                >
                  <Remove className="array-item--remove" />
                </Popconfirm>
              ) : (
                <Remove
                  className="array-item--remove"
                  onClick={deltItem.bind(this, index)}
                />
              ))}
            {isAdd && canDrag && (
              <Handle className="array-item--move" {...listeners} />
            )}
          </div>
        </div>
        <div className="array-item--case">
          {renderCoreFn({
            uiComponents,
            dataSchema,
            uiSchema,
            errors,
            formData,
            onQuery,
            onValidate,
            dispatch,
            containerHoc,
            containerMap,
            parentUiSchemaKey,
            parentDataSchemaKey,
            parentFormDataKey: fieldKey,
            customComponents,
            currentArrayKey: index,
            get,
            getKey,
            arrayKey,
          })}
        </div>
      </div>
    </div>
  )
}

export default SortableItem
