**Basic Example**
```jsx
import React from "react";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import theme from "../../../theme";
<ThemeProvider theme={theme}>
    <HeroSimpleBackground backgroundImage="/assets/images/shapes/banner-bg.svg">
        <Section narrow>
            <SectionHeader
                title="Supercharge Your Web Product's UI/UX Design"
                titleVariant="h2"
                subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
                ctaGroup={[(
                    <Button color="primary" variant="contained" size="large">Try for free</Button>
                ), (
                    <Button color="primary" variant="outlined" size="large">See pricings</Button>
                )]}
            />
        </Section>
    </HeroSimpleBackground>
</ThemeProvider>
```