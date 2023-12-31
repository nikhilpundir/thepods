import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <h1>Order Successfull</h1>
        <p>Reference no. {referenceNum}</p>
    </div>
  )
}

export default PaymentSuccess
