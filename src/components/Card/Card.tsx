import React, { ReactNode } from 'react'

export interface CardProps {
    children?: ReactNode
    radius?: string
    height?: string
    width?: string
    background?: string
    position?: 'absolute' | 'sticky' | 'relative'
    top?: string
    bottom?: string
    left?: string
    right?: string
    padding?: string
}

const Card: React.FC<CardProps> = ({
    radius = '15px',
    children,
    height = '100px',
    width = '200px',
    background = '#FFF', 
    position,
    ...props
}) => {
    return (
        <div 
            className='card' 
            style={{
                borderRadius: radius,
                height,
                width,
                backgroundColor: background,
                position,
                top: props.top,
                bottom: props.bottom,
                left: props.left,
                right: props.right,
                padding: props.padding,
            }}
        >
            {children}
        </div>
    )
}

export default Card;
