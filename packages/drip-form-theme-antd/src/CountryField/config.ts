import { queryCofnig } from '../global'
/**
 * 下拉选择器
 */
const config = {
  icon: 'iconfont icon-select',
  title: 'Country',
  unitedSchema: {
    type: 'string',
    title: 'Country',
    ui: {
      type: 'country',
      theme: 'antd',
      style: { width: 120 },
      queryConfigCountry: {
        optionsType: '0',
        options: [],
        setPath: 'options',
        url: 'https://gima-api-dev.a4apple.cn:51127/api/v4/country/siiareact/dev?page=-1',
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNoZXJyeS5saXUiLCJkaXNwbGF5X25hbWUiOiJDaGVycnl6IGxpdSIsInRva2VuaWQiOiIxM2VkZjM2Ni00MjgxLTQ0MmEtOTEzMy02NDA2MTI2MDgxYWMiLCJpZGxlX3RpbWUiOjI0MCwibWF4aW11bV9leHBpcnlfdGltZSI6NDgwLCJjcmVhdGVfdGltZSI6IjIwMjMtMTItMjggMDQ6NDY6MzIiLCJpc2xvZ291dCI6ImZhbHNlIiwidXNlcl9oZWFkZXJfaW1hZ2UiOiJodHRwczovL2E0YXBvcnRhbGRpYWcuYmxvYi5jb3JlLndpbmRvd3MubmV0L2dpbWEvc2lpYXJlYWN0LWRldi91c2VybWFpbnRlbmFuY2UvOGM3ZDZhYTgtZDJlMi00MDQ5LTMzYWUtYjg5M2M2OWU2NDM0LmpwZyIsImNvbXBhbnlfY29kZSI6InNpaWFyZWFjdCIsImVudmlyb25tZW50IjoiZGV2IiwidGltZV96b25lIjoiQXNpYS9Ib25nX0tvbmciLCJ0aGVtZV9Db2xvciI6IiM4YjU3MmEiLCJjb21wYW55X25hbWUiOiJERVYgUG9ydGFsICAiLCJjb21wYW55X2xvZ28iOiJodHRwczovL2E0YXBvcnRhbGRpYWcuYmxvYi5jb3JlLndpbmRvd3MubmV0L2dpbWEvc2lpYXJlYWN0LWRldi9uZXdzLzIxNTJkOGE1LWE5ZDEtNDIwOC0zZTAwLWEzYzBiZWEzNzgwNi5zdmciLCJleHAiOjE3MDU0NjY3OTJ9.XowpFQZrYk3sl2nREMH_X5rbeFs_NRwTgh2yEEnUdKU',
        },
        jsonkey: 'Data.data',
      },
    },
  },
  propertyConfig: {
    styleSchema: [
      {
        fieldKey: 'disabled',
        type: 'boolean',
        title: '是否禁用',
        default: false,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'placeholder',
        type: 'string',
        title: '占位符',
        ui: {
          type: 'text',
          placeholder: '请输入文本',
          allowClear: true,
        },
      },
      {
        fieldKey: 'multiple',
        type: 'boolean',
        title: '是否可以多选',
        default: false,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'allowClear',
        type: 'boolean',
        title: '是否可以清除',
        default: true,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'requestCache',
        type: 'boolean',
        title: '是否使用缓存',
        default: true,
        ui: {
          type: 'switch',
        },
      },
      {
        fieldKey: 'listHeight',
        type: 'number',
        title: '弹窗高度',
        default: 256,
        ui: {
          type: 'number',
        },
      },
      {
        fieldKey: 'default',
        type: 'string',
        title: '默认值',
        ui: {
          type: 'text',
          placeholder: '请输入默认值',
          allowClear: true,
        },
      },
      ...queryCofnig,
    ],
  },
}

export default config
