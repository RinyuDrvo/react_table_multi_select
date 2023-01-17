import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import Table from "../components/Table";
import Company from "../models/Company";
import makeData from "../utils/makeData";

/** トップページ */
function Top() {
  const columnHelper = createColumnHelper<Company>()
  /** カラム設定 */
  const columns: ColumnDef<Company, any>[] = [
    columnHelper.accessor('corporateNumber', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('name', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('initialCapital', {
      cell: info => info.getValue()
    }),
    columnHelper.accessor('foundedIn', {
      cell: info => info.getValue()
    })
  ]

  const [data] = React.useState(() => makeData(100))

  return (
    <>
      <Table
        {...{
          data,
          columns
        }}
      />
    </>
  )
}

export default Top
