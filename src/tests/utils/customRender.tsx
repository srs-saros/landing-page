import { render } from '@testing-library/react';

export * from '@testing-library/react';

const customRender = (ui: any) => render(ui);

export { customRender as render };
