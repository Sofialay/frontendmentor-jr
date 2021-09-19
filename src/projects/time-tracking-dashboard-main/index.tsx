import React, { useState } from 'react';
import data from './data.json';
import CardContainer from './components/CardContainer';
import './index.scss';

const Index = () => {
    const [switcher, setSwitcher] = useState<'weekly' | 'daily' | 'monthly'>('weekly')

    return (
        <div className='tt__trackingDashboard'>
            {/* Make the user profile UI */}
            <div>
                <button 
                    onClick={()=>setSwitcher('daily')}>
                    Daily
                </button>
            </div>
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
