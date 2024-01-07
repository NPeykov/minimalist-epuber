const PreviewButtons = () => {
  return (
    <div className="flex flex-wrap justify-center items-center absolute w-full left-0 -bottom-[14px]">
      {/* NOTE: below justify can be remplaced by others type of justify */}
      {/* TODO: change bg, add a rounded border or just delete it */}
      <div className="flex flex-wrap justify-center items-center bg-green-400 gap-2">
        <p className="">Hola</p>
        <p className="">Hola</p>
        <p className="">Hola</p>
      </div>
    </div>
  )
}

export default PreviewButtons
