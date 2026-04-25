import { ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "srcSet" | "sizes"> & {
  /** Base/full-resolution fallback (used as `src`) */
  src: string;
  /** Map of width (px) -> URL. e.g. { 480: url480, 960: url960, 1440: url1440 } */
  sources?: Record<number, string>;
  /** Optional `sizes` attribute. Defaults to a sensible mobile-first hint. */
  sizes?: string;
  /** Native loading. Defaults to "lazy". Pass "eager" for above-the-fold. */
  loading?: "lazy" | "eager";
};

/**
 * Lightweight responsive <img> with srcSet/sizes support.
 * Falls back to the plain `src` when no `sources` are provided.
 */
export function ResponsiveImage({
  src,
  sources,
  sizes = "(max-width: 640px) 100vw, 560px",
  loading = "lazy",
  decoding = "async",
  ...rest
}: Props) {
  const srcSet = sources
    ? Object.entries(sources)
        .map(([w, url]) => `${url} ${w}w`)
        .join(", ")
    : undefined;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  );
}
