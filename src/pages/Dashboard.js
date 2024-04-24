import React, { useEffect } from 'react'
import {BsArrowDownRight ,BsArrowUpRight} from "react-icons/bs"

import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyDate } from '../features/auth/authSlice';
const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
      },
  ];
  const data = []; 
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      status: `London, Park Lane no. ${i}`,
    });
  }
const Dashboard = () => {

const dispatch = useDispatch()
const monthlyDataSate = useSelector(state => state.auth.monthlyData)
useEffect (() => {
  dispatch(getMonthlyDate())
},[])
useEffect(() => {
  let monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ]
    let data=[]
    for(let index = 0 ; index <monthlyDataSate?.length ; index ++)
    {
      const element = monthlyDataSate[index];
      data.push({type : monthNames[element?._id?.month]})
    }
    console.log(data)
},[monthlyDataSate])




    const data1 = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data1,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd700";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 roudned-3'>
            <div><p className='desc'>Total</p><h4 className='mb-0 sub-title'>$1100</h4></div>
            <div className='d-flex flex-column align-items-end'>
                <h6 className='red'><BsArrowDownRight />32%</h6><p className='mb-0 desc'>Compared To April 2022</p></div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 roudned-3'>
            <div><p   className='desc' >Total</p><h4 className='mb-0 sub-title'>$1100</h4></div>
            <div className='d-flex flex-column align-items-end'>
                <h6><BsArrowDownRight />32%</h6><p className='mb-0 desc'>Compared To April 2022</p></div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 roudned-3'>
            <div><p  className='desc' >Total</p><h4 className='mb-0 sub-title'>$1100</h4></div>
            <div className='d-flex flex-column align-items-end'>
                <h6 className='green'><BsArrowDownRight />32%</h6><p className='mb-0 desc'>Compared To April 2022</p></div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Income Statics</h3>
        <div>   </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Recent Orders</h3>
        <div>
        <Table  columns={columns} dataSource={data} />
        </div>
      </div>
    
    </div>
  )
}

export default Dashboard
