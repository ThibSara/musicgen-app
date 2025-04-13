"use client";
import { useState } from "react";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Textarea } from "./textarea";
import { Progress } from "./progress";

export function InputField() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setProgress(0);

    try {
      const response = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ descriptions: [description] }),
      });

      if (!response.ok) throw new Error("Request failed");

      const reader = response.body?.getReader();
      let receivedLength = 0;
      let chunks: Uint8Array[] = [];

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        chunks.push(value);
        receivedLength += value.length;
        setProgress((receivedLength / 100000) * 100); // 5MB estimés

        console.log(`Received chunk of ${value.length} bytes`);
        console.log(`Progress: ${progress}%`);
      }

      const blob = new Blob(chunks, { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error generating music:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card className="relative w-[350px] overflow-hidden bg-[#1C1C1E]">
        <CardHeader>
          <CardTitle className="text-white">Generate your music</CardTitle>
          <CardDescription>
            Describe the type of sound or music you want to hear.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Textarea
                id="sound-description"
                placeholder="e.g. Futuristic synthwave beat"
                className="text-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          {loading && (
            <div className="w-full">
              <Progress value={progress} className="h-2 w-full bg-gray-800" />
              <span className="text-white text-sm mt-2">
                Generating... {Math.round(progress)}%
              </span>
            </div>
          )}
          <Button variant="outline" onClick={handleGenerate} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </Button>
        </CardFooter>
      </Card>
      {audioUrl && !loading && (
        <audio controls src={audioUrl} className="mt-4 w-full" />
      )}
    </div>
  );
}
