import * as Select from '@radix-ui/react-select';

const styles = [
  { id: 'watercolor', name: 'Watercolor', description: 'Delicate, transparent colors with soft edges' },
  { id: 'anime', name: 'Anime', description: 'Japanese animation style with vibrant colors' },
  { id: 'cyberpunk', name: 'Cyberpunk', description: 'Futuristic neon aesthetic with high contrast' },
  { id: 'vangogh', name: 'Van Gogh', description: 'Post-impressionist style with bold brushstrokes' },
  { id: 'oilpainting', name: 'Oil Painting', description: 'Rich textures with classical realism' },
  { id: 'digital', name: 'Digital Art', description: 'Modern digital illustration style' }
];

const StyleSelector = ({ onStyleChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {styles.map((style) => (
        <button
          key={style.id}
          onClick={() => onStyleChange(style)}
          className="p-4 border rounded-lg hover:border-blue-500 transition-colors text-left bg-white"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{style.name}</h3>
          <p className="text-sm text-gray-600">{style.description}</p>
        </button>
      ))}
    </div>
  );
};

// Simple icon components
const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8L6 4L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default StyleSelector;