import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Checkbox } from '../../../Checkbox';

export const CheckboxExampleAlign = () => (
  <StoryBookExample
    className={cnDocsDecorator('Section', [
      wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' }),
    ])}
  >
    <Checkbox
      align="center"
      checked
      label="Длинный текст для чекбокса с выравниванием по центру, здесь несколько строк"
      onChange={() => console.log('onChange')}
    />
    <Checkbox
      align="top"
      checked
      label="Длинный текст для чекбокса с выравниванием по верху, здесь несколько строк"
      onChange={() => console.log('onChange')}
    />
  </StoryBookExample>
);
