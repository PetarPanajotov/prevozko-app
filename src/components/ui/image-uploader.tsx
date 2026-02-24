'use client';

import { useState, useCallback, useEffect } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, UploadCloud } from 'lucide-react';
import Image from 'next/image';

interface FileWithPreview extends FileWithPath {
  preview: string;
}

interface ImageUploaderProps {
  value: File[];
  onChange: (files: File[]) => void;
}

export default function ImageUploader({ value, onChange }: ImageUploaderProps) {
  const [previews, setPreviews] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );

      onChange([...(value || []), ...newFiles]);

      setPreviews((prev) => [...prev, ...newFiles]);
    },
    [onChange, value],
  );

  const removeFile = (name: string) => {
    const filteredFiles = value.filter((f) => f.name !== name);
    const filteredPreviews = previews.filter((f) => f.name !== name);

    onChange(filteredFiles);
    setPreviews(filteredPreviews);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 5,
  });

  useEffect(() => {
    return () => previews.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [previews]);

  return (
    <div className="space-y-4">
      <Card
        {...getRootProps()}
        className={`hover:bg-accent/50 cursor-pointer border-2 border-dashed p-12 transition-all ${isDragActive ? 'border-primary bg-accent' : 'border-muted-foreground/20'}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2">
          <UploadCloud className="text-muted-foreground h-8 w-8" />
          <p className="text-sm font-medium">
            {isDragActive ? 'Пуснете снимките тук' : 'Плъзнете снимки или кликнете за избор'}
          </p>
        </div>
      </Card>

      {previews.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {previews.map((file) => (
            <div key={file.name} className="group relative overflow-hidden rounded-lg border">
              <Image
                src={file.preview}
                alt="preview"
                width={200}
                height={100}
                className="h-24 w-full object-cover"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6"
                onClick={() => removeFile(file.name)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
