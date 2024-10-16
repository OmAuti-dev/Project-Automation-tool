'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsList } from '@/components/ui/tabs'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-providers'
import { useEditor } from '@/providers/editor-provider'
import { Separator } from '@radix-ui/react-separator'
import { Tabs, TabsContent, TabsTrigger } from '@radix-ui/react-tabs'
import React from 'react'
import EditorCanvasIconHelper from './editor-canvas-icon-helper'
import { EditorCanvasDefaultCardTypes } from '@/lib/constants'
import { onDragStart } from '@/lib/editor-utils'

type Props = {
    nodes: EditorNodeType[]
}

    const EditorCanvasSidebar = ({ nodes }: Props) => {

        //WIP: connect db stuff
    const {state} = useEditor()
    const {nodeConnection} = useNodeConnections()
    return <aside>
        <Tabs defaultValue='actions'
        className='h-screen overflow-scroll pb-24'>
            <TabsList
                className='bg-transparent gap-3'>
                    <TabsTrigger value = "actions">Actions</TabsTrigger>
                    <TabsTrigger value = "settings">Settings</TabsTrigger>

                </TabsList>
                <Separator />
                <TabsContent
                    value="actions"
                    className="flex flex-col gap-4 p-4">
                          {Object.entries(EditorCanvasDefaultCardTypes)
            .filter(
              ([_, cardType]) =>
                (!nodes.length && cardType.type === 'Trigger') ||
                (nodes.length && cardType.type === 'Action')
            )
            .map(([cardKey, cardValue]) => (
              <Card
                key={cardKey}
                draggable
                className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                onDragStart={(event) =>
                  onDragStart(event, cardKey as EditorCanvasTypes)
                }
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes} />
                  <CardTitle className="text-md">
                    {cardKey}
                    <CardDescription>{cardValue.description}</CardDescription>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
                    </TabsContent>
        </Tabs>
    </aside>
  
}

export default EditorCanvasSidebar