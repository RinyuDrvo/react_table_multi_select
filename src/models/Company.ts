/** 会社情報 */
type Company = {
  /** 会社名 */
  name: string,
  /** 法人番号 */
  corporateNumber: number,
  /** 資本金(万円) */
  initialCapital: number,
  /** 設立年 */
  foundedIn: number
  /** 再帰用 */
  subRows?: Company[]
}

export default Company
