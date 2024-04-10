import { Logo } from './logo'

export default function Header() {
  return (
    <header className="w-full flex-none bg-white px-2 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center justify-center gap-x-3">
            <div className="rounded-full bg-pink-400 p-4"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
