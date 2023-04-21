// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import InputMessage from '../components/InputMessage.svelte';

describe('InputMessage', () => {
  it('renders without crashing', () => {
    render(InputMessage);
    expect(screen.getByTestId('input-message')).toBeTruthy();
  });

  it('should render the input', () => {
    render(InputMessage);
    expect(screen.getByTestId('input')).toBeTruthy();
  });

  it('should render the send button', () => {
    render(InputMessage);
    expect(screen.getByTestId('send-button')).toBeTruthy();
  });
});
