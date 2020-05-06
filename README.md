# expo-ui-kit - a components based React-Native UI Kit

expo-ui-kit is a React-Native UI framework based on Expo.io SDK that will help build React-Native Expo apps using predefined & customizable UI components.

**UI Components:**

- Block: based on [React-Native View](https://facebook.github.io/react-native/docs/view) component
- Card: Block with predefined props
- Button: based on [React-Native TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity) with predefined props and styles
- Input: based on [React-Native TextInput](https://facebook.github.io/react-native/docs/textinput) component
- Text: Typography component based on [React-Native Text](https://facebook.github.io/react-native/docs/text) component

**Tools & Utils:**

- **helpers**: getMargins, getPaddings, mergeTheme
- **rgba**: transform hex colors into rgba colors using opacity
- **theme.js**: default theme for UI components with predefined values for: COLORS, SIZES, FONTS

# Block

https://reactnative.dev/docs/view

https://reactnative.dev/docs/flexbox

Usage:

- default Block has flex: 1

```html
<Block>
  <Text>components</Text>
</Block>
```

- disable flex

```html
<Block flex="{0}">
  <Text>flex: 0</Text>
</Block>
<Block noFlex>
  <Text>flex: 0</Text>
</Block>
```

- flex for half of the size

```html
<Block flex="{0.5}">
  <Text>flex: 0.5</Text>
</Block>
```

- row will render flexDirection: row

```html
<Block row>
  <Text>text 1</Text>
  <Text>text 2</Text>
</Block>
```

- vertical centering the content

```html
<Block center>
  <Text>text 1</Text>
  <Text>text 2</Text>
</Block>
```

- horizontal centering the content

```html
<Block middle>
  <Text>text 1</Text>
  <Text>text 2</Text>
</Block>
```

- vertical & horizontal centering the content

```html
<Block center middle>
  <Text>text 1</Text>
  <Text>text 2</Text>
</Block>
```

Colors

- will render backgroundColor using predefined colors from theme.js COLORS array
- predefined colors: primary, secondary, tertiary, black, white, gray, error, warning, success, info

```html
<Block primary>
  <Text>backgroundColor: COLORS.primary</Text>
</Block>
<Block secondary>
  <Text>backgroundColor: COLORS.secondary</Text>
</Block>
```

- custom color using hex color

```html
<Block color="#DDDDDD">
  <Text>backgroundColor: #DDDDDD</Text>
</Block>
```

Arrange content using justifyContent

https://reactnative.dev/docs/layout-props#justifycontent

- space between the content

```html
<Block space="between">
  <Text>1st text</Text>
  <Text>2nd text</Text>
</Block>
```

- space evenly the content

```html
<Block space="evenly">
  <Text>1st text</Text>
  <Text>2nd text</Text>
</Block>
```

- space around the content

```html
<Block space="around">
  <Text>1st text</Text>
  <Text>2nd text</Text>
</Block>
```

Border radius

- round the corners using borderRadius: 6

```html
<Block radius="{6}">
  <Text>1st text</Text>
  <Text>2nd text</Text>
</Block>
```

Wrap content using flexWrap, default flexWrap: 'nowrap'

https://reactnative.dev/docs/flexbox#flex-wrap

- flexWrap: 'wrap'

```html
<Block wrap>
  <Text>1st text</Text>
  <Text>2nd text</Text>
  <Text>3rd text</Text>
</Block>
```

For animations animate props can be use to render Animated.View component

- animated will render Animated.View

```html
<Block animated>
  <Text>animated view</Text>
</Block>
```

For safe area views, safe props can be use to render SafeAreaView component

- safe will render SafeAreaView

```html
<Block safe>
  <Text>safe area view</Text>
</Block>
```

# Button

https://reactnative.dev/docs/touchableopacity

https://reactnative.dev/docs/touchablehighlight

https://reactnative.dev/docs/touchablenativefeedback

https://reactnative.dev/docs/touchablewithoutfeedback

Default render an instance of TouchableOpacity

- TouchableHighlight

```html
<button highlight>
  <Text>instance of TouchableHighlight</Text>
</button>
```

- TouchableNativeFeedback

```html
<button nativeFeedback>
  <Text>instance of TouchableNativeFeedback</Text>
</button>
```

- TouchableWithoutFeedback

```html
<button withoutFeedback>
  <Text>instance of TouchableWithoutFeedback</Text>
</button>
```

Colors

- will render backgroundColor using predefined colors from theme.js COLORS array
- predefined colors: primary, secondary, tertiary, black, white, gray, error, warning, success, info

```html
<button primary>
  <Text>backgroundColor: COLORS.primary</Text>
</button>
<button transparent>
  <Text>backgroundColor: "transparent"</Text>
</button>
```

- custom color using hex color

```html
<button color="#DDDDDD">
  <Text>backgroundColor: #DDDDDD</Text>
</button>
```

Set activeOpacity using opacity prop
default activeOpacity=0.8

```html
<button opacity="{0.5}">
  <Text>opacity={0.5}</Text>
</button>
```

Outlined and add borderColor equal with backgroundColor

```html
<button primary outlined>
  <Text>outlined</Text>
</button>
```

Disabling the button

```html
<button disabled>
  <Text>disabled</Text>
</button>
<button disabled="{false}">
  <Text>false</Text>
</button>
```

Add flex to button style

```html
<button flex>
  <Text>flex=1</Text>
</button>
<button flex="{2}">
  <Text>flex=2</Text>
</button>
```

Add height to button style

```html
<button height="{58}">
  <Text>height=58</Text>
</button>
```

# Card

https://reactnative.dev/docs/view

https://reactnative.dev/docs/flexbox

Using Block component with predefined props: color, radius and padding

```html
<Card>
  <Text>default card</Text>
</Card>
```

Border radius using radius props

```html
<Card radius="{8}">
  <Text>radius={8}</Text>
</Card>
```

Padding using padding props

- default padding={SIZES.base}

```html
<Card padding="{12}">
  <Text>padding={12}</Text>
</Card>
```

Set shadow using shadow props

- default shadow with color black and elevation
- shadowOffset is calculated using elevation - 1
- shadowRadius is equal with elevation value

```html
<Card shadow>
  <Text>shadow</Text>
</Card>

<Card shadow elevation="{2}">
  <Text>shadow elevation={2}</Text>
</Card>
```

Set borderColor using outlined prop

- default borderWidth: 1 and borderColor: Utils.rgba(COLORS.black, 0.16) with alpha 0.16

```html
<Card outlined>
  <Text>outlined</Text>
</Card>
```

# Input

https://reactnative.dev/docs/textinput

Validation

- onValidation return a single boolean or object with boolean values
- pattern using regex string for validating the value
- single pattern to validate the value

```html
<Input pattern="/\d/" // validate digits onValidation={isValid =>
console.log(isValid)} />
```

- multiple pattern to validate the value

```html
<Input pattern={[ "/\d/", "/\w/"]} // validate digits and words
onValidation={isValid => console.log(isValid)} />
```

Border color using color prop

```html
<input color="red" />
```

Pass ref from props using internalRef reference

```html
<Input internalRef={c => this.c} />
```

# Text

https://reactnative.dev/docs/text

Usage:

- fontSize predefined by theme.js

```html
<Text h1>fontSize of 34 from FONTS.h1</Text>
<Text h2>fontSize of 24 from FONTS.h2</Text>
<Text h3>fontSize of 20 from FONTS.h3</Text>
<Text title>fontSize of 18 from FONTS.title</Text>
<Text subtitle>fontSize of 14 from FONTS.subtitle</Text>
<Text caption>fontSize of 12 from FONTS.caption</Text>
<Text small>fontSize of 10 from FONTS.small</Text>
```

- fontSize defined by user

```html
<Text size="{20}">fontSize of 20</Text>
```

- margin & padding

```html
<Text margin="{4}">set margin 4 to: top, right, bottom & left</Text>
<Text padding="{6}">set margin 6 to: top, right, bottom & left</Text>
```

- text styling

```html
<Text transform>textTransform: capitalize, lowercase, uppercase</Text>
<Text regular>fontWeight from WEIGHTS.regular</Text>
<Text bold>fontWeight from WEIGHTS.bold</Text>
<Text semibold>fontWeight from WEIGHTS.semibold</Text>
<Text medium>fontWeight from WEIGHTS.medium</Text>
<Text light>fontWeight from WEIGHTS.light</Text>
<Text weight="700">fontWeight from user input</Text>
```

- text colors

```html
<Text primary>color from COLORS.primary</Text>
<Text secondary>color from COLORS.secondary</Text>
<Text tertiary>color from COLORS.tertiary</Text>
<Text black>color from COLORS.black</Text>
<Text white>color from COLORS.white</Text>
<Text gray>color from COLORS.gray</Text>
<Text info>color from COLORS.info</Text>
<Text success>color from COLORS.success</Text>
<Text warning>color from COLORS.warning</Text>
<Text error>color from COLORS.error</Text>
<Text color="#DDD">color from user input</Text>
```

custom theme using the src/theme.js data structure

- create a custom theme by defining: const customTheme.js
- with the following structure to rewrite any value

```js
{
  COLORS: {
    primary: "cyan" or "#8A00D4",
    secondary: "fucsia" or "#D527B7",
    tertiary: "yellow" or "#FFC46B"
  },
  SIZES: {
    font: 15,
    h1: 28
    title: 17
  }
}
```

- include the custom theme to the component props

```html
<Text primary theme="{customTheme}">primary using new color: #8A00D4</Text>
```

- animating text can be used using the "animated" props

```html
<Text animated>will render Animated.Text</Text>
```
