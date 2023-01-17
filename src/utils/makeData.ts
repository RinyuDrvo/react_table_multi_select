import Company from "../models/Company";
import { faker } from '@faker-js/faker'

/** 数値分の配列を生成 */
const range = (len: number): number[] => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

/** 会社生成 */
const newCompany = (): Company => {
  return {
    name: faker.company.name(),
    corporateNumber: faker.datatype.number({
      min: 1000000000000,
      max: 9999999999999
    }),
    initialCapital: faker.datatype.number(99999),
    foundedIn: faker.datatype.number({
      min: 1800,
      max: 2023
    })
  }
}

/** テーブル用ダミーデータの生成 */
export default function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Company[] => {
    const len = lens[depth]!
    return range(len).map((d): Company => {
      return {
        ...newCompany(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      }
    })
  }

  return makeDataLevel()
}

