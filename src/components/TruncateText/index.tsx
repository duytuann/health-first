import React, { useRef, useEffect, useState } from 'react';

import { TruncateTextWrapper } from './styles';
interface Props {
  maxLine: number;
  maxWidth?: number | string;
  content?: string;
  children?: number | string | React.ReactNode;
}

const TruncateText: React.FC<Props> = props => {
  const { children, content, maxLine, maxWidth } = props;
  const truncateElement = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [isShowTooltips, setIsShowTooltips] = useState(false);

  useEffect(() => {
    if (truncateElement.current) {
      const { scrollHeight, clientHeight } = truncateElement.current;
      if (scrollHeight > clientHeight) {
        setIsShowTooltips(true);
      }
    }

    return () => {};
  }, [truncateElement]);

  return (
    <TruncateTextWrapper
      maxLine={maxLine}
      maxWidth={maxWidth}
      title={isShowTooltips ? content : ''}
      ref={truncateElement}
    >
      {children}
    </TruncateTextWrapper>
  );
};

export default TruncateText;
