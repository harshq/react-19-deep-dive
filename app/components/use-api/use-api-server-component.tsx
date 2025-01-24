import React, { Suspense } from 'react'
import UseApiClientComponent from './use-api-client-component';
import ErrorBoundary from './ErrorBoundry';
import ExampleSection from '../shared/ExampleSection';

const UseApiServerComponent: React.FC = () => {
    // promise is created on the server component
    const promise = fetch(`https://jsonplaceholder.typicode.com/posts/1`, { cache: 'no-store' }).then(res => res.json())
    return (
        <ExampleSection>
            {/* 
                we have an suspense around client component.
                This makes sure, we see a fallback UI until 
                the promise is resolved.
            */}

            <ErrorBoundary>
                <Suspense fallback={<p>Streaming data...</p>}>
                    <UseApiClientComponent data={promise} />
                </Suspense>
            </ErrorBoundary>
        </ExampleSection>
    );
}
export default UseApiServerComponent