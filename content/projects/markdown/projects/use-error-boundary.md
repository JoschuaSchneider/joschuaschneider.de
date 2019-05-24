[![npm version](https://img.shields.io/npm/v/use-error-boundary.svg)](https://www.npmjs.com/package/use-error-boundary)
![build status](https://travis-ci.org/JoschuaSchneider/use-error-boundary.svg?branch=master)
![license](https://img.shields.io/npm/l/use-error-boundary.svg)

Opensource `react` package on npm.  
React hook to use error boundaries in your functional component and keep track of the error state.

Built with `es7` syntax, babel for building, testing using `jest` and `enzyme` and published using `travis-ci`.

```javascript
import { useErrorBoundary } from 'use-error-boundary'

const MyComponent = () => {
    const {
        ErrorBoundary,
        didCatch,
        error,
        errorInfo
    } = useErrorBoundary()

    return (
        <ErrorBoundary>
            <SomeChildThatMightThrow />
        </ErrorBoundary>
    )
}
```