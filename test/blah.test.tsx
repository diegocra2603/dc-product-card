import * as ReactDOM from 'react-dom';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.unmountComponentAtNode(div);
    console.log('Hola Mundo')
  });
});
