import React from 'react'
import { widthType } from '..'
const widths: widthType[] = [
  {
    width: 10,
    label: '10%',
  },
  {
    width: 25,
    label: '25%',
  },
  {
    width: 50,
    label: '50%',
  },
  {
    width: 75,
    label: '75%',
  },
  {
    width: 100,
    label: '100%',
  },
]

const WidthMenu: React.FC<{ setSelectedWidth: (width: widthType) => void }> = ({
  setSelectedWidth,
}) => {
  return (
    <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
      {widths.map((item) => (
        <li
          key={item.width}
          style={{
            padding: '5px 25px',
            margin: '3px 0',
            backgroundColor: '#d6ecff',
            cursor: 'pointer',
          }}
          onClick={() => setSelectedWidth(item)}
        >
          Width:&nbsp;{item.label}
        </li>
      ))}
    </ul>
  )
}

export default WidthMenu
