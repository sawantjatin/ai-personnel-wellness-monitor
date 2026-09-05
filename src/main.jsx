import { useState } from 'react';
import { Bell, ChevronDown, LockKeyhole, Menu } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PersonnelList from './components/PersonnelList';
import GenericPage from './components/GenericPage';
import './styles.css';

function App() {
  const [page, setPage] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const content = page === 'Dashboard' ? <Dashboard navigate={setPage}/> : page === 'Personnel List' ? <PersonnelList/> : <GenericPage page={page === 'Logout' ? 'Signed out' : page}/>;

  return <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
    <Sidebar active={page} navigate={setPage} isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
    <main className="mx-auto w-full max-w-[1270px] px-4 sm:px-6 lg:px-8">
      <header className="flex h-20 items-center justify-between">
        <button className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu/></button>
        <div className="hidden lg:block"/>
        <div className="flex items-center gap-3"><button onClick={() => setShowNotifications(!showNotifications)} className="relative" aria-label="Notifications"><Bell size={21}/><i className="absolute -right-1 -top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-red-500 text-[9px] not-italic text-white">3</i></button><b className="grid h-8 w-8 place-items-center rounded-full bg-blue-700 text-white">A</b><span className="text-sm">Admin</span><ChevronDown size={17}/></div>
      </header>
      {showNotifications && <div className="mb-4 rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-800">You have 3 new welfare notifications.</div>}
      {content}
      <footer className="flex justify-center gap-2 py-5 text-[10px] text-slate-500"><LockKeyhole size={14}/>Data is encrypted and secure. Privacy of personnel is our top priority.</footer>
    </main>
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);
