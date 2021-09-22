import React from 'react'

export interface ProfileProps {
    time: string[]
    action: (value: string) => void
}

const Profile: React.FC<ProfileProps> = ({ 
    time, 
    action
}) =>{
    return(
        <>
            {time.map((item:string, index: number)=> {
                return (
                    <button 
                        onClick={() => action(item)} 
                        key={index}>
                            {item}
                    </button>
                )
            })}
        </>
    )
}

export default Profile;
