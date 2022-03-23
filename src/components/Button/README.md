# Button Component

A Button that takes label text as a mandatory prop and returns a React Button component.

## **_List of props_**

```typescript

label: string - text to be displayed inside the button

size?: string - "lg" | "md" | "sm"

type?: string  - normal html button types - "button" | "submit" | "reset"

btnType?: string  - "primary" | "secondary" | "ghost"

className?: string - additional css to be applied

onClick?: () => void - for click behavour

shape?: string - "default" | "rounded" | "pill"

styles?: object - inline styles to be applied

isDarkMode?: boolean - default: false

```

## **_Example_**

```typescript
import { Button } from 'react-component-lib'

const App = () => {
    return <div className="App">
        <Button label="Hello World" style='default' isDarkMode={true}>
    </div>
}
```
