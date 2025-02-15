import './ChoiceGroupExampleText.css';

import React, { useState } from 'react';

import { cn } from '##/utils/bem';

import { cnMixSpace } from '../../../../../mixs/MixSpace/MixSpace';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { ChoiceGroup } from '../../../ChoiceGroupDeprecated';

type Item = string;

const itemsWrong: Item[] = ['Сетка', 'Таблицей', 'Карточка'];
const items: Item[] = ['Списком', 'В таблице', 'По одному'];
const itemsSimple: Item[] = ['один', 'два', 'три', 'четыре', 'пять', 'шесть'];

const cnChoiceGroupExampleText = cn('ChoiceGroupExampleText');

export const ChoiceGroupExampleText = () => {
  const [value, setValue] = useState<Item | null>(items[0]);
  return (
    <div
      className={cnDocsDecorator('Section', [
        wp.tplGrid({ 'ratio': '1-1', 'col-gap': 'full' }),
        cnChoiceGroupExampleText(),
      ])}
    >
      <div className={cnMixSpace({ m: 'm' })}>
        <div className={cnDocsExample()}>
          <p className={cnDocsExample('Caption')}>Отображение</p>
          <ChoiceGroup
            value={value}
            onChange={({ value }) => setValue(value)}
            items={itemsWrong}
            getLabel={(item) => item}
            name="ChoiceGroupExampleText"
          />
          <p className={cnDocsExample('Status', { view: 'wrong' })}>
            Неправильно
          </p>
        </div>
      </div>
      <div className={cnMixSpace({ m: 'm' })}>
        <div className={cnDocsExample()}>
          <p className={cnDocsExample('Caption')}>Как показывать товары</p>
          <ChoiceGroup
            value={value}
            onChange={({ value }) => setValue(value)}
            items={items}
            getLabel={(item) => item}
            name="ChoiceGroupExampleText"
          />
          <p className={cnDocsExample('Status', { view: 'right' })}>
            Правильно
          </p>
        </div>
      </div>
    </div>
  );
};

export const ChoiceGroupExample = () => {
  const [value, setValue] = useState<Item | null>(items[0]);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <ChoiceGroup
        value={value}
        onChange={({ value }) => setValue(value)}
        items={itemsSimple}
        getLabel={(item) => item}
        name="ChoiceGroupExampleText"
        className={cnChoiceGroupExampleText('Component')}
      />
    </StoryBookExample>
  );
};
