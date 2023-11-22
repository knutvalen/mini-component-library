import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalBit>
            {displayedValue}
            <IconWrapper
              style={{
                '--size': 24 + 'px'
              }}
            >
                <Icon id='chevron-down' size={24} strokeWidth={1} />
            </IconWrapper>
        </PresentationalBit>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;// Remove height from the 'select' tag
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-family: 'Roboto', sans-serif;
  font-size: ${16 / 16}rem;
  font-weight: 400;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;// Fallback outline style
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default Select;
