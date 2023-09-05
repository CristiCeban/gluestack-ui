import type { ComponentMeta } from '@storybook/react-native';
import { Themes } from './themes';
const MyThemesMeta: ComponentMeta<typeof Themes> = {
  title: 'configuration/stories/themes',
  component: Themes,
};

export { Themes } from './themes';

export default MyThemesMeta;
