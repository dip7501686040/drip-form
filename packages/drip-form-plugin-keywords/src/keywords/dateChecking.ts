/*
 * @Author: jiangxiaowei
 * @Date: 2022-01-20 19:26:31
 * @Last Modified by: jiangxiaowei
 * @Last Modified time: 2022-01-20 19:48:12
 */

import type { Plugin } from 'ajv/dist/2019'
/**
 * 计算中文、英文最长最短长度
 * @schemaKey {number} max 最大长度
 * @schemaKey {number} min 最短长度
 */
export const dateChecking: Plugin<undefined> = (ajv) => {
  if (!ajv.getKeyword('dateChecking')) {
    ajv.addKeyword({
      // schema关键字
      keyword: 'dateChecking',
      // 允许的校验类型
      type: 'object',
      // modifying:true,
      // 校验函数
      validate: (
        schema: {
          earlierDateChecking: string
          authModeDateChecking: string
        },
        data: any
      ): boolean => {
        const { earlierDateChecking, authModeDateChecking } = schema
        // // eslint-disable-next-line no-control-regex
        if (
          typeof data === 'object' &&
          data.self &&
          data[earlierDateChecking]
        ) {
          const from = new Date(data[earlierDateChecking]).getTime()
          const to = new Date(data.self).getTime()
          if (to <= from && authModeDateChecking === 'lt') {
            return false
          } else if (to < from && authModeDateChecking === 'lte') {
            return false
          }
        }
        return true
      },
    })
  }
  return ajv
}
