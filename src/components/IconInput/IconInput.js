import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...props
}) => {
  const style = SIZE[size];

  if (!style) {
    throw new Error(`Invalid size: ${size}`);
  }

  return (
      <Wrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper
          style={{
            '--size': style.iconSize + 'px'
          }}
        >
          <Icon id={icon} size={style.iconSize} strokeWidth={1} />
        </IconWrapper>
        <TextInput
            type="text"
            style={{
              '--width': width + 'px',
              '--font-size': style.fontSize / 16 + 'rem',
              '--border-bottom-line-width': style.borderBottomLineWidth + 'px',
              '--height': style.height / 16 + 'rem',
              '--padding-left': style.paddingLeft + 'px',
            }}
            {...props}
        />
      </Wrapper>
  );
};

const SIZE = {
  small: {
    borderBottomLineWidth: 1,
    fontSize: 14,
    iconSize: 16,
    height: 24,
    paddingLeft: 24,
  },
  large: {
    borderBottomLineWidth: 2,
    fontSize: 18,
    iconSize: 24,
    height: 36,
    paddingLeft: 36,
  },
}

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black}
  }
`;

const TextInput = styled.input`
  padding-left: var(--padding-left);
  appearance: none;// Remove border
  border: none;
  border-bottom: var(--border-bottom-line-width) solid ${COLORS.black};
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  color: inherit;
  font-size: var(--font-size);
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

export default IconInput;
