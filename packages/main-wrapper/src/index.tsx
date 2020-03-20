import React, { FC, ReactNode } from 'react'

export const MainWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="theme-light ltr-support" dir="ltr">
    <div className="wrapper">{children}</div>
  </div>
)
