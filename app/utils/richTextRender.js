export function richTextRender(node) {
  if (node?.nodeType === 'paragraph') {
    return (
      <h1
        key={node.content[0]?.value}
        className='font-bold text-purple-800 leading-tight'
      >
        {node.content[0]?.value}
      </h1>
    )
  } else if (node?.nodeType === 'unordered-list') {
    return (
      <ul key={node.nodeType} className='space-y-2 mt-4 text-lg'>
        {node.content.map((listItem, index) => (
          <li key={index} className='flex items-center space-x-2'>
            <span className='text-red-500'>&#10003;</span>
            <span>{listItem.content[0]?.content[0]?.value}</span>
          </li>
        ))}
      </ul>
    )
  }
  return null
}
