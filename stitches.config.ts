import { createStitches } from '@stitches/react'
import {
  slate,
  slateA,
  slateDark,
  slateDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  violet,
  violetA,
  violetDark,
  violetDarkA,
  orange,
  orangeA,
  orangeDark,
  orangeDarkA,
} from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...slate,
      ...slateA,
      ...gray,
      ...grayA,
      ...blue,
      ...blueA,
      ...green,
      ...greenA,
      ...red,
      ...redA,
      ...violet,
      ...violetA,
      ...orange,
      ...orangeA,

      // Semantic colors
      bgTheme: '$slate1',
      hiContrast: '$slate12',
      loContrast: 'white',
      canvas: 'hsl(0 0% 93%)',
      panel: 'white',
      transparentPanel: 'hsl(0 0% 0% .97)',
      shadowLight: 'hsl(206 22% 7% .35)',
      shadowDark: 'hsl(206 22% 7% .20)',
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...slateDark,
    ...slateDarkA,
    ...grayDark,
    ...grayDarkA,
    ...blueDark,
    ...blueDarkA,
    ...greenDark,
    ...greenDarkA,
    ...redDark,
    ...redDarkA,
    ...violetDark,
    ...violetDarkA,
    ...orangeDark,
    ...orangeDarkA,

    bgRocketseat: '#121214',

    // Semantic colors
    bgTheme: '$bgRocketseat',
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% .97)',
    shadowLight: 'hsl(206 22% 7% .35)',
    shadowDark: 'hsl(206 22% 7% .20)',
  },
})
