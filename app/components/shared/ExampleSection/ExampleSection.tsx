import React from 'react'

const ExampleSection: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    return (
        <div className='p-5 border-4 border-slate-300 border-dashed rounded-2xl min-h-[220px]'>
            {children}
        </div>
    );
}
export default ExampleSection;