**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { SwiperImage } from "../../molecules";

import theme from "../../../theme";

const item = {
    images: [{
        src: '/assets/images/photos/coworking/place3.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/coworking-main-hero.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place1.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place2.jpg',
        alt: '', 
    }],
    title: 'Tenoha Space',
    address: 'Via E. Gola 4, 20147 Milan, Italy',
    price: '$980 / month',
};

<ThemeProvider theme={theme}>
    <CardProduct
        style={{ maxWidth: 300 }}
        mediaContent={(
            <>
                <SwiperImage
                    items={item.images}
                />
                <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
                    <Typography variant="body1" color="primary">
                        {item.price}
                    </Typography>
                </div>
            </>
        )}
        cardContent={(
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary" align="left">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
                </Grid>
            </Grid>
        )}
    />
</ThemeProvider>
```

**Custom Shadow Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { SwiperImage } from "../../molecules";

import theme from "../../../theme";

const item = {
    images: [{
        src: '/assets/images/photos/coworking/place3.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/coworking-main-hero.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place1.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place2.jpg',
        alt: '', 
    }],
    title: 'Tenoha Space',
    address: 'Via E. Gola 4, 20147 Milan, Italy',
    price: '$980 / month',
};

<ThemeProvider theme={theme}>
    <CardProduct
        withShadow
        style={{ maxWidth: 300 }}
        mediaContent={(
            <>
                <SwiperImage
                    items={item.images}
                />
                <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
                    <Typography variant="body1" color="primary">
                        {item.price}
                    </Typography>
                </div>
            </>
        )}
        cardContent={(
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary" align="left">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
                </Grid>
            </Grid>
        )}
    />
</ThemeProvider>
```

**LiftUp Effect Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { SwiperImage } from "../../molecules";

import theme from "../../../theme";

const item = {
    images: [{
        src: '/assets/images/photos/coworking/place3.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/coworking-main-hero.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place1.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place2.jpg',
        alt: '', 
    }],
    title: 'Tenoha Space',
    address: 'Via E. Gola 4, 20147 Milan, Italy',
    price: '$980 / month',
};

<ThemeProvider theme={theme}>
    <CardProduct
        withShadow
        liftUp
        style={{ maxWidth: 300 }}
        mediaContent={(
            <>
                <SwiperImage
                    items={item.images}
                />
                <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
                    <Typography variant="body1" color="primary">
                        {item.price}
                    </Typography>
                </div>
            </>
        )}
        cardContent={(
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary" align="left">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
                </Grid>
            </Grid>
        )}
    />
</ThemeProvider>
```

**Basic Card with No Border and No Shadow Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { SwiperImage } from "../../molecules";

import theme from "../../../theme";

const item = {
    images: [{
        src: '/assets/images/photos/coworking/place3.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/coworking-main-hero.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place1.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place2.jpg',
        alt: '', 
    }],
    title: 'Tenoha Space',
    address: 'Via E. Gola 4, 20147 Milan, Italy',
    price: '$980 / month',
};

<ThemeProvider theme={theme}>
    <CardProduct
        noBorder
        noShadow
        style={{ maxWidth: 300 }}
        mediaContent={(
            <>
                <SwiperImage
                    items={item.images}
                />
                <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
                    <Typography variant="body1" color="primary">
                        {item.price}
                    </Typography>
                </div>
            </>
        )}
        cardContent={(
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary" align="left">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
                </Grid>
            </Grid>
        )}
    />
</ThemeProvider>
```

**Basic Card with Outlined Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { SwiperImage } from "../../molecules";

import theme from "../../../theme";

const item = {
    images: [{
        src: '/assets/images/photos/coworking/place3.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/coworking-main-hero.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place1.jpg',
        alt: '', 
    }, {
        src: '/assets/images/photos/coworking/place2.jpg',
        alt: '', 
    }],
    title: 'Tenoha Space',
    address: 'Via E. Gola 4, 20147 Milan, Italy',
    price: '$980 / month',
};

<ThemeProvider theme={theme}>
    <CardProduct
        variant="outlined"
        style={{ maxWidth: 300 }}
        mediaContent={(
            <>
                <SwiperImage
                    items={item.images}
                />
                <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>
                    <Typography variant="body1" color="primary">
                        {item.price}
                    </Typography>
                </div>
            </>
        )}
        cardContent={(
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary" align="left">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary" align="left">{item.address}</Typography>
                </Grid>
            </Grid>
        )}
    />
</ThemeProvider>
```