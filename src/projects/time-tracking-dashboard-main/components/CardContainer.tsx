import React from 'react';
import Card from '../../../components/Card/Card';

export interface CardContainerProps {
    title: string
    time: object
    background: string
    timeframes: 'daily' | 'weekly' | 'monthly'
}

const CardContainer: React.FC<CardContainerProps> = ({ 
    title,
    time,
    background,
    timeframes='weekly'
}) =>{

    return (
        <div className='tt__cardContainer'>
            <Card 
                width='100%'
                height = '150px'
                position='relative' 
                background={background}
            >
                <Card 
                    background='hsl(235, 46%, 20%)'
                    width='100%'
                    position='absolute'
                    bottom='0'
                >
                    <div className='cardContent'>
                        <h1>{title}</h1>
                    </div>
                </Card>
            </Card>
        </div>
    )
}

export default CardContainer;
