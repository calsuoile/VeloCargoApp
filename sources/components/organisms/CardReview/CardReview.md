**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate } from "../../molecules";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardReview
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: '/assets/images/photos/people/veronica-adams.jpg', srcSet: '/assets/images/photos/people/veronica-adams@2x.jpg 2x' }}
    />
</ThemeProvider>
```

**Custom Shadow Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate } from "../../molecules";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardReview
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: '/assets/images/photos/people/veronica-adams.jpg', srcSet: '/assets/images/photos/people/veronica-adams@2x.jpg 2x' }}
    />
</ThemeProvider>
```

**LiftUp Effect Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate } from "../../molecules";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardReview
        liftUp
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: '/assets/images/photos/people/veronica-adams.jpg', srcSet: '/assets/images/photos/people/veronica-adams@2x.jpg 2x' }}
    />
</ThemeProvider>
```

**Basic Card with No Border and No Shadow Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate } from "../../molecules";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardReview
        noBorder
        noShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: '/assets/images/photos/people/veronica-adams.jpg', srcSet: '/assets/images/photos/people/veronica-adams@2x.jpg 2x' }}
    />
</ThemeProvider>
```

**Basic Card with Outlined Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { IconAlternate } from "../../molecules";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <CardReview
        variant="outlined"
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        authorName="Veronica Adams"
        authorTitle="Growth Marketer, Crealytics"
        authorPhoto={{ src: '/assets/images/photos/people/veronica-adams.jpg', srcSet: '/assets/images/photos/people/veronica-adams@2x.jpg 2x' }}
    />
</ThemeProvider>
```