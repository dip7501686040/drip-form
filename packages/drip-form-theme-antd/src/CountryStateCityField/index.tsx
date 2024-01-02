/*
 * @Author: jiangxiaowei
 * @Date: 2020-05-20 22:17:44
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-09-28 21:45:42
 */
import React, { memo, FC, useEffect, useState } from 'react'
import { Select } from 'antd'
import { useField, useQuery } from '@jdfed/hooks'
import { CommonProps } from '../global'

export type SelectFieldProps = CommonProps & {
  //   是否可以多选
  multiple?: boolean
  //   配置项
  options?: any[]
  //是否有清除按钮
  allowClear?: boolean
  requestCache?: boolean
}
type countryStateCityType = {
  country: string
  state: string
  city: string
}
const SelectField: FC<SelectFieldProps> = ({
  disabled,
  onChange,
  fieldData,
  fieldKey,
  dispatch,
  multiple,
  options = [],
  allowClear,
  queryFunc,
  asyncValidate,
  requestCache = false,
  style,
  getKey,
  queryConfigCountry,
  queryConfigState,
  queryConfigCity,
  ...restProps
}) => {
  const [countryOption, setCountryOption] = useState([])
  const [stateOption, setStateOption] = useState([])
  const [cityOption, setCityOption] = useState([])
  const [countryStateCity, setCountryStateCity] =
    useState<countryStateCityType>({
      country: '',
      state: '',
      city: '',
    })

  const queryOptionsFuc = async () => {
    // fetch country options
    fetch(queryConfigCountry.url, {
      method: queryConfigCountry.method,
      headers: { ...queryConfigCountry.headers },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((list) => {
        let data = []
        if (queryConfigCountry.jsonkey) {
          const jsonKeyVals = queryConfigCountry.jsonkey.split('.')
          if (jsonKeyVals.length === 1) {
            data = list?.[jsonKeyVals[0]] || []
          } else if (jsonKeyVals.length === 2) {
            data = list?.[jsonKeyVals[0]]?.[jsonKeyVals[1]] || []
          }
        } else {
          data = list || []
        }
        setCountryOption(
          data
            .map((item: any) => ({
              label: item.countryName,
              value: item.countryCode,
            }))
            .sort((a: any, b: any) => a.label.localeCompare(b.label))
        )
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    // fetch state options
    fetch(queryConfigState.url, {
      method: queryConfigState.method,
      headers: { ...queryConfigState.headers },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((list) => {
        let data = []
        if (queryConfigState.jsonkey) {
          const jsonKeyVals = queryConfigState.jsonkey.split('.')
          if (jsonKeyVals.length === 1) {
            data = list?.[jsonKeyVals[0]] || []
          } else if (jsonKeyVals.length === 2) {
            data = list?.[jsonKeyVals[0]]?.[jsonKeyVals[1]] || []
          }
        } else {
          data = list || []
        }
        setStateOption(
          data
            .map((item: any) => ({
              label: item.stateName,
              value: item.stateCode,
            }))
            .sort((a: any, b: any) => a.label.localeCompare(b.label))
        )
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    // fetch city options
    fetch(queryConfigCity.url, {
      method: queryConfigCity.method,
      headers: { ...queryConfigCity.headers },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((list) => {
        let data = []
        if (queryConfigCity.jsonkey) {
          const jsonKeyVals = queryConfigCity.jsonkey.split('.')
          if (jsonKeyVals.length === 1) {
            data = list?.[jsonKeyVals[0]] || []
          } else if (jsonKeyVals.length === 2) {
            data = list?.[jsonKeyVals[0]]?.[jsonKeyVals[1]] || []
          }
        } else {
          data = list || []
        }
        setCityOption(
          data
            .map((item: any) => ({
              label: item.cityName,
              value: item.cityCode,
            }))
            .sort((a: any, b: any) => a.label.localeCompare(b.label))
        )
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    queryOptionsFuc()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // fix：antd 多选情况传空字符串，展示空的选项bug
  if (
    multiple ||
    restProps?.mode === 'multiple' ||
    restProps?.mode === 'tags'
  ) {
    if (!Array.isArray(fieldData)) {
      fieldData = []
    }
  }
  const _onSelectChange = useField(
    {
      fieldKey,
      onChange,
      asyncValidate,
      getKey,
    },
    dispatch
  )
  const handleCountryStateCityChange = (name: string, e: any) => {
    setCountryStateCity((prevState: countryStateCityType) => {
      const data = { ...prevState, [name]: e }
      if (name === 'country') {
        data.state = ''
        data.city = ''
      }
      if (name === 'state') {
        data.city = ''
      }
      _onSelectChange(data)
      return data
    })
  }
  // 不管单选多选，均可搜索
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '20px' }}>Country</label>
        <Select
          style={style}
          {...(multiple
            ? {
                mode: 'multiple',
              }
            : {
                showSearch: true,
              })}
          allowClear={allowClear}
          disabled={disabled}
          value={fieldData?.country}
          onChange={(e) => handleCountryStateCityChange('country', e)}
          options={countryOption}
          {...restProps}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '38px' }}>State</label>
        <Select
          style={style}
          {...(multiple
            ? {
                mode: 'multiple',
              }
            : {
                showSearch: true,
              })}
          allowClear={allowClear}
          disabled={disabled}
          value={fieldData?.state}
          onChange={(e) => handleCountryStateCityChange('state', e)}
          options={stateOption}
          {...restProps}
        />
      </div>
      <div>
        <label style={{ marginRight: '45px' }}>City</label>
        <Select
          style={style}
          {...(multiple
            ? {
                mode: 'multiple',
              }
            : {
                showSearch: true,
              })}
          allowClear={allowClear}
          disabled={disabled}
          value={fieldData?.city}
          onChange={(e) => handleCountryStateCityChange('city', e)}
          options={cityOption}
          {...restProps}
        />
      </div>
    </div>
  )
}

export const select = memo(SelectField)
export { default as config } from './config'
