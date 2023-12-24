import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

interface Props{
  onSelectSortOrder: (sortOrder: string)=> void;
}
const SortSelector = ({onSelectSortOrder}:Props) => {
  const sortOrders = [
    {value:"", label:"Relevance"},
    {value:"-added", label:"Date added"},
    {value:"name", label:"Name"},
    {value:"-release", label:"Release date"},
    {value:"-metacritic", label:"Popularity"},
    {value:"-rating", label:"Average rating"},
  ]
  return (
    <div className="flex w-[240px] ml-3">
    <Select 
      label="Order by" 
      className="max-w-xs"
      defaultSelectedKeys={[""]} 
      size='sm'
    >
      {
        sortOrders.map((order)=>(
          <SelectItem onClick={()=> onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</SelectItem>
        ))
      }
    </Select>
  </div>
  )
}

export default SortSelector