import React, { FC } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import { Card, CardBody, Col } from 'reactstrap'
import styles from './styles.module.scss'

export const ProgressCircle: FC<{
  Icon: React.ReactNode
  color: string
  title: string
  subTitle: string
  value: number
  unit: string
}> = ({ Icon, color, title, value, unit, subTitle }) => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12} data-testid="progress-circle">
    <Card>
      <CardBody className={styles.container}>
        <div className={styles.title}>
          <h5>{title}</h5>
        </div>
        <div className={styles.healthChart}>
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie
                data={[
                  { value: 360, fill: `#${color}` },
                  { value: 140, fill: '#eeeeee' },
                ]}
                dataKey="value"
                cy={85}
                innerRadius={80}
                outerRadius={90}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.info}>
            {Icon}
            <p className={styles.number}>{value}</p>
            <p className={styles.units}>{unit}</p>
          </div>
        </div>
        <p className={styles.goal}>{subTitle}</p>
      </CardBody>
    </Card>
  </Col>
)
