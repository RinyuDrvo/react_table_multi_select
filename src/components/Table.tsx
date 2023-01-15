import React from "react";
import Company from "../models/Company";
import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

/** 表に固定表示するデータ */
const defaultCompanyData: Company[] = [
  {
    name: 'りんゆ株式会社',
    corporateNumber: 1123456789012,
    initialCapital: 1000,
    foundedIn: 2022
  },
  {
    name: '合同会社ミミズク',
    corporateNumber: 2123456789012,
    initialCapital: 20000,
    foundedIn: 1988
  },
  {
    name: '有限会社フクロウ',
    corporateNumber: 3123456789012,
    initialCapital: 100,
    foundedIn: 1999
  }
]

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

function Table() {
  const [data] = React.useState(() => [...defaultCompanyData])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="table-container">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
