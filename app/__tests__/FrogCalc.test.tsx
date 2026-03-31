/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import FrogCalc from '../components/FrogCalc'; 

describe('Calculatrice Grenouille 🐸', () => {
  
  it('devrait afficher "0" par défaut', () => {
    render(<FrogCalc />);
    const display = screen.getByRole('textbox') as HTMLInputElement;
    expect(display.value).toBe('0');
  });

  it('devrait effectuer une addition simple (2 + 3 = 5)', () => {
    render(<FrogCalc />);
    
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    const display = screen.getByRole('textbox') as HTMLInputElement;
    expect(display.value).toBe('5');
  });

  it('devrait réinitialiser l\'affichage avec le bouton "C"', () => {
    render(<FrogCalc />);
    
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('C'));

    const display = screen.getByRole('textbox') as HTMLInputElement;
    expect(display.value).toBe('0');
  });

  it('devrait gérer la division (8 / 2 = 4)', () => {
    render(<FrogCalc />);
    
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    const display = screen.getByRole('textbox') as HTMLInputElement;
    expect(display.value).toBe('4');
  });

  it('devrait afficher "Erreur" pour une opération invalide', () => {
    render(<FrogCalc />);
    
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('='));

    const display = screen.getByRole('textbox') as HTMLInputElement;
    expect(display.value).toBe('Erreur');
  });
});