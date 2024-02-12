export function NoteCard() {
    return (
        <button className="rounded-md text-left bg-slate-700 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 z-10">
        <span className="text-small font-medium text-slate-300">
          há 3 dias
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, error. Nihil aliquam iure error maxime, fuga odio ipsum quae aut pariatur dolor, facilis doloribus tenetur. Reiciendis necessitatibus illo assumenda voluptatum!
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </button>
    )
}