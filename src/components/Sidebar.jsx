import { LogOut, ShieldCheck, X } from 'lucide-react';
import { navItems } from './data';
const cn = (...classes) => classes.filter(Boolean).join(' ');

export default function Sidebar({ active, navigate, isOpen, onClose }) {
  return <aside className={cn('fixed inset-y-0 left-0 z-20 flex w-64 -translate-x-full flex-col bg-linear-to-br from-[#06294e] via-[#052346] to-[#071e3c] p-4 pt-6 text-white transition lg:static lg:translate-x-0', isOpen && 'translate-x-0')}>
    <div className="flex items-center gap-2 px-2 pb-8"><div className="grid h-12 w-9 place-items-center rounded-xl border border-amber-200 bg-[#174579]"><ShieldCheck/></div><b className="text-[13px]">FORCE WELFARE AI<small className="mt-1 block text-[9px] font-normal opacity-75">Welfare Monitoring System</small></b><button className="ml-auto lg:hidden" onClick={onClose}><X/></button></div>
    <nav className="grid gap-1">{navItems.map(([Icon, label]) => <button key={label} onClick={() => { navigate(label); onClose(); }} className={cn('flex items-center gap-4 rounded-lg px-4 py-3 text-left text-sm hover:bg-white/10', active === label && 'bg-linear-to-r from-blue-600 to-blue-700')}><Icon size={19}/>{label}</button>)}</nav>
    <div className="mt-8 rounded-xl border border-[#4c7097] bg-[#10355c88] p-4 text-sm"><b className="flex gap-2"><ShieldCheck/>AI Mission</b><p className="leading-7">Supporting Personnel.<br/>Protecting well-being.</p><div className="text-center text-3xl text-blue-300/40">♟ ♟ ♟</div></div>
    <button onClick={() => navigate('Logout')} className="mt-auto flex gap-4 rounded-lg px-4 py-3 text-sm hover:bg-white/10"><LogOut/>Logout</button>
  </aside>;
}
