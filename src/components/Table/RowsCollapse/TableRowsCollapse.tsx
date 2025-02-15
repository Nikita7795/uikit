import './TableRowsCollapse.css';

import React from 'react';

import { IconArrowDown } from '../../../icons/IconArrowDown/IconArrowDown';
import { IconArrowUp } from '../../../icons/IconArrowUp/IconArrowUp';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';

export type Props = {
  level: number;
  isExpandedByDefault?: boolean;
  toggleCollapse?: (e: React.SyntheticEvent) => void;
  isExpanded?: boolean;
  withCollapseButton?: boolean;
  children?: React.ReactNode;
};

export const cnTableRowsCollapse = cn('TableRowsCollapse');

export const TableRowsCollapse: React.FC<Props> = (props) => {
  const {
    level,
    children,
    isExpanded,
    toggleCollapse,
    withCollapseButton,
    isExpandedByDefault,
  } = props;

  const style: React.CSSProperties & {
    '--nesting-level': number;
  } = { '--nesting-level': level };

  return (
    <div style={style} className={cnTableRowsCollapse()}>
      {!isExpandedByDefault && withCollapseButton && (
        <div className={cnTableRowsCollapse('buttonContainer')}>
          <Button
            aria-expanded={isExpanded}
            iconLeft={isExpanded ? IconArrowUp : IconArrowDown}
            iconSize="s"
            onClick={toggleCollapse}
            size="xs"
            onlyIcon
            view="clear"
          />
        </div>
      )}
      <div
        className={cnTableRowsCollapse('cellContainer', {
          withExpanderPadding: !isExpandedByDefault,
        })}
      >
        {children}
      </div>
    </div>
  );
};
