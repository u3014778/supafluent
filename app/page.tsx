"use client"

import { TextCard } from "@/components/textcard";
import { ImgCard } from "@/components/imgcard";
import {DefaultPalette, IStackItemStyles, IStackStyles, Stack} from '@fluentui/react';
import { StatsTableCard } from "@/components/statstablecard";

export default function Index() {
  const itemAlignmentsStackStyles: IStackStyles = {
    root: {
      
      
    },
  };
  const stackItemStyles: IStackItemStyles = {
    root: {
   
      color: DefaultPalette.white,
      padding: 5,
    },
  };
  return (
    <>
    <div>
      <Stack
        enableScopedSelectors
        horizontal
        disableShrink
        styles={itemAlignmentsStackStyles}
      >
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><TextCard message={'countries'} total={20}/></span>
        </Stack.Item>
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><TextCard total={50} message={'clubs'}/></span>
        </Stack.Item>
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><TextCard total={200} message={'players'}/></span>
        </Stack.Item>
      </Stack>
      <Stack
        enableScopedSelectors
        horizontal
        disableShrink
        styles={itemAlignmentsStackStyles}
      >
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><ImgCard text={'Players growth'} src={'/images/linechart.png'}/></span>
        </Stack.Item>
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><ImgCard text={'Seasons result'} src={'/images/barchart.png'}/></span>
        </Stack.Item>
      </Stack>
      <Stack
        enableScopedSelectors
        horizontal
        disableShrink
        styles={itemAlignmentsStackStyles}
      >
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><StatsTableCard text={'Players stats'} src={'/images/playerstats.png'}/></span>
        </Stack.Item>
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><StatsTableCard text={'Teams stats'} src={'/images/test.png'}/></span>
        </Stack.Item>
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span><StatsTableCard text={'Transfer stats'} src={'/images/transfer.png'}/></span>
        </Stack.Item>
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span></span>
        </Stack.Item>
      </Stack>
    </div>
    </>
  );
}
