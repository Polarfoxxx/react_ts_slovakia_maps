import React from "react"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import citiesJSON from "../../utils/cities.json"
import { Container } from "../../Container"
import { TypeCitesObject } from "../../Container/types"
import { TypeCitesArray } from "../../Container/types"



function Table(): JSX.Element {
    const { setCities, cities } = React.useContext(Container.Context)
    const [data, setData] = React.useState(() => [...cities])
    const rerender = React.useReducer(() => ({}), {})[1]
    let newCityArray: TypeCitesArray = []

/* funkcia oznacenia mesta z JSONu..  */
const handleTable = ( id: string ): void => {
    cities.forEach((item: TypeCitesObject) => {
        if (item.mesto === id) {
            item.select = true
        } else {item.select = false }
        newCityArray.push(item)
    })
    setCities(newCityArray)
}


const columnHelper = createColumnHelper<TypeCitesObject>()
const columns = [
    columnHelper.accessor('mesto', {
        id: 'mesto',
        cell: info => <i onClick={(id) => {handleTable(info.getValue())}} style={{cursor: "pointer"}}>{info.getValue()}</i>,
        header: () => <span>mesto</span>,
    }),
    columnHelper.accessor(row => row.pocetObyvatelov, {
        id: 'obyvatelia',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>people</span>,
    }),
    columnHelper.accessor('psc', {
        id: 'psc',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>people</span>,
    }),
]

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
                        <tr key={row.id}
                        style={{background: "red"}}
                        >
                            {row.getVisibleCells().map(cell => (
                                <td
                                
                                key={cell.id}>
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