import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);

  useEffect(() => {
    // Initialize Fabric canvas
    fabricRef.current = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: 600,
      height: 600,
      backgroundColor: 'white'
    });

    // Set up drawing brush
    const brush = fabricRef.current.freeDrawingBrush;
    brush.color = '#000000';
    brush.width = 3;

    return () => {
      // Cleanup
      fabricRef.current?.dispose();
    };
  }, []);

  const clearCanvas = () => {
    fabricRef.current?.clear();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas ref={canvasRef} className="border border-gray-300 rounded-lg shadow-lg" />
      <button
        onClick={clearCanvas}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Clear Canvas
      </button>
    </div>
  );
};

export default Canvas;