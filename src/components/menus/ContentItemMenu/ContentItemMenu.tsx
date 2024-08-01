import { Icon } from '@/components/ui/Icon'
import { Toolbar } from '@/components/ui/Toolbar'
import { Editor } from '@tiptap/react'

import * as Popover from '@radix-ui/react-popover'
import { Surface } from '@/components/ui/Surface'
import { DropdownButton } from '@/components/ui/Dropdown'
import useContentItemActions from './hooks/useContentItemActions'
import { useData } from './hooks/useData'
import { useEffect, useState } from 'react'

export type ContentItemMenuProps = {
  editor: Editor
}

export const ContentItemMenu = ({ editor }: ContentItemMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const data = useData()
  const actions = useContentItemActions(editor, data.currentNode, data.currentNodePos)

  return <div>&nbsp;</div>
}
