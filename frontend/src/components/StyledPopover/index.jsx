import React from 'react';
import { Root, StyledTrigger, StyledContent } from './styles'

export const StyledPopover = ({ name, children, width }) => {
  return (
    <Root>
      <StyledTrigger width={width}>{name}</StyledTrigger>
      <StyledContent sideOffset={13}>
        {children}
      </StyledContent>
    </Root>
  );
};
