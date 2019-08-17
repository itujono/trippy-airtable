import React, { useState, Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { createAppStore } from "./store"

const Trip = React.lazy(() => import("./pages/Trip"))
const Main = React.lazy(() => import("./pages/Main"))

const App = () => {
    const [mode, setMode] = useState("light")
    const handleToggle = () => setMode(mode === "light" ? "dark" : "light")

    return (
        <Provider store={createAppStore()}>
            <BrowserRouter>
                <ThemeProvider theme={{ mode, toggle: handleToggle }}>
                    <Switch>
                        <Suspense fallback="Loading...">
                            <Route exact path="/" component={Main} />
                            <Route path="/trip" component={Trip} />
                        </Suspense>
                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App
