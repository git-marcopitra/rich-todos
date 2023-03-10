import { SystemStyleObject } from '@styled-system/css';
import { CSSProperties, HTMLAttributes } from 'react';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TextShadowProps,
  TypographyProps as TypoProps,
} from 'styled-system';

export interface TypographyProps
  extends LayoutProps,
    TypoProps,
    ColorProps,
    SpaceProps,
    BorderProps,
    FlexboxProps,
    PositionProps,
    TextShadowProps,
    Omit<HTMLAttributes<HTMLElement>, 'color'> {
  hover?: SystemStyleObject;
  active?: SystemStyleObject;
  as?: keyof JSX.IntrinsicElements;
  cursor?: CSSProperties['cursor'];
  whiteSpace?: CSSProperties['whiteSpace'];
  textTransform?: CSSProperties['textTransform'];
}
