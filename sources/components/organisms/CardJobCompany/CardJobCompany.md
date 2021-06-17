**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardJobCompany
                    jobTitle="Senior Developer"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
                />
            </Grid>
            <Grid item xs={4}>
                <CardJobCompany
                    jobTitle="Web designer internship"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
                />
            </Grid>
            <Grid item xs={4}>
                <CardJobCompany
                    jobTitle="UI/UX Designer"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
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
import { Grid } from "@material-ui/core";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardJobCompany
                    variant="outlined"
                    jobTitle="Senior Developer"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
                />
            </Grid>
            <Grid item xs={4}>
                <CardJobCompany
                    variant="outlined"
                    jobTitle="Web Design"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
                />
            </Grid>
            <Grid item xs={4}>
                <CardJobCompany
                    variant="outlined"
                    jobTitle="UI/UX Designer"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
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
import { Grid } from "@material-ui/core";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <CardJobCompany
                    withShadow
                    liftUp
                    jobTitle="Senior Developer"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
                />
            </Grid>
            <Grid item xs={4}>
                <CardJobCompany
                    withShadow
                    liftUp
                    jobTitle="Web designer internship"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
                />
            </Grid>
            <Grid item xs={4}>
                <CardJobCompany
                    withShadow
                    liftUp
                    jobTitle="UI/UX Designer"
                    jobLocation="Milan, Italy"
                    companyName="Slack"
                    companyLogo="/assets/images/logos/slack.svg"
                    jobsCount="2 jobs"
                    companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
                />
            </Grid>
        </Grid>
    </Router>
</ThemeProvider>
```