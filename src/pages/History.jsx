import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DashboardLayout } from '../components'

const History = () => {
  const { user } = useSelector(store => store.User)
  const dispatch = useDispatch()

  return (
    <DashboardLayout>
      <p>History page</p>
    </DashboardLayout>
  )
}

export default History
