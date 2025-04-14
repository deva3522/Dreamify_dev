import { useState } from 'react';
import Canvas from './components/Canvas';
import StyleSelector from './components/StyleSelector';
import './App.css';

function App() {
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
    setGeneratedImage(null);
  };

  const handleGenerate = async () => {
    if (!selectedStyle) return;
    
    setIsGenerating(true);
    try {
      // Simulating AI transformation with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      setGeneratedImage('https://picsum.photos/600/600'); // Placeholder image
    } catch (error) {
      console.error('Error generating artwork:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dreamify</h1>
          <p className="text-lg text-gray-600">Turn your doodles into stunning AI-generated artworks</p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Draw your sketch</h2>
            <Canvas />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Choose an art style</h2>
            <StyleSelector onStyleChange={handleStyleChange} />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedStyle || isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Artwork'}
            </button>
          </div>

          {generatedImage && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Your Generated Artwork</h2>
              <div className="border rounded-lg overflow-hidden shadow-lg">
                <img src={generatedImage} alt="Generated artwork" className="w-full h-auto" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

}

export default App;
