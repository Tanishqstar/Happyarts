
"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Eraser, Palette, Trash2, Brush, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const DRAW_COLORS = [
  { name: 'Black', value: 'hsl(var(--foreground))' },
  { name: 'Primary', value: 'hsl(var(--primary))' },
  { name: 'Accent', value: 'hsl(var(--accent))' },
  { name: 'Blue', value: 'hsl(210, 80%, 55%)' },
  { name: 'Green', value: 'hsl(145, 63%, 42%)' },
  { name: 'Red', value: 'hsl(0, 72%, 51%)' },
];
const CANVAS_BACKGROUND_COLOR = '#FFFFFF'; // Changed to fixed white for whiteboard feel
const ERASER_COLOR = CANVAS_BACKGROUND_COLOR;

interface Point {
  x: number;
  y: number;
}

export function DrawingWhiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState(DRAW_COLORS[0].value);
  const [lineWidth, setLineWidth] = useState(5);
  const [isEraserActive, setIsEraserActive] = useState(false);

  const prepareCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    
    const container = canvas.parentElement;
    if (container) {
        canvas.width = container.offsetWidth * window.devicePixelRatio;
        canvas.height = container.offsetHeight * window.devicePixelRatio;
        canvas.style.width = `${container.offsetWidth}px`;
        canvas.style.height = `${container.offsetHeight}px`;
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    context.lineCap = 'round';
    context.lineJoin = 'round';
    // context.strokeStyle and context.lineWidth are set in useEffect
    contextRef.current = context;

    // Fill canvas with background color
    context.fillStyle = CANVAS_BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);

  }, []); // Removed color and lineWidth from dependencies as they are handled in a separate useEffect

  useEffect(() => {
    prepareCanvas();
    
    const handleResize = () => {
        prepareCanvas(); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [prepareCanvas]);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = isEraserActive ? ERASER_COLOR : color;
      contextRef.current.lineWidth = lineWidth;
    }
  }, [color, lineWidth, isEraserActive]);

  const getCoordinates = (event: React.MouseEvent | React.TouchEvent): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    if ('touches' in event) {
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      };
    }
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDrawing = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const coords = getCoordinates(event);
    if (!coords || !contextRef.current) return;
    contextRef.current.beginPath();
    contextRef.current.moveTo(coords.x, coords.y);
    setIsDrawing(true);
  }, []);

  const draw = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !contextRef.current) return;
    const coords = getCoordinates(event);
    if (!coords) return;
    contextRef.current.lineTo(coords.x, coords.y);
    contextRef.current.stroke();
  }, [isDrawing]);

  const finishDrawing = useCallback(() => {
    if (!contextRef.current) return;
    contextRef.current.closePath();
    setIsDrawing(false);
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (canvas && context) {
      context.fillStyle = CANVAS_BACKGROUND_COLOR;
      context.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
    }
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setIsEraserActive(false);
  };

  const toggleEraser = () => {
    setIsEraserActive(prev => !prev);
  };


  return (
    <div className="flex flex-col items-center gap-4 w-full h-full">
      <div className="w-full bg-muted/50 p-3 rounded-lg shadow-md flex flex-wrap justify-center items-center gap-3 md:gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-10 w-10 p-0">
              <Palette size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2">
            <div className="grid grid-cols-3 gap-1">
              {DRAW_COLORS.map((c) => (
                <Button
                  key={c.name}
                  variant="outline"
                  size="icon"
                  className={cn(
                    "h-8 w-8 rounded-full p-0 border-2",
                    !isEraserActive && color === c.value ? 'border-ring ring-2 ring-offset-2 ring-ring' : 'border-transparent',
                    // Eraser color check is implicitly handled by CANVAS_BACKGROUND_COLOR being white
                  )}
                  style={{ backgroundColor: c.value }}
                  onClick={() => handleColorChange(c.value)}
                  aria-label={`Select color ${c.name}`}
                >
                  {!isEraserActive && color === c.value && <Check size={16} className="text-white mix-blend-difference" />}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex items-center gap-2 p-2 bg-background rounded-md">
          <Brush size={20} className="text-foreground/70" />
          <Slider
            defaultValue={[lineWidth]}
            min={1}
            max={50}
            step={1}
            className="w-24 md:w-32"
            onValueChange={(value) => setLineWidth(value[0])}
            aria-label="Brush size"
          />
        </div>
        
        <Button variant={isEraserActive ? "secondary" : "outline"} onClick={toggleEraser} aria-pressed={isEraserActive} className="h-10">
          <Eraser size={20} className="mr-0 md:mr-2" /> <span className="hidden md:inline">Eraser</span>
        </Button>
        <Button variant="destructive" onClick={clearCanvas} className="h-10">
          <Trash2 size={20} className="mr-0 md:mr-2" /> <span className="hidden md:inline">Clear</span>
        </Button>
      </div>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-card rounded-xl shadow-2xl overflow-hidden cursor-crosshair touch-none">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={finishDrawing}
          onMouseLeave={finishDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={finishDrawing}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
