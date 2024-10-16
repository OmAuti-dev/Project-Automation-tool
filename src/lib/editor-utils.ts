import { EditorCanvasCardType } from "./types"

export const onDragStart = (
    event: any,
    nodeType: EditorCanvasCardType['type']
) => {
    event.dataTransfer.setData('application/reactlow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
}