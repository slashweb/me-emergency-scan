export default function DataRow({title, value}) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">
        {title}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {
          typeof value === 'object' ?
            <pre>
              {value.join('\n')}
            </pre>
            : value
        }
      </dd>
    </div>
  )
}
