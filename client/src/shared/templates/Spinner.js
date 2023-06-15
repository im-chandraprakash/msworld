import { Spin } from 'antd'
import React from 'react'

function Spinner() {
  return (
    <div>
        <Spin  style={{position:'fixed' , left:'50%' , top:"30%" }} tip="Loading....." size='large'></Spin>
    </div>
  )
}

export default Spinner