import { render, screen } from '@testing-library/react';
import { UrlList } from '../components/UrlList';
import { Shortened } from '../schema/urlData';
describe('UrlList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UrlList urls={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it('should contain the list of URLs provided', () => {
    const urls: Array<Shortened> = [
      { id: 0, original: 'https://c4cneu.com', short: 'http://short.com/s/0' },
    ];

    render(<UrlList urls={urls} />);
    // Using my custom button implemntation, only the short or original is visible,
    // so you also have to mock a button click with ButtonReveal component
    expect(screen.getByText(urls[0].short, { exact: false })).toBeTruthy();
  });
});
