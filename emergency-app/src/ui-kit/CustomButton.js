export default function CustomButton({ label, onCLick }) {
  return (
    <>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          onCLick()
        }}
        className="flex justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        { label }
      </button>
    </>
  )
}
