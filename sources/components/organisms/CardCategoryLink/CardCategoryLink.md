**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardCategoryLink
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-pen-nib"
                    color={colors.pink}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-book-open"
                    color={colors.purple}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-camera-retro"
                    color={colors.blue}
                />
            </Grid>
        </Grid>
    </Router>
</ThemeProvider>
```

**Outlined Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardCategoryLink
                    variant="outlined"
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-pen-nib"
                    color={colors.pink}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    variant="outlined"
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-book-open"
                    color={colors.purple}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    variant="outlined"
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-camera-retro"
                    color={colors.blue}
                />
            </Grid>
        </Grid>
    </Router>
</ThemeProvider>
```

**Custom Shadow and LiftUp Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardCategoryLink
                    withShadow
                    liftUp
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-pen-nib"
                    color={colors.pink}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    withShadow
                    liftUp
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-book-open"
                    color={colors.purple}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    withShadow
                    liftUp
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-camera-retro"
                    color={colors.blue}
                />
            </Grid>
        </Grid>
    </Router>
</ThemeProvider>
```

**Center Aligned**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardCategoryLink
                    withShadow
                    liftUp
                    align="center"
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-pen-nib"
                    color={colors.pink}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    withShadow
                    liftUp
                    align="center"
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-book-open"
                    color={colors.purple}
                />
            </Grid>
            <Grid item xs={4}>
                <CardCategoryLink
                    withShadow
                    liftUp
                    align="center"
                    title="Online Courses"
                    subtitle="Choose from over 1000+ online video courses."
                    fontIconClass="fas fa-camera-retro"
                    color={colors.blue}
                />
            </Grid>
        </Grid>
    </Router>
</ThemeProvider>
```