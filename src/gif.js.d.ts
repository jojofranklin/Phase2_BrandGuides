declare module "gif.js" {
  interface GifOptions {
    workers?: number;
    quality?: number;
    width?: number;
    height?: number;
    workerScript?: string | undefined;
    repeat?: number;
    background?: string;
    transparent?: string | null;
  }

  interface AddFrameOptions {
    delay?: number;
    copy?: boolean;
    dispose?: number;
  }

  class GIF {
    constructor(options?: GifOptions);
    addFrame(
      image: HTMLImageElement | HTMLCanvasElement | CanvasRenderingContext2D,
      options?: AddFrameOptions
    ): void;
    on(event: "finished", callback: (blob: Blob) => void): void;
    on(event: "progress", callback: (progress: number) => void): void;
    render(): void;
    abort(): void;
  }

  export default GIF;
}
