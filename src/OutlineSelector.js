import React, { memo } from 'react';

import { useGlobals, useParameter } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';

import { PARAM_KEY as OUTLINE_PARAM_KEY } from './constants';

export const OutlineSelector = memo(() => {
  const [globals, updateGlobals] = useGlobals();

  const { outline } = useParameter(OUTLINE_PARAM_KEY, {
    outline: { disable: false },
  });

  if (outline.disable) {
    return null;
  }

  const isActive = globals[OUTLINE_PARAM_KEY]?.outline || false;

  return (
    <IconButton
      key="outline"
      active={isActive}
      title="Apply outlines to the preview"
      onClick={() =>
        updateGlobals({
          [OUTLINE_PARAM_KEY]: {
            ...globals[OUTLINE_PARAM_KEY],
            outline: !isActive,
          },
        })
      }
    >
      <Icons icon="outline" />
    </IconButton>
  );
});
