
import { BrowserRouter } from 'react-router-dom'
import { render,screen,fireEvent } from '@testing-library/react';
 
export const renderWithRouter = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route);
    const renders = render(ui, {wrapper: BrowserRouter})
    return { 
        screen,
        fireEvent,
        ...renders
    }
  }