'use client'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
 
import { CalendarDays } from 'lucide-react'
import { Button } from '../ui/button'
  
const HCard = () => {
  return (

    <HoverCard>
      <HoverCardTrigger className='flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap items-center justify-center' asChild>
        <Button variant="link">@pesmcoe</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HCard