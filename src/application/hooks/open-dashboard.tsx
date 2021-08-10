import React, { useState, createContext, useContext } from 'react'

type DashboardContextData = {
  open: boolean
  openSidebar: (value: boolean) => void
}

const DashboardContext = createContext({} as DashboardContextData)

const DashboardProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(true)

  const openSidebar = (value: boolean): void => {
    setOpen(value)
  }

  return <DashboardContext.Provider value={{ open, openSidebar }}>{children}</DashboardContext.Provider>
}

const useDashboard = (): DashboardContextData => {
  const context = useContext(DashboardContext)
  return context
}

export { useDashboard, DashboardProvider }
