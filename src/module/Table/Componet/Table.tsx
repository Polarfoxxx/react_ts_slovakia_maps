import React from "react"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

type Person = {
    cityName: string
    people: number
    country: string

}

const defaultData: Person[] = [
    {
        cityName: 'London',
        people: 4545456,
        country: "Slovakia",

    },
    {
        cityName: 'Skalica',
        people: 4545456,
        country: "Slovakia",

    },
    {
        cityName: 'Poprad',
        people: 4545456,
        country: "Slovakia",

    },
]
const columnHelper = createColumnHelper<Person>()
const columns = [
    columnHelper.accessor('cityName', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor(row => row.people, {
        id: 'lastName',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>people</span>,
    }),
    columnHelper.accessor('country', {
        header: () => 'Age',
        cell: info => info.renderValue(),
    }),
]


function Table(): JSX.Element {
    const [data, setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="p-2">
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
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
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
            <div className="h-4" />
            <button onClick={() => rerender()} className="border p-2">
                Rerender
            </button>
        </div>
    )
}

export default Table