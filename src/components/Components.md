# Components

Each component is a project in itself and should operate as independently as possible. Components follow an atomic structure, so all its parts are separated individually. Each component consists of:

- `index.ts` - Here we decide what to expose to the external system.
- `Component.story.ts` - Presentation of the component.
- `Component.view.ts` - The View part of the component.
- `useViewModel.ts` - The ViewModel of the component, where the component logic is stored.
- `types.ts` - All types used by the component.
- `styles.ts` - All styles used by the component.
- `Component.view.test.ts` - Test for the View part.
- `useViewModel.test.ts` - Test for the ViewModel, i.e., the component logic.

The component is composed of `useViewModel` and `View` following the **[MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)** architecture pattern.
Components have the prefix `SX` to clearly distinguish base components from components within our features.

## Generate component

To generate the component, run the command

```sh
pnpm run comp:gen component_name
```

## Dark Mode

All components automatically support dark mode. To enable or manage dark mode, use the `useTheme` hook from the `@hooks` folder.

## Libraries Used

Here are the libraries used by components:

- **[Lodash](https://lodash.com/)**: A utility library delivering modularity, performance, & extras (if used).
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)**: A library for handling gestures in React Native.
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: A library for creating animations in React Native.
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)**: A library for using linear gradients in Expo projects.
- **[Shopify Flash List](https://shopify.github.io/flash-list/docs/)**: A performant list component for React Native, designed for handling large lists efficiently.

**Please try to install as few new libraries as possible. If you do install any new libraries, please update this document accordingly.**
