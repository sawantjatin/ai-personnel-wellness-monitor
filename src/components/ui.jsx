const cn = (...classes) => classes.filter(Boolean).join(' ');
export const button = 'rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800';
export function Card({ children, className }) { return <article className={cn('rounded-xl border border-slate-200 bg-white p-4 shadow-sm', className)}>{children}</article>; }
export function SectionTitle({ children, action }) { return <div className="mb-4 flex items-center justify-between"><h2 className="font-display text-sm font-bold uppercase">{children}</h2>{action}</div>; }
