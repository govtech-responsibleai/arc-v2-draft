import '@fontsource-variable/inter';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@radix-ui/colors/slate.css';
import '@radix-ui/colors/slate-dark.css';
import '@radix-ui/colors/indigo.css';
import '@radix-ui/colors/indigo-dark.css';
import '@radix-ui/colors/red.css';
import '@radix-ui/colors/red-dark.css';
import '@radix-ui/colors/amber.css';
import '@radix-ui/colors/amber-dark.css';
import '@radix-ui/colors/green.css';
import '@radix-ui/colors/green-dark.css';
import '@radix-ui/colors/violet.css';
import '@radix-ui/colors/violet-dark.css';
import './styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Follow the system's light or dark setting
const dark = window.matchMedia?.('(prefers-color-scheme: dark)');
const applyTheme = () => document.documentElement.classList.toggle('dark', !!dark?.matches);
applyTheme();
dark?.addEventListener?.('change', applyTheme);

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
