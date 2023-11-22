/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
    const style = SIZES[size];

    if(!style) {
        throw new Error(`Unknown size passed to ProgressBar: ${size}`);
    }

  return (
      <Wrapper
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{
              '--padding': style.padding + 'px',
              '--borderRadius': style.borderRadius + 'px',
          }}
      >
          <VisuallyHidden>{value}%</VisuallyHidden>
          <ProgressWrapper>
              <Progress
                  style={{
                      '--width': value + '%',
                      '--height': style.height + 'px',
                  }}
              />
          </ProgressWrapper>
      </Wrapper>
  );
};

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    borderRadius: 8,
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--borderRadius);
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

const ProgressWrapper = styled.div`
  border-radius: 4px;
  // Trim off corners when progress bar is near 100%
  overflow: hidden;
`;

export default ProgressBar;
