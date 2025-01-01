'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

export default function Accordian({ items, index }) {

  return (
        <AccordionItem key={index}>
          <AccordionHeader targetId={items.id}>{items.title}</AccordionHeader>
          <AccordionBody accordionId={items.id}>{items.para}</AccordionBody>
        </AccordionItem>
  );
}
