import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import App from '../components/App.jsx';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Form">
        <Form />
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
