import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Item, items, simpleItems } from '../../../__mocks__/data.mock';
import { RadioGroup } from '../../../RadioGroupDeprecated';

export function RadioGroupExampleDisabled() {
  const [value, setValue] = React.useState<string | null>(simpleItems[0]);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <RadioGroup
        value={value}
        items={simpleItems}
        getLabel={(item) => item}
        onChange={({ value }) => setValue(value)}
        disabled
      />
    </StoryBookExample>
  );
}

export function RadioGroupExampleDisabledItem() {
  const [value, setValue] = React.useState<Item | null>(items[0]);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <RadioGroup
        value={value}
        items={items}
        getLabel={(item) => item.name}
        getDisabled={(item) => item.disabled}
        onChange={({ value }) => setValue(value)}
      />
    </StoryBookExample>
  );
}
