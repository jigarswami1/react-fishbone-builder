
// ...imports...
const DEFAULT_STATE = {
  problem: 'High defect rate',
  categories: [
    { name: 'People', causes: [] },
    { name: 'Process', causes: [] },
    { name: 'Equipment', causes: [] },
    { name: 'Materials', causes: [] },
    { name: 'Environment', causes: [] },
    { name: 'Management', causes: [] },
  ],
};

export default function App(){
  const [state, setState]   = useState(loadState('fishbone_state', DEFAULT_STATE));
  const [theme, setTheme]   = useState(loadState('fishbone_theme', 'light'));
  const [headSide, setHeadSide] = useState(loadState('fishbone_head_side', 'right'));

  useEffect(()=>{ saveState('fishbone_state', state) }, [state]);
  useEffect(()=>{ saveState('fishbone_theme', theme); document.body.classList.toggle('dark', theme==='dark') }, [theme]);
  useEffect(()=>{ saveState('fishbone_head_side', headSide) }, [headSide]);

  // Add category / cause, export/import JSON, export PNG, reset...
  // Renders <Fishbone state={state} headSide={headSide} />
}
