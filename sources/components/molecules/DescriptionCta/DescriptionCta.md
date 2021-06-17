**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core"

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <DescriptionCta
        title="Apply in 15 minutes"
        subtitle="Get your dream job without the hassle."
        primaryCta={<Button variant="outlined" color="primary" size="large">Learn More</Button>}
        secondaryCta={<Button variant="contained" color="primary" size="large">Apply now</Button>}
        align="left"
    />
</ThemeProvider>