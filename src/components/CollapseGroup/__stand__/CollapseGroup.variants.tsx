import { useBoolean, useSelect } from '@consta/stand';
import React from 'react';

import { IconAdd } from '../../../icons/IconAdd/IconAdd';
import { IconRemove } from '../../../icons/IconRemove/IconRemove';
import { Badge } from '../../Badge/Badge';
import {
  collapsePropCloseDirectionIconDefault,
  collapsePropDirectionIcon,
  collapsePropDirectionIconDefault,
  collapsePropHorizontalSpace,
  collapsePropIconPosition,
  collapsePropIconPositionDefault,
  collapsePropSize,
  collapsePropSizeDefault,
  collapsePropView,
  collapsePropViewDefault,
} from '../../Collapse/Collapse';
import { Item, items } from '../__mocks__/mock.data';
import { CollapseGroup } from '../CollapseGroup';

const Variants = () => {
  const size = useSelect('size', collapsePropSize, collapsePropSizeDefault);
  const hoverEffect = useBoolean('hoverEffect', false);
  const isAccordion = useBoolean('isAccordion', false);
  const view = useSelect('view', collapsePropView, collapsePropViewDefault);
  const divider = useBoolean('divider', false);
  const horizontalSpace = useSelect(
    'horizontalSpace',
    collapsePropHorizontalSpace,
    collapsePropHorizontalSpace[0],
  );
  const directionIcon = useSelect(
    'directionIcon',
    collapsePropDirectionIcon,
    collapsePropDirectionIconDefault,
  );
  const closeDirectionIcon = useSelect(
    'closeDirectionIcon',
    collapsePropDirectionIcon,
    collapsePropCloseDirectionIconDefault,
  );
  const iconPosition = useSelect(
    'iconPosition',
    collapsePropIconPosition,
    collapsePropIconPositionDefault,
  );
  const rightSide = useBoolean('rightSide', false);
  const withCustomIcon = useBoolean('withCustomIcon', false);

  const getItemRightSide = (item: Item) => {
    if (rightSide) {
      return <Badge size="s" status={item.status} label={item.status} />;
    }

    return undefined;
  };

  return (
    <CollapseGroup
      style={{ maxWidth: 300 }}
      items={items}
      isAccordion={isAccordion}
      size={size}
      hoverEffect={hoverEffect}
      view={view}
      divider={divider}
      horizontalSpace={horizontalSpace}
      {...(iconPosition === 'left'
        ? {
            iconPosition,
            getItemRightSide,
          }
        : { iconPosition })}
      {...(withCustomIcon
        ? {
            icon: IconAdd,
            closeIcon: IconRemove,
          }
        : {
            directionIcon,
            closeDirectionIcon,
          })}
    />
  );
};

export default Variants;
