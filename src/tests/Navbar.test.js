// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Navbar from '../components/Navbar.svelte';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(Navbar);
    expect(screen.getByTestId('navbar')).toBeTruthy();
  });

  it('should render a title', () => {
    render(Navbar);
    expect(screen.getByTestId('navbar-title')).toBeTruthy();
  });
});
