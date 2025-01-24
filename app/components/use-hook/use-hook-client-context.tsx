"use client"

import React, { use } from 'react'
import ExampleSection from '../shared/ExampleSection';
import { ThemeContext } from './themeContext';

const UseHookClientContext: React.FC = () => {
    const theme = use(ThemeContext)
    return (
        <ExampleSection>
            <code>System theme is: {theme}</code>
        </ExampleSection>
    );
}
export default UseHookClientContext;