import React, { useState } from 'react';
import Profile from './components/Profile';
import CardContainer from './components/CardContainer';
import data from './data.json';
import './index.scss';

const Index = () => {
    const [switcher, setSwitcher] = useState<string>('weekly')

    const time:string[] = ['weekly', 'daily', 'monthly']

    const handleChange = (value: string) => setSwitcher(value)

    return (
        <div className='tt__trackingDashboard'>
            <Profile
                time={time}
                action={handleChange}
            />
            {data.map((item, index) => {
                return(
                    <CardContainer 
                        key={index} 
                        title={item.title}
                        background={item.background}
                        time={item.timeframes}
                        timeframes={switcher}
                    />
                )
            })}
        </div>
    )
}

export default Index;
