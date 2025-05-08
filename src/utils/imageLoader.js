export default function imageLoader({ src, width, quality }) {
  if (src.startsWith('/')) {
    return process.env.NODE_ENV === 'production'
      ? `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}${src}`
      : src;
  }
  return src;
}