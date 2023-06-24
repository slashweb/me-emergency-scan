import DataRow from "../ui-kit/DataRow";


export default function Record({ data, wallet, key }) {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User profile</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">

          <DataRow
            title='Name'
            value={ data.record.name }
          />

          <DataRow
            title='Blood Type'
            value={ data.record.bloodType }
          />

          <DataRow
            title='Emergency Phone'
            value={ data.record.emergencyPhone }
          />

          <DataRow
            title='Emergency Name'
            value={ data.record.emergencyName }
          />

          <DataRow
            title='Allergies'
            value={ data.record.alergies }
          />

          <DataRow
            title='Chronic Conditions'
            value={ data.record.cronichConditions }
          />

          <DataRow
            title='Surgeries'
            value={ data.record.surgeries }
          />

          <DataRow
            title='Drugs'
            value={ data.record.drugs }
          />

        </dl>
      </div>
    </div>
  )
}
