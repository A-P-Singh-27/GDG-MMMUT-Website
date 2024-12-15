import { UL } from '@/stylings/UL'
import React from 'react'

export default function Eventexplore({event}) {
  console.log(event)
  return (
    <UL>
      <li>{event.name}</li>
    </UL>
  )
}
